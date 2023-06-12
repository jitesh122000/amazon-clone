import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { auth } from './Firebase';
import "./Login.css"

function Login() {

    const history = useNavigate();
    const[email,setEmail]=useState('');
    const[password,setPassword] = useState('');

    const signIn= e =>{
        e.preventDefault();

        auth
        .signInWithEmailAndPassword(email,password)
        .then((auth) => {
                history('/')
            
        })
        .catch(error => alert(error.message))

        //some fancy firebase shitttttt.... 
    }

    const register = e =>{
        e.preventDefault();

        auth
        .createUserWithEmailAndPassword(email,password)
        .then((auth)=>{
            
            if(auth){
                history('/')
            }
        })
        .catch(error => alert(error.message))

        // some fancy register firebase shittttt....
    }

  return (
    <div className='login'>
        <Link to='/'>
        <img  
        className='login__logo'
        src='https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png'  />
        </Link>

        <div className="login__container">
            <h1>Sign in</h1>
            <form>
                <h5>E-mail</h5>
                <input type="text" value={email} onChange = {e => setEmail(e.target.value)} />

                <h5>Password</h5>
                <input type="password" value={password} onChange = {e => setPassword(e.target.value)} />

                <button onClick={signIn} className='login__signInButton'>Sign in</button>

            </form>

            <p>
            By continuing, you agree to Amazon clones Conditions of Use and Privacy Notice.
            </p>

            <button onClick={register} type="submit" className='login__registerButton'>Create an account</button>
        </div>
    </div>
  )
}

export default Login