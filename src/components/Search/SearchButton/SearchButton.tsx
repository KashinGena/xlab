import React,{FC} from 'react';
import './SearchButton.scss';
import search from '../../../assets/images/search-btn.svg';
interface SearchButtonProps  {
    onClick:() => void
}
const SearchButton:FC<SearchButtonProps> = ({onClick}) => {
    return (
        <button onClick={onClick} className='search__btn'>
            <img className='search__btn-img' src={search}/>
            <span className='search__btn-text' >Поиск</span>
        </button>
    );
};

export default SearchButton;