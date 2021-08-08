import React from 'react';
import './Address.scss';
import Search from '../../components/Search/Search';
import AddressList from '../../components/Address/AddressList/AddressList';
import {fetchAddresses} from '../../store/actions/address'
import {useDispatch,useSelector} from 'react-redux'
import { RootState } from '../../store/store';

const Address = () => {
    const dispatch = useDispatch()
    const addressess = useSelector((state:RootState) =>state.address.addresses) 
    const onClick = (e:string) => {
        dispatch(fetchAddresses(e))
    }
    return (
        <div className='search-address'>
           <h3 className='search-address__title title'>Поиск адресов</h3> 
           <p className='search-address__subtitle subtitle'>Введите  интересующий вас адрес</p>
           <Search onClick={onClick}/>
           {addressess.length!==0 && <AddressList addresses={addressess}/>}
        </div>
    );
};

export default Address;