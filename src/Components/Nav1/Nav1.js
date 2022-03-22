import React from 'react'
import { NavLink, withRouter } from "react-router-dom";
import "./Nav1.css"

class Nav1 extends React.Component{
    render(){
        return(
            <nav className="nav1">
                <NavLink to='/' className="logo" >
                    PRINT ORDER
                </NavLink>
                <div className="burger-div">
                    <NavLink exact to="/login" className="nav-link active" aria-current="page" href="#">
                        LOGIN
                    </NavLink>
                    <NavLink exact to='/signup' className='nav-link'>
                        SIGN UP
                    </NavLink>
                </div>
            </nav>
        )
    }
}

export default withRouter(Nav1);