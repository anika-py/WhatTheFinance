import React, {useState} from 'react'
import { Link } from 'react-router-dom';
import '../index.css'

export const Register = () => {
  const [email, setEmail] = useState ('');
  const [pass, setPass] = useState('');
  const [name, setName] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(email);
  }
  return (
    <div className='auth-form-container'>
      <h1>Create New Account</h1>
      <form className='register-form' onSubmit={handleSubmit}>
        <label htmlFor='name'>Full Name</label>
        <input value={name} name='name' id='name' placeholder='Eg. Michael Scott'/>
        <label htmlFor='email'>Email</label>
        <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder='youremail@gmail.com'id="email" name="email"/>
        <label htmlFor='password'>Password</label>
        <input value={pass} onChange={(e) => setPass(e.target.value)} type="password" placeholder='*********'id="password" name="password"/>
        <button type='submit' className='form-button'>Login</button>
      </form>
      <Link to='/Login' className='link-btn'>Already have an account? Login here</Link>
    </div>
  )
}
