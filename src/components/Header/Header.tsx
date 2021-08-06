import React, { FC } from 'react';
import './Header.scss'
import logo from '../../assets/images/logo.svg';

const Header:FC = () => {
    return (
        <header className="header">
            <div className="header__logo">
                <img alt="logo" src ={logo} className="header__logo-img"/>
                <h1 className="header__logo-title">Wrench CRM</h1>
            </div>
            <div className="header__login">
                Имя Фамилия
            </div>
        </header>
    );
};

export default Header;