import React from 'react'

import { useSelector, useDispatch } from 'react-redux'

import {signIn} from '../store/signIn'

export default function SignIn(props) {

  const selector = useSelector((state) => (state.signIn))

  const dispatch = useDispatch()

  const submitHandler = (e) => {
    e.preventDefault();
    
    let user = {
      username: e.target.username.value,
      password: e.target.password.value,
      
    }
    
    dispatch(signIn(user.username, user.password))



  }

  return (
    <div>
      <form onSubmit={submitHandler}>
        <h2>Log in</h2>
        <input type='text' name='username' placeholder='username'></input><br/>
        <input type='password' name='password' placeholder='password'></input><br/>
        <button type='submit' >Submit</button>
      </form>
    </div>
  )
}
