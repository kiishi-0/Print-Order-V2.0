import React from 'react'
import { NavLink, withRouter } from "react-router-dom";
import "./Nav1.css"
import burger from '../../images/burger.svg'


const Nav1 = () =>{
    const openSideNav = () =>{
        const sideNav = document.getElementById('side-nav');
        sideNav.style.left = '0';
    }
        return(
            <nav className="nav1">
                <NavLink to='/' className="logo" >
                    PRINT ORDER
                </NavLink>
                <div className="burger-div">
                <button className="buger-disappear burger" onClick={openSideNav}>
                    <img src={burger} alt="burger bars"/>
                </button>
                    <NavLink exact to="/login" className="nav-link active nav-disappear" aria-current="page" href="#">
                        LOGIN
                    </NavLink>
                    <NavLink exact to='/signup' className='nav-link nav-disappear'>
                        SIGN UP
                    </NavLink>
                </div>
            </nav>
        )
    }

export default withRouter(Nav1);