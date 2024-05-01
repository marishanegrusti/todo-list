import React from 'react';
import './index.css';

const SearchBar = () => {
    const searchText = 'Type here to search';

    return (<div className="app-search-panel">
        <input
            placeholder={searchText}
        />
    </div>);
}

export default SearchBar;
