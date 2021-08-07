import React, {FC, ChangeEvent } from 'react';
import './Search.scss'
import Input from '../Input/Input';
import SearchButton from './SearchButton/SearchButton';

interface SearchProps {
    onClick: (e:string) => void
}

const Search:FC<SearchProps> = ({onClick}) => {
    const [value,setValue] = React.useState<string>('')
    const onChangeValue = (val:string) => {
        setValue(val)
    }
    const onClickHandler = () => {
        console.log(value);
        onClick(value)
    }
    return (
        <div className="search">
            <Input placeholder='Введите интересующий вас адрес'
                value={value}
                onChange={onChangeValue}
            />
            <div className='search__btn-wrapper'>
                <SearchButton onClick={onClickHandler}/>
            </div>
             
        </div>
    );
};

export default Search;