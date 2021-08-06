import React, {FC} from 'react';
import { INavItem } from '../../types/types';
import './NavButton.scss'
//import {NavLink} from 'react-router-dom'

interface NavButtonProps {
    navData:INavItem
}


const NavButton:FC<NavButtonProps> = ({navData}) => {
    const {title,path,icon,nested} =navData
    const isHaveNested = nested.length!==0
    const [opened,isOpened]=React.useState<Boolean>(false)
    return (
        <li className="menu__item">
            {/* <NavLink className="menu__item-link" to={path}> */}
                <img className="menu__item-img" alt='pic' src={icon}/>
                <div className="menu__item-text">{title}</div>
          {/* //  </NavLink> */}
        </li>
    )
};

export default NavButton;