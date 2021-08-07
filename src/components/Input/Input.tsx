import React, {FC} from 'react';
import './Input.scss'
interface InputProps {
    placeholder:string,
    value:string,
    onChange: (value:string) => void
}

const Input:FC<InputProps> = ({placeholder,value,onChange}) => {
    return (
          <input value={value}
                 className ='input' 
                 type='text' 
                 placeholder={placeholder}
                 onChange={(e) => onChange(e.target.value)}
            />  
    );
};

export default Input;