import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchVideos } from "../store/thunks/fetchVideos";
import { showLoading, hideLoading } from 'react-redux-loading-bar';
import { GoSearch } from 'react-icons/go';
import Button from "./ui/Button";

const Search = ({ layout }) => {

    const [searchTerm, setSearchTerm] = useState('');
    const dispatch = useDispatch();
    const { isLoading } = useSelector(state => state.videos);

    const searchHandler = (e) => {
        
        e.preventDefault();
        if (!searchTerm) {
            return;
        }

        if (layout === "desktop") {
            dispatch(showLoading());
            dispatch(fetchVideos(searchTerm)).finally(() => dispatch(hideLoading()));
        }
        else {
            dispatch(fetchVideos(searchTerm))
        }
    }

    return <form className="search">
        <input type="search" placeholder="Search YouTube" value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} />
        <Button type="submit" loading={isLoading} onClick={searchHandler}>
            <GoSearch />
        </Button>
    </form>
}

export default Search;