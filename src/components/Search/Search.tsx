import React from 'react';
import './Search.scss'
import Input from '../Input/Input';
import SearchButton from './SearchButton/SearchButton';

const Search = () => {
    return (
        <div className="search">
            <Input placeholder='Введите интересующий вас адрес'/>
            <div className='search__btn-wrapper'>
                <SearchButton/>
            </div>
             
        </div>
    );
};

export default Search;