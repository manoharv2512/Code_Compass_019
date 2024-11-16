import React, { useRef } from "react";
import { Link } from "react-router-dom";
import './signin.css'
import SignInwithGoogle from "./SigninWithGoogle";

const Signin = () => {
  const email = useRef(null);
  const password = useRef(null);
  let apikey = "AIzaSyC4rF0h95_op5HGMFg59TLfJvLwgm-M6fo";
  async function signin(event) {
    event.preventDefault();
    let row = JSON.stringify({
        email:email.current.value,
      password:password.current.value,
    })
    try{
        let call = await fetch(`https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${apikey}`,{
            method:'POST',
            body:row
        })
        let data = await call.json()
        if (data.error){
            alert('Log In Failed '+data.error.message)
        }else{
            localStorage.setItem('idToken',data.idToken)
            alert('Log In successfull')
            window.location.href = '/'
        }
    }catch(err){
        console.log(err)
    }
  }
  return (
    <>
      <div className="login-container">
        <Link style={{color:'black'}} to='/'>Home</Link>
        <h2>Sign In</h2>
        <form id="form" method="post" onSubmit={signin}>
          <input
            ref={email}
            type="email"
            id="email"
            name="email"
            placeholder="Enter your email"
            required
          />
          <input
            ref={password}
            type="password"
            id="password"
            name="password"
            placeholder="Enter your password"
            required
          />
          <input type="submit" value="Sign In" />
        </form>
        <SignInwithGoogle/>
        <p>
        Don't have an account? <Link to='/signup'>Sign Up </Link>
        </p>
      </div>
    </>
  );
};

export default Signin;
