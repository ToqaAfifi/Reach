import Card from "../ui/Card";
import VideoDetails from "./VideoDetails";

const VideosListItem = ({ video }) => {

    return <Card>
        {video.kind === "youtube#channel" ?
            <div className="channelImage">
                <img src={video.thumbnail.url} alt="thumbnail" width={video.thumbnail.width} height={video.thumbnail.height} />
            </div>
            :
            <div className="image">
                <img src={video.thumbnail.url} alt="thumbnail" width={video.thumbnail.width} height={video.thumbnail.height} />
            </div>
        }

        <VideoDetails {...video} />
    </Card>
}

export default VideosListItem;