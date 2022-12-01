import { useSelector } from "react-redux";
import useLayout from "./hooks/use-layout";
import Header from "./components/Header";
import VideosList from "./components/videos/VideosList";
import FilterDesktop from "./components/filter/FilterDesktop";
import FilterMobile from "./components/filter/FilterMobile";
import LoadingSpinner from "./components/ui/LoadingSpinner";

function App() {

  const { isLoading } = useSelector(state => state.videos);
  const { layout } = useLayout();

  let filterContent = <FilterDesktop />

  if (layout === "mobile") {
    filterContent = <FilterMobile />
  }

  return (
    <div className="root">

      <Header layout={layout} />

      <div className={layout === "desktop" ? "containerDesktop" : "containerMobile"}>
        {filterContent}
        <hr />
        {(isLoading && layout === "mobile") && <LoadingSpinner />}
        <VideosList />
      </div>

    </div>
  );
}

export default App;
