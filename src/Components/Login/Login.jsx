import React from 'react'
import './Login.css'
import {Brain} from 'lucide-react'
const Login = () => {
  return (
    <div className='login'>
      <Brain className='brain' size={100} color="#fff" />
      <h2>QuizAce</h2>
      <p>Test your knowledge, ace every quiz</p>
      <div className="login-box">
        <h3>Welcome Back</h3>
        <p>Sign in to your account to continue</p>
        <div class="form-group">
            <label for="eamil">Eamil</label>
            <input type="email" id='email' placeholder='Enter Your Email' />
        </div>
        <div class="form-group">
            <label for="password">Password</label>
            <input type="password" id='password' placeholder='Enter Your Password' />
        </div>
        <button type='submit'>Sign In</button>
        <p>Don't have an account? <span>Sign up</span></p>
      </div>
    </div>
  )
}

export default Login
