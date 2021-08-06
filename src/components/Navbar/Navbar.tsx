import React, { FC } from 'react';
import './NavBar.scss'
import NavBarData from './NavBarData'
import NavButton from '../NavButton/NavButton';

const Navbar:FC = () => {
    return (
        <nav className='nav'>
            <ul className='nav__menu menu'>
              {NavBarData.map(navData => {
                  return (<NavButton navData={navData}/>)
              })}  
            </ul>
        </nav>
    );
};

export default Navbar;