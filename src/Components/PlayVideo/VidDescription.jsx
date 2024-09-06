import { value_Converter } from "../../data";
import like from "../../../public/like.webp";
import dislike from "../../../public/dislike.webp";
export const VidDescription = ({ apiData, commentData }) => {
    const { snippet, statistics } = apiData;
    return (<>
        <div className="vid-description">
            <p>
                {snippet.description}
            </p>
            <hr />
            <h4>{value_Converter(statistics.commentCount)} Comments</h4>
            {commentData.map((curComment) => {
                const { id, snippet } = curComment;
                return (
                    <div key={id} className="comment">
                        <img src={snippet.topLevelComment.snippet.authorProfileImageUrl} alt={snippet.topLevelComment.snippet.authorDisplayName} />
                        <div>
                            <h3>
                                {snippet.topLevelComment.snippet.authorDisplayName} <span>1 day ago</span>
                            </h3>
                            <p>
                                {snippet.topLevelComment.snippet.textDisplay}
                            </p>
                            <div className="comment-action">
                                <img src={like} alt="like" />
                                <span>{value_Converter(snippet.topLevelComment.snippet.likeCount)}</span>
                                <img src={dislike} alt="dislike" />
                            </div>
                        </div>
                    </div>
                )
            })}
        </div>
    </>)
}