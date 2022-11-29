import { MdFilterList } from "react-icons/md";
import Button from "../ui/Button";

const FilterDesktop = ({ filteredResults }) => {

    return <div className="filterDesktop">
        <p>About {filteredResults} filtered results</p>
        <Button><MdFilterList /> Filter</Button>
    </div>
}

export default FilterDesktop;