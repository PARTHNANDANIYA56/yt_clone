import like from "../../../public/like.webp";
import dislike from "../../../public/dislike.webp";
import share from "../../../public/share.webp";
import save from "../../../public/save.webp";
import moment from "moment";
import { value_Converter } from "../../data";
export const PlayVideoInfo = ({ apiData }) => {
    const { snippet, statistics } = apiData;
    return (
        <>
            <h3>{snippet.title}</h3>
            <div className="play-video-info">
                <p>
                    {value_Converter(statistics.viewCount)} Views
                    &bull; {moment(snippet.publishedAt).fromNow()}
                </p>
                <div>
                    <span>
                        <img src={like} alt="like" />
                        {value_Converter(statistics.likeCount)}
                    </span>
                    <span>
                        <img src={dislike} alt="dislike" />
                    </span>
                    <span>
                        <img src={share} alt="share" />
                        Share
                    </span>
                    <span>
                        <img src={save} alt="save" />
                        Save
                    </span>
                </div>
            </div></>
    )
}