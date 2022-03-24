import React from 'react';
import Nav1 from '../../Components/Nav1/Nav1';
import './LoginForm.css';
import {Link} from 'react-router-dom'
class LoginForm extends React.Component{

 render(){
     return(
         <main className="login-section">
            <header>
                <Nav1 />
            </header> 
            <section>
                <h1>Login to Print Order</h1>
                <form method="#" action='/' autoComplete='on'>
                    <input type="textbox" name='username' required/>
                    <input type="password" name='password' required/>
                    {/* <Link to='/home'> */}
                        <input type="submit" value="Login"/>
                    {/* </Link> */}
                </form>
            </section>
         </main>
     )
 }
}

export default LoginForm;