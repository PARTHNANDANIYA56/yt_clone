import "./Feed.css";
import { NavLink } from "react-router-dom";
import { API_KEY, value_Converter } from "../../data";
import { useEffect, useState } from "react";
import moment from "moment";

export const Feed = ({ category }) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchData = async () => {
    const videoListUrl = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=IN&videoCategoryId=${category}&key=${API_KEY}`;
    try {
      const response = await fetch(videoListUrl);
      const result = await response.json();
      setData(result.items);
      setTimeout(() => {
        setLoading(false);
      }, 100);
    } catch (error) {
      console.error("Error fetching data:", error);
      setLoading(false);
    }
  };

  useEffect(() => {
    setLoading(true);
    fetchData();
  }, [category]);

  if (loading) {
    return <div className="loading"><h3>Loading...</h3 ></div>
  }

  return (
    <div className="feed">
      {data.length === 0 ? (
        <div className="loading"><h3>Loading...</h3></div>
      ) : (
        data.map((curVideo) => {
          const { snippet, statistics } = curVideo;
          return (
            <NavLink
              key={curVideo.id}
              to={`video/${snippet.categoryId}/${curVideo.id}`}
              className="card"
            >
              <img src={snippet.thumbnails.medium.url} alt={snippet.title} />
              <h2>{snippet.title}</h2>
              <h3>{snippet.channelTitle}</h3>
              <p>
                {value_Converter(statistics.viewCount)} views &bull;{" "}
                {moment(snippet.publishedAt).fromNow()}
              </p>
            </NavLink>
          );
        })
      )}
    </div>
  );
};
