import { Fragment } from "react";
import { useSelector } from "react-redux";
import VideosListItem from "./VideosListItem";

const VideosList = () => {

    const { data, error } = useSelector(state => state.videos);

    if (error) {
        return <div className="error">
            <h3>{error.name}</h3>
            <p>{error.code}: {error.message}</p>
        </div>
    }

    return <Fragment>
        {data.videosList.map(video => <VideosListItem key={video.id} video={video} />)}
    </Fragment>
}

export default VideosList;