import { useEffect, useState } from "react";
import "./Recommended.css";
import { API_KEY, value_Converter } from './../../data';
import { NavLink } from 'react-router-dom';
export const Recommended = ({ categoryId }) => {
    const [apiData, setApiData] = useState([]);
    const fetchReletedVideos = async () => {
        const reletedVideoUrl = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=40&regionCode=IN&videoCategoryId=${categoryId}&key=${API_KEY}`;
        await fetch(reletedVideoUrl).then((response) => response.json()).then((data) => setApiData(data.items));
    }
    useEffect(() => {
        fetchReletedVideos()
    }, [])
    return (
        <div className="recommended">
            {apiData.map((curVideo) => {
                return (
                    <NavLink to={`/video/${curVideo.snippet.categoryId}/${curVideo.id}`} key={curVideo.id} className="side-video-list">
                        <img src={curVideo.snippet.thumbnails.medium.url} alt={curVideo.snippet.title} />
                        <div className="vid-info">
                            <h4>{curVideo.snippet.title}</h4>
                            <p>{curVideo.snippet.channelTitle}</p>
                            <p>{value_Converter(curVideo.statistics.viewCount)} Views</p>
                        </div>
                    </NavLink>
                )
            })}
        </div>
    );
};
