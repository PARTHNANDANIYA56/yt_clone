import "./PlayVideo.css";
import { useEffect, useState } from "react";
import { API_KEY } from "./../../data";
import { useParams } from "react-router-dom";
import { VidDescription } from "./VidDescription";
import { Publisher } from "./Publisher";
import { PlayVideoInfo } from "./PlayVideoInfo";

export const PlayVideo = () => {
    const { videoId } = useParams();
    const [apiData, setApiData] = useState(null);
    const [channelData, setChannelData] = useState(null);
    const [commentData, setCommentData] = useState([]);

    useEffect(() => {
        const fetchVideoData = async () => {
            try {
                const videoDetailsUrl = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=${videoId}&key=${API_KEY}`;
                const videoResponse = await fetch(videoDetailsUrl);
                const videoData = await videoResponse.json();
                const videoItem = videoData.items[0];
                setApiData(videoItem);

                if (videoItem) {
                    const channelDetailsUrl = `https://youtube.googleapis.com/youtube/v3/channels?part=snippet%2CcontentDetails%2Cstatistics&id=${videoItem.snippet.channelId}&key=${API_KEY}`;
                    const channelResponse = await fetch(channelDetailsUrl);
                    const channelData = await channelResponse.json();
                    setChannelData(channelData.items[0]);

                    const commentsDetailsUrl = `https://youtube.googleapis.com/youtube/v3/commentThreads?part=snippet%2Creplies&maxResults=30&videoId=${videoId}&key=${API_KEY}`;
                    const commentsResponse = await fetch(commentsDetailsUrl);
                    const commentsData = await commentsResponse.json();
                    setCommentData(commentsData.items);
                }
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchVideoData();
    }, [videoId]);

    if (!apiData || !channelData || !commentData) {
        return (
            <div className="loading"><h3>Loading...</h3></div>
        );
    }

    return (
        <div className="play-video">
            <iframe
                src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
            ></iframe>
            <PlayVideoInfo apiData={apiData} />
            <hr />
            <Publisher apiData={apiData} channelData={channelData} />
            <VidDescription apiData={apiData} commentData={commentData} />
        </div>
    );
};
