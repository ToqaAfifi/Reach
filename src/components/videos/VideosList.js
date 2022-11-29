import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchVideos } from "../../store/thunks/fetchVideos";

const VideosList = () => {

    const dispatch = useDispatch();
    const { data: videosList, isLoading, error } = useSelector(state => state.videos);

    // useEffect(() => {
    //     dispatch(fetchVideos('makeup'));
    // }, [dispatch])

    return <div>

    </div>
}

export default VideosList;