import React from 'react'
import '../index.css'

const SearchBox = ({ searchChange, searchField }) => {
    return (
        <div className="search-div">
            <input className="search-box center" type="search" placeholder="Search Robots" onChange={searchChange}/>
            <button className="search-btn">Search</button>
        </div>
    )
}

export default SearchBox;