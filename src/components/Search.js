import { useState } from "react";
import { useDispatch } from "react-redux";
import { fetchVideos } from "../store/thunks/fetchVideos";
import { showLoading, hideLoading } from 'react-redux-loading-bar';
import { GoSearch } from 'react-icons/go';
import Button from "./ui/Button";

const Search = (layout) => {

    const [searchTerm, setSearchTerm] = useState('');
    const dispatch = useDispatch();

    const searchHandler = () => {
        if (layout === "desktop") {
            dispatch(showLoading());
            dispatch(fetchVideos(searchTerm)).finally(() => dispatch(hideLoading()));
        }
        else {
            dispatch(fetchVideos(searchTerm))
        }
    }

    return <div className="search">
        <input type="text" placeholder="Search YouTube" value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} />
        <Button onClick={searchHandler}>
            <GoSearch />
        </Button>
    </div>
}

export default Search;