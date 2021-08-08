import React,{FC} from 'react';
import './AddressItem.scss'

interface AddressItemProps {
    address:any
}

const AddressItem:FC<AddressItemProps> = ({address}) => {
    return (
        <li className='address-item'>
            {address.value}
        </li>
    );
};

export default AddressItem;