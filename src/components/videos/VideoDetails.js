import { Fragment } from "react";
import useWindowDimensions from "../../hooks/use-layout";
import formatPublishTime from "../../util/formatPublishTime";
import formateViewCount from "../../util/formatViewCount";

const VideoDetails = ({ channelTitle, description, liveBroadcastContent, viewCount, publishTime, title, kind, subscriberCount, videoCount }) => {

    const { dimensions } = useWindowDimensions();
    let layout = "desktop";

    if (dimensions?.width <= 600) {
        layout = "mobile";
    }

    let channelContent = <Fragment>
        <h3 className="hFont">{channelTitle}</h3>
        <span>{videoCount} videos</span>
        <span>{subscriberCount} subscribers</span>
    </Fragment>

    return <div className="videoDtails">
        <div className="videoStats">
            {
                layout === "mobile" ?

                    kind === "youtube#channel" ? channelContent :
                        <Fragment>
                            <h3 className="hFont">{liveBroadcastContent !== "none" && <span>🔴</span>} {title.slice(0, 50)}</h3>
                            <span>{channelTitle}</span>
                            <span>{formateViewCount(viewCount)} views</span>
                        </Fragment>

                    :


                    <Fragment>
                        <h3>{liveBroadcastContent !== "none" && <span>🔴</span>} {title}</h3>
                        {
                            kind === "youtube#channel" ?
                                <span>{subscriberCount} subscribers</span>
                                :
                                <>
                                    <span>{channelTitle} • {formateViewCount(viewCount)} views • {formatPublishTime(publishTime)}</span>
                                </>
                        }

                        <p>{liveBroadcastContent !== "none" && <span>🔴LIVE:</span>}{description}</p>
                    </Fragment>

            }

        </div>



    </div >
}

export default VideoDetails;