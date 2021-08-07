import React from 'react';
import './Address.scss';
import Search from '../../components/Search/Search';
import AddressList from '../../components/Address/AddressList/AddressList';

const Address = () => {
    return (
        <div className='search-address'>
           <h3 className='search-address__title title'>Поиск адресов</h3> 
           <p className='search-address__help-info'>Введите  интересующий вас адрес</p>
           <Search/>
           <AddressList/>
        </div>
    );
};

export default Address;