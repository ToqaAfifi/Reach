import { useSelector } from "react-redux";
import useWindowDimensions from "./hooks/use-windowDimensions";
import Header from "./components/Header";
import VideosList from "./components/videos/VideosList";
import FilterDesktop from "./components/filter/FilterDesktop";
import FilterMobile from "./components/filter/FilterMobile";
import LoadingSpinner from "./components/ui/LoadingSpinner";

function App() {

  const { isLoading } = useSelector(state => state.videos);
  const { dimensions } = useWindowDimensions();

  let filterContent = <FilterDesktop />
  let layout = "desktop";

  if (dimensions?.width <= 600) {
    filterContent = <FilterMobile />
    layout = "mobile";
  }

  return (
    <div className="root">

      <Header dimensions={dimensions} layout={layout}/>

      <div className="container">
        {filterContent}
        <hr />
        {(isLoading && layout === "mobile") && <LoadingSpinner />}
        <VideosList />
      </div>

    </div>
  );
}

export default App;
