import Card from "../ui/Card";
import VideoDetails from "./VideoDetails";

const VideosListItem = ({ video }) => {

    return <Card>
        <img src={video.thumbnail.url} alt="thumbnail" width={video.thumbnail.width} height={video.thumbnail.height} />
        <VideoDetails {...video}/>
        
    </Card>
}

export default VideosListItem;