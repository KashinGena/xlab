import React from 'react';
import './SearchButton.scss';
import search from '../../../assets/images/search-btn.svg';

const SearchButton = () => {
    return (
        <button className='search__btn'>
            <img className='search__btn-img' src={search}/>
            <span className='search__btn-text' >Поиск</span>
        </button>
    );
};

export default SearchButton;