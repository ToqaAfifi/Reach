import { useState } from "react";
import { GoSearch } from 'react-icons/go';
import Button from "./ui/Button";

const Search = () => {

    const [searchTerm, setSearchTerm] = useState('');

    const searchHandler = (e) => {

    }

    return <div className="search">
        <input placeholder="Search YouTube" value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} />
        <Button>
            <GoSearch onClick={searchHandler}/>
        </Button>
    </div>
}

export default Search;