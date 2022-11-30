import { TailSpin } from "react-loader-spinner";

const LoadingSpinner = () => {

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

export default LoadingSpinner;