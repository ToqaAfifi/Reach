import useWindowDimensions from "./hooks/use-windowDimensions";
import Header from "./components/Header";
import VideosList from "./components/videos/VideosList";
import FilterDesktop from "./components/filter/FilterDesktop";
import FilterMobile from "./components/filter/FilterMobile";

function App() {

  const { dimensions } = useWindowDimensions();

  let filterContent = <FilterDesktop />

  if (dimensions?.width <= 600) {
    filterContent = <FilterMobile />
  }

  return (
    <div className="root">
      <Header dimensions={dimensions} />

      <div className="container">
        {filterContent}
        <hr />
        <VideosList dimensions={dimensions}/>
      </div>
    </div>
  );
}

export default App;
