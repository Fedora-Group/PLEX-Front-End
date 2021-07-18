import React from 'react'

import { useContext } from 'react'
import { AuthContext } from '../context/auth'

export default function SignUp() {

  const context = useContext(AuthContext);


  const submitHandler = (e) => {

    e.preventDefault();

    let user = {
      username: e.target.username.value,
      password: e.target.password.value,
      role: e.target.role.value
    }

    context.signUp(user.username, user.password, user.role)
  }

  return (
    <div>
      <form onSubmit={submitHandler}>
        <h2>signUp</h2>
        <input type='text' name='username' placeholder='username'></input><br/>
        <input type='password' name='password' placeholder='password'></input><br/>
        <select name='role' required>
          <option value='user' default>user</option>
          <option value='admin'>admin</option>
          <option value='editor'>editor</option>
        </select><br/>
        <button type='submit'>Submit</button>
      </form>
    </div>
  )
}
