import React, {FC} from 'react';
import { INavItem } from '../../types/types';
import './NavButton.scss'
import {NavLink} from 'react-router-dom'

interface NavButtonProps {
    navData:INavItem,
    isNested?:Boolean
}

const NavButton:FC<NavButtonProps> = ({navData,isNested}) => {
    const {title,path,icon,nested} =navData
    const isHaveNested = (nested.length!==0)
    const [open,setOpened]=React.useState<Boolean>(false)
    if (!isHaveNested)
        return (
            <li className="menu__item" >
                <NavLink className={`menu__item-link ${isNested?'nested':''}`}
                    to={path}
                    activeClassName='active'
                    exact
                >
                    <img className="menu__item-img" alt='pic' src={icon}/>
                    <div className="menu__item-text">{title}</div>
                </NavLink>
            </li>
        ); else {
            console.log('nested');
            
        return (
            <>
            <li className="menu__item"  onClick={() =>setOpened(!open)}>
                <NavLink className={`menu__item-link  ${isNested?'nested':''}`}
                    to={path}
                    activeClassName='active'
                    exact
                >
                    <img className="menu__item-img" alt='pic' src={icon}/>
                    <div className="menu__item-text">{title}</div>
                </NavLink>
            </li>
            {open && nested.map((navItem,index) => {
                        return (<NavButton isNested navData={navItem}/>)
                    })}
 

            </>
        );}
                
};

export default NavButton;