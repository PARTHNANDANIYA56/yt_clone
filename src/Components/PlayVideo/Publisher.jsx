import { value_Converter } from "../../data"

export const Publisher = ({ channelData, apiData }) => {
    return (
        <div className="publisher">
            <img src={channelData.snippet.thumbnails.medium.url} alt={channelData.snippet.localized.title} />
            <div>
                <p>{apiData.snippet.channelTitle}</p>
                <span>{value_Converter(channelData.statistics.subscriberCount)} Subscribers</span>
            </div>
            <button>Subscribe</button>
        </div>
    )
}