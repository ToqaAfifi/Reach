import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchVideos } from "../../store/thunks/fetchVideos";
import { TailSpin } from "react-loader-spinner";

const VideosList = ({dimensions}) => {

    const dispatch = useDispatch();
    const { data: videosList, isLoading, error } = useSelector(state => state.videos);

    // useEffect(() => {
    //     dispatch(fetchVideos('makeup'));
    // }, [dispatch])

    if (isLoading && dimensions?.width <= 600) {
        return <TailSpin
            height="80"
            width="80"
            color="gray"
            ariaLabel="tail-spin-loading"
            radius="1"
            wrapperClass="spinner"
            visible={true}
        />
    }

    if (error) {
        return <p>{error.message}</p>
    }

    return <div>

    </div>
}

export default VideosList;