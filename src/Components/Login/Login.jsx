import "./login.css";
import React, { useEffect } from 'react';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify';
import { Link } from "react-router-dom";
import {useLocation} from 'react-router-dom';
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
const Login = ({}) => {
    async function Submit(information)
    {
        await axios.post("http://localhost:8000/v1/auth/login",information)
        .then((res)=>{
            localStorage.setItem("token",res.data.accessToken);
            localStorage.setItem("refreshtoken",res.data.refreshToken);
            localStorage.setItem("username",information.username);
            console.log(res);
            toast("Login Successfully!");
            setTimeout(() => {window.location.href = "/"}, 1000);
        })
        .catch((err)=>{
            toast("Login Failed!");
            console.log(err);
        })
        console.log(information);
    };
    const notify = () => toast("Register Successfully!");
    const location = useLocation();
    const navigate = useNavigate();
    useEffect(() => {
        console.log(location);
        if(location.state?.success){
            notify();
            setTimeout(() => {navigate(`/login`)}, 5000);
        }
    }, [])
    const [information, setInformation] = useState({
        username: "",
        password: ""
    });
    return ( 
        <section className="login-container">
            <div className="login-title"> Log in</div>
            <form>
                <label>USERNAME</label>
                <input type="text" placeholder="Enter your username"  value={information.username} onChange={(e)=>setInformation({...information,username:e.target.value})} />
                <label>PASSWORD</label>
                <input type="password" placeholder="Enter your password" value={information.password} onChange={(e)=>setInformation({...information,password:e.target.value})}/>
                <button type="submit" onClick={(e)=>{
                    e.preventDefault();
                    Submit(information);
                    
                    
                }}> Continue </button>
            </form>
            <div className="login-register"> Don't have an account yet? </div>
            <Link className="login-register-link" to="/register">Register one for free </Link>
            
            <ToastContainer
            position="top-right"
            autoClose={3000}
            hideProgressBar={true}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            draggable
            theme="light"
            />
            <ToastContainer />
        </section>
     );
}
 
export default Login;