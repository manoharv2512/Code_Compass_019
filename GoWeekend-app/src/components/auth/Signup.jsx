import React, { useRef } from "react";
import { Link } from "react-router-dom";
import './signup.css'
import SignInwithGoogle from "./SigninWithGoogle";

const Signup = () => {
  const email = useRef(null);
  const password = useRef(null);
  let apikey = "AIzaSyC4rF0h95_op5HGMFg59TLfJvLwgm-M6fo";
  function signUp(event) {
    event.preventDefault();
    const row = JSON.stringify({
      email:email.current.value,
      password:password.current.value,
      returnSecureToken: true,
    });
    fetch(
      `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${apikey}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: row,
      }
    )
      .then((response) => response.json())
      .then((out) => {
        if (out.error) {
          alert("Sign Up Failed: " + out.error.message);
        } else {
          alert("Sign Up Successful");
          window.location.href = "/signin";
        }
      })
      .catch((err) => {
        console.error("Error:", err);
      });
  }
  return (
    <>
      <div className="login-container">
      <Link style={{color:'black'}} to='/'>Home</Link>
        <h2>Sign Up</h2>
        <form id="form" method="post" onSubmit={signUp}>
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
          <input type="submit" value="Sign Up" />
        </form>
        <SignInwithGoogle/>
        <p>
          Already have an account? <Link to='/signin'>Sign In </Link>
        </p>
      </div>
    </>
  );
};

export default Signup;
