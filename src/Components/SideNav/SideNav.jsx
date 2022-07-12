import React from 'react'
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import '../SideNav/SideNav.css';
import close from '../../images/close.svg';

const Close = styled.div`
    width: 30px;
    height: 30px;
    // background: red;
    float: right;
    color: #707070;
    position: relative;
    img{
        cursor: pointer;
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
    &:after{
        content: '';
        background: #707070;
        position: absolute;
        z-index: 20;
        left: 0%; right: 100%;top: 90%; bottom: 0;
        transition: .25s ease;
    }
    &:hover:after{
        left: 0%; right: 0%;top: 90%; bottom: 0;
    }
    
`
const LogDiv = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-end;
    padding: 5px 10px;
    height: 100px;
    // background: red;
    width: 100%
    float: left;
    padding-right: 25px;
    position: absolute;
    right: 0;
    bottom: 0;
`
const LogButton = styled.button`
    background: #C4C4C4;
    width: 120px;
    height: 50px;
    color: #000;
    transition: background ease .15s;
    :hover{
        background: #707070;
    }
`
const NavContainer = styled.div`
    display: flex;
    flex-direction: column;
    nav{
        margin: 15px 0;
        // background: red;
        position: relative;
        overflow: hidden;
    }
    nav:after{
        content: '';
        background: #707070;
        position: absolute;
        z-index: 20;
        left: 0%; right: 100%;top: 90%; bottom: 0;
        transition: .25s ease;
    }
    nav:hover:after{
        left: 0%; right: 80%;top: 90%; bottom: 0;
    }
    margin-top: 50px;
`
const closeNav = () =>{
    const sideNav = document.getElementById('side-nav');
    sideNav.style.left = '-100%';
}
const SideNav = () =>{
    return(
        <div className="side-nav-div" id='side-nav'>
            <div className="side-nav">
                <Close onClick={closeNav}><img src={close} alt="close" title='Close'/></Close>
                <NavContainer className="nav-container">
                    <Link to="/">
                        <nav>HOME</nav>
                    </Link>
                    {/* <a href="#about" className='side-nav-disappear' onClick={closeNav}>
                        <nav>ABOUT</nav>
                    </a>
                    <a href="/#contacts" className='side-nav-disappear' onClick={closeNav}>
                        <nav>CONTACTS</nav>
                    </a> */}
                    <Link to="/cat">
                        <nav>CATEGORIES</nav>
                    </Link>
                    <Link to="/summary">
                        <nav>CART</nav>
                    </Link>
                    <Link to="/gal">
                        <nav>GALLERY</nav>
                    </Link>
                    <LogDiv>
                        <LogButton>SIGN UP</LogButton>
                    </LogDiv>
                </NavContainer>
                
            </div>
        </div>
    )
}

export default SideNav