import React from 'react';
import './Address.scss';
import Search from '../../components/Search/Search';
import AddressList from '../../components/Address/AddressList/AddressList';
import {fetchAddresses} from '../../store/actions/address'
import {useDispatch,useSelector} from 'react-redux'

const Address = () => {
     const dispatch = useDispatch()
     const addressess = useSelector(state =>state.addressReducer.addresses) 
    const onClick = (e:string) => {
        dispatch(fetchAddresses(e))
        
    }
    return (
        <div className='search-address'>
           <h3 className='search-address__title title'>Поиск адресов</h3> 
           <p className='search-address__subtitle subtitle'>Введите  интересующий вас адрес</p>
           <Search onClick={onClick}/>
           <AddressList/>
        </div>
    );
};

export default Address;