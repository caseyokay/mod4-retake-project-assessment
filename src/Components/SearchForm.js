import React from 'react';

const SearchForm = ({searchValue, changeHandler}) => {
    return(
        <form>
            <input type="text" placeholder="search by name" value={searchValue}
            onChange={changeHandler}/>
        </form>
    )
};

export default SearchForm;