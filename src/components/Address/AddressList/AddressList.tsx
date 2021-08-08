import React,{FC} from 'react';
import './AddressList.scss'
import AddressItem from '../AddressItem/AddressItem';
interface AddressListProps {
  addresses: any[]
}
const AddressList:FC<AddressListProps> = ({addresses}) => {
  console.log(addresses);
  
    return (
        <div className="address-list">
          <h3 className='address-list__title title'>Адреса</h3>
          <ul>
              {addresses.map(address => 
                  <AddressItem address={address}/>
                )}
          </ul>  
        </div>
    );
};

export default AddressList;