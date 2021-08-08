import React, { FC } from 'react';
import './Header.scss'
import logo from '../../assets/images/logo.svg';
import { NavLink } from 'react-router-dom';
import LogInfo from '../LogInfo/LogInfo';

const Header:FC = () => {
    return (
        <header className="header">
            <NavLink className='header__link' to='/'>
                <div className="header__logo">
                    <img alt="logo" src ={logo} className="header__logo-img"/>
                    <h1 className="header__logo-title">Wrench CRM</h1>
                </div>
            </NavLink>
            <LogInfo isMobile={false}/>
        </header>
    );
};

export default Header;