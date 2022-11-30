import Card from "../ui/Card";
import VideoDetails from "./VideoDetails";

const VideosListItem = ({ video }) => {

    return <Card>
        <div className="image">
            <img src={video.thumbnail.url} alt="thumbnail" width={video.thumbnail.width} height={video.thumbnail.height} />
        </div>
        <VideoDetails {...video} />

    </Card>
}

export default VideosListItem;