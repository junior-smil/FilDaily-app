import React from 'react';
import './LoginForm.css'; // Assurez-vous que ce chemin est correct
import { FaUserAlt, FaLock  } from "react-icons/fa";

const LoginForm = () => {
    return (
        <div ClassName='login-form-container'>
        <div className='wrapper'>
            <form action="#">
                <h1>Login </h1>
                <div className="input-box">
                    <input type="text" placeholder='Username' required/>
                    <FaUserAlt  className='icon' />
                </div>
                <div className="input-box">
                    <input type="password" placeholder='Password' required/>
                    <FaLock className='icon' />
                </div>
                <div className='remember-forgot'>
                    <label>
                        <input type="checkbox" /> Remember Me
                    </label>
                    <a href="./">Forgot Password?</a>
                </div>
                <button type="submit">Login</button>
                <div className="register-link">
                    <p>Don't have an account? <a href="./">Register</a></p>
                </div>

            </form>
        </div>
        </div>
    );
};

export default LoginForm;