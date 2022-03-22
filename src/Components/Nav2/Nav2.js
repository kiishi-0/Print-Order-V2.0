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
        <nav className="nav2">
            <button className="burger" onClick={openSideNav}>
                <img src={burger} alt="burger bars"/>
            </button>
            <div className="burger-div">
                <NavLink to="/">
                    <a href="#home">HOME</a>
                </NavLink>
                <a href="/#about">ABOUT</a>
                <a href="/#contact">CONTACTS</a>
            </div>
        </nav>
    )
}

export default Nav2