import formatPublishTime from "../../util/formatPublishTime";
import formateViewCount from "../../util/formatViewCount";

const VideoDetails = ({ channelId, channelTitle, description, liveBroadcastContent, viewCount, publishTime, title }) => {


    return <div className="videoDtails">
        <h3>{liveBroadcastContent !== "none" && <span>🔴</span>} {title}</h3>
        <span>{channelTitle} • {formateViewCount(viewCount)} views • {formatPublishTime(publishTime)}</span>
        <p>{liveBroadcastContent !== "none" && <span>🔴LIVE:</span>}{description}</p>
    </div>
}

export default VideoDetails;