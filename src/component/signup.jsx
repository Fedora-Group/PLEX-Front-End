import React from 'react'
import { useDispatch, useSelector } from 'react-redux';

// import { useContext } from 'react'
// import { AuthContext } from '../context/auth'
import { signUp, addUser } from '../store/signup';

export default function SignUp(props) {
  const dispatch = useDispatch();

  // const context = useContext(AuthContext);
  
//   const state = useSelector(state => {
//     return {
//         signup: state.signup
//     }
// });


  const submitHandler = (e) => {

    e.preventDefault();

    let user = {
      username: e.target.username.value,
      password: e.target.password.value,
      role: e.target.role.value
    }

    // context.signUp(user.username, user.password, user.role)
    dispatch(signUp(user.username, user.password, user.role))
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
