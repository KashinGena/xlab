import React, {FC} from 'react';
import './Input.scss'
interface InputProps {
    placeholder:string
}

const Input:FC<InputProps> = ({placeholder}) => {
    return (
          <input className ='input' type='text' placeholder={placeholder}/>  
    );
};

export default Input;