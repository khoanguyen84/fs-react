import React, { useState } from "react";
import SearchResult from "./SearchResult";

function SearchTab() {
    const [keyword, setKeyword] = useState("")
    const [search, setSearch] = useState(false);
    const [valid, setValid] = useState(false)
    const handleSearch = (e) => {
        e.preventDefault();
        setSearch(true)
    }
    const handleInputKeyword = (e) => {
        let regex = /^[a-zA-Z ]*$/;
        // if (regex.test(e.target.value)) {
        //     setValid(true)
        //     setKeyword(e.target.value)
        // }
        // else {
        //     setValid(false)
        // }
        setValid(regex.test(e.target.value))
        setKeyword(e.target.value)
    }
    return (
        <div className="container">
            <div className="search d-flex flex-column align-items-center">
                <h3>Search Form</h3>
                <form onSubmit={handleSearch} className="w-75">
                    <div className="row">
                        <div className="col-md-10">
                            <input type="text"
                                className="form-control"
                                value={keyword}
                                onInput={handleInputKeyword}
                            />
                            {
                                valid ? null :
                                    (<span className="text-danger fst-italic">Student Name you entered is not valid, please try again!</span>)
                            }
                        </div>
                        <div className="col-md-2">
                            <button className="btn btn-primary">Search</button>
                        </div>
                    </div>
                </form>
            </div>
            {search && <SearchResult keyword={keyword} />}
        </div>
    )
}

export default SearchTab;