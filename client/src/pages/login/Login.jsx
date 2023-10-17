import React, { useContext, useRef} from 'react'
import "./login.css"
import { Link } from 'react-router-dom'
import axios from 'axios';
import { Context } from '../../context/Context';

export default function Login() {

  const userRef = useRef();
  const passwordRef = useRef();
  const { user,dispatch, isFetching } = useContext(Context);

  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch({ type: "LOGIN_START" });
    try {
      const res = await axios.post("/auth/login", {
        username: userRef.current.value,
        password: passwordRef.current.value,
      });
      dispatch({ type: "LOGIN_SUCCESS", payload: res.data });
    } catch (err) {
      dispatch({ type: "LOGIN_FAILURE" });
    }
  };

  console.log(user);

  return (
    <div className='login'>
      <span className="loginTitle">Login</span>
      <form className="loginForm">
        <label>Username</label>
        <input className="loginInput" type="text" placeholder="Enter your username..." />
        <label>Password</label>
        <input className="loginInput" type="password" placeholder="Enter your password..." />
        <button className="loginButton">Login</button>
      </form>
        <button className="loginRegisterButton">
        <Link className='link' to="/register">Register
        </Link>
        </button>
        
    </div>
  )
}

