import React, {useState} from 'react'
import { Link } from 'react-router-dom';
import '../index.css'

export const Login = () => {
  const [email, setEmail] = useState ('');
  const [pass, setPass] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(email);
  }
  return (
    <div className='auth-form-container'>
      <h1>Welcome Back</h1>
      <form className='login-form' onSubmit={handleSubmit}>
        <label htmlFor='email'>Email</label>
        <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder='youremail@gmail.com'id="email" name="email"/>
        <label htmlFor='password'>Password</label>
        <input value={pass} onChange={(e) => setPass(e.target.value)} type="password" placeholder='*********'id="password" name="password"/>
        <button type='submit' className='form-button'>Login</button>
      </form>
      <Link to='/Register' className='link-btn'>Don't have an account? Register here </Link>
    </div>
  )
}
