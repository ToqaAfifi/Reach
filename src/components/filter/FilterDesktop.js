import { MdFilterList } from "react-icons/md";
import { useSelector } from "react-redux";
import Button from "../ui/Button";

const FilterDesktop = () => {

    const filteredResults = useSelector(state => state.videos.data.totalResults);

    return <div className="filterDesktop">
        <p>About {filteredResults} filtered results</p>
        <Button><MdFilterList /> Filter</Button>
    </div>
}

export default FilterDesktop;