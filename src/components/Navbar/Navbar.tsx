import React, { FC } from 'react';
import './NavBar.scss'
import NavBarData from './NavBarData'
import NavButton from '../NavButton/NavButton';
import LogInfo from '../LogInfo/LogInfo';

const Navbar:FC = () => {
    const [toggle,setToggle]=React.useState<boolean>(false)
    return (
        <nav className={`nav ${toggle?'toggle':''}`}>
            <div className='nav__title'>Меню</div>
            <div className="nav__hamburger"
                 onClick={() => setToggle(!toggle)}
            >
                <span className="bar"></span>
                <span className="bar"></span>
                <span className="bar"></span>
            </div>
            {toggle && <LogInfo isMobile={true}/>}
            <ul className='nav__menu menu'>
              {NavBarData.map(navData => {
                  return    (<NavButton onClick={() => setToggle(false)}
                                        toggle={toggle} 
                                        navData={navData}
                            />)
              })}  
            </ul>
        </nav>
    );
};

export default Navbar;