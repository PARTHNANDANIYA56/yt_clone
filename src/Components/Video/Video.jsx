import { useParams } from "react-router-dom";
import { PlayVideo } from "../PlayVideo/PlayVideo";
import { Recommended } from "../Recommended/Recommended";
import "./Video.css";
export const Video = () => {
    const { videoId, categoryId } = useParams();
    return (
        <div className="play-container">
            <PlayVideo videoId={videoId} categoryId={categoryId} />
            <Recommended categoryId={categoryId}/>
        </div>
    );
};
