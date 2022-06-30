import React, {useState} from 'react';
import Nav1 from '../../Components/Nav1/Nav1';
// import Nav2 from '../Nav2/Nav2';
import './SignUpForm.css';
import { Link } from "react-router-dom";
import { useDispatch } from 'react-redux';
import { addUser } from '../../Features/users';
import { useSelector } from 'react-redux';

const SignUpForm = () => {
    const users = useSelector((state) => state.users.value)
    console.log(users)
    const dispatch = useDispatch()
    let id = users.length === 0 ? 1 : users.length + 1;
    const [user, setUser] = useState({
        id: id,
        cName: "",
        email: "",
        address: "",
        number: 0
    });
    const [message, setMessage] = useState('')
    const [togo, setTogo] = useState('/signup')
    const changeCName = (event) =>{
        newUser.cName = event.target.value
    }
    const changeNumber = (event) =>{
        newUser.number = event.target.value
    }
    const changeEmail = (event) =>{
        newUser.email = event.target.value
    }
    const changeAddress = (event) =>{
        newUser.address = event.target.value
    }
    let newUser = user;
    const isUser = (newUser) =>{
        if(users.length === 0){
            setUser(newUser)
            // togo = '/login'
            setTogo('/login')
            dispatch(addUser(user))
            console.log(user)
        }
        else if (users.some(e => e.cName === newUser.cName) ) {
            // togo = '/signup'
            setTogo('/signup')
            setMessage('This user already exists');
            console.log('sorry')
        }else{
            setTogo('/login')
            setUser(newUser)
            dispatch(addUser(user))
            
            console.log(user)
        }
    }
    return(
        <main className="login-section">
        <header>
            <Nav1 />
            {/* <Nav2 /> */}
        </header> 
        <section>
            <h1>Sign Up</h1>
            <form method="#" action='#' autoComplete='on'>
                <h4 color='red'>{message}</h4>
                <input type="text" name='cname' placeholder='Company Name' onChange={changeCName} required/>
                <input type="email" name='email'  placeholder='Email' onChange={changeEmail} required/>
                <input type="number" name='phone'  placeholder='Phone Number' onChange={changeNumber} required/>
                <input type="password" name='password'  placeholder='Password' required/>
                <input type="password" name='confirm password'  placeholder='Confirm Password' required/>
                <textarea name="company" rows="5" placeholder='Company Address' onChange={changeAddress} required></textarea>
                <Link to={togo}>
                    <input type="submit" value="Sign Up" onClick={() => isUser(newUser)}/>
                </Link>
                
            </form>
        </section>
        </main>
    )
}

export default SignUpForm;