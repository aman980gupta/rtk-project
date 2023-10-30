import React, { useMemo, useState } from 'react';
import { fetchLoginAsync, setDetails,fetchResourceAsync } from './loginSlice';
import "./login.css"
import { useDispatch } from 'react-redux';
const token ="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTUsInVzZXJuYW1lIjoia21pbmNoZWxsZSIsImVtYWlsIjoia21pbmNoZWxsZUBxcS5jb20iLCJmaXJzdE5hbWUiOiJKZWFubmUiLCJsYXN0TmFtZSI6IkhhbHZvcnNvbiIsImdlbmRlciI6ImZlbWFsZSIsImltYWdlIjoiaHR0cHM6Ly9yb2JvaGFzaC5vcmcvYXV0cXVpYXV0LnBuZyIsImlhdCI6MTY5ODQxOTMwMCwiZXhwIjoxNjk4NDIyOTAwfQ.Xa8iSmkdywFyIrAuVOsoWSb1hvGwRBT8sxYaKRcS24A"

const Login = () => {
  const dispatch = useDispatch();

  const initialState = { email: '', password: '' }
  const [userData, setUserData] = useState(initialState);

  const handleChange = (e) => {
    const { name, value } = e.target;
    //console.log(e.target.name)
    return setUserData({ ...userData, [name]: value })
  }
  const handleSubmit = (e) => {
    // if (!userData.email || !userData.password) {
    //   e.preventDefault();
    //   console.log("requried email and password")
    //   setUserData(initialState)
    //   return;
    // } else {
    //   e.preventDefault();
    //   dispatch(setDetails(userData))
    //   console.log(userData)
    //   setUserData(initialState)
    // }
    e.preventDefault()
    fetch('https://dummyjson.com/auth/login', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({
    
    "username": "hbingley1",
      "password": "CQutx25i8r",
     expiresInMins: 60, 
  })
})
.then(res => res.json())
.then(console.log);
  };
  const handleLogin =(e)=>{
    e.preventDefault();
    dispatch(fetchLoginAsync({
      username: 'kminchelle',
      password: '0lelplR',
      expiresInMins: 60,
    }))
  };
  const handleAuth =(e)=>{
    e.preventDefault();
    dispatch(fetchResourceAsync(token))
  }
  return (
    <div className='bg-lime-400 w-full h-full m-auto flex justify-center items-center'>
      <form className='w-[80%] h-[70%] flex gap-5 flex-col '>
        <input className=' mt-6' value={userData.email} name="email" type='email' onChange={handleChange} placeholder='enter your email' />
        <input value={userData.password} name='password' type='password' onChange={handleChange} placeholder='enter your password' />
        <button
          className='border border-solid bg-indigo-300 rounded-xl font-bold text-lg capitalize'
          type='submit' onClick={handleSubmit}>login</button>
        <button
          className='border border-solid bg-indigo-300 rounded-xl font-bold text-lg capitalize'
          onClick={handleLogin}>loginWithCred</button>
        <button
          className='border border-solid bg-indigo-300 rounded-xl font-bold text-lg capitalize'
          onClick={handleAuth}>check Auth resource </button>

      </form>
    </div>
  )
}

export default Login