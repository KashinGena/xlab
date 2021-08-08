import React, {FC} from 'react';
import { INavItem } from '../../types/types';
import './NavButton.scss'
import {NavLink} from 'react-router-dom'

interface NavButtonProps {
    navData:INavItem,
    isNested?:boolean,
    toggle:boolean
    onClick: () => void
}

const NavButton:FC<NavButtonProps> = ({navData,isNested,toggle,onClick}) => {
    const {title,path,icon,nested} =navData
    const isHaveNested = (nested.length!==0)
    const [open,setOpened]=React.useState<Boolean>(false)
    if (!isHaveNested)
        return (
            <li className={`menu__item ${toggle?'toggle':''}`} 
                onClick={onClick}
            >
                <NavLink className={`menu__item-link ${isNested?'nested':''}`}
                    to={path}
                    activeClassName='active'
                    exact
                >
                    <img className="menu__item-img" alt='pic' src={icon}/>
                    <div className="menu__item-text" >{title}</div>
                </NavLink>
            </li>
        ); else {
        return (
            <>
                <li className={`menu__item ${toggle?'toggle':''}`}   
                    onClick={() =>setOpened(!open)}
                >
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
                            return (<NavButton  toggle={toggle} 
                                                isNested 
                                                navData={navItem}
                                                onClick={onClick}
                                    />)
                        })}
            </>
        );}
                
};

export default NavButton;