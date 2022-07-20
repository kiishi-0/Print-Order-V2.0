import React from 'react';
import "./Nav2.css"
import burger from '../../images/burger.svg'
import { NavLink } from 'react-router-dom';

const openSideNav = () =>{
    const sideNav = document.getElementById('side-nav');
    sideNav.style.left = '0';
}
const Nav2 = () =>{
    return (
        <nav className="nav2 disappear">
            <button className="nav-disappear burger" onClick={openSideNav}>
                <img src={burger} alt="burger bars"/>
            </button>
            <div className="burger-div">
                <NavLink to="/" className='nav-disappear'>
                    HOME
                </NavLink>
                <a href="/#about" className='nav-disappear'>ABOUT</a>
                <a href="/#contact" className='nav-disappear'>CONTACTS</a>
            </div>
        </nav>
    )
}

export default Nav2