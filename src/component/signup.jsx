import React from 'react';
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

  const submitHandler = e => {
    e.preventDefault();

    let user = {
      username: e.target.username.value,
      password: e.target.password.value,
      role: e.target.role.value,
    };

    // context.signUp(user.username, user.password, user.role)
    dispatch(signUp(user.username, user.password, user.role));
  };

  return (
    <div>
      <div class='bg-white rounded-lg shadow sm:max-w-md sm:w-full sm:mx-auto sm:overflow-hidden'>
        <div class='px-4 py-8 sm:px-10'>
          <div>
            <div>Sign in with</div>
            <button
              type='button'
              class='py-2 px-4 flex justify-center items-center  bg-red-600 hover:bg-red-700 focus:ring-red-500 focus:ring-offset-red-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg '
            >
              <svg
                width='20'
                height='20'
                fill='currentColor'
                class='mr-2'
                viewBox='0 0 1792 1792'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path d='M896 786h725q12 67 12 128 0 217-91 387.5t-259.5 266.5-386.5 96q-157 0-299-60.5t-245-163.5-163.5-245-60.5-299 60.5-299 163.5-245 245-163.5 299-60.5q300 0 515 201l-209 201q-123-119-306-119-129 0-238.5 65t-173.5 176.5-64 243.5 64 243.5 173.5 176.5 238.5 65q87 0 160-24t120-60 82-82 51.5-87 22.5-78h-436v-264z'></path>
              </svg>
              Sign in with Google
            </button>
          </div>

          <div class='relative mt-6'>
            <div class='absolute inset-0 flex items-center'>
              <div class='w-full border-t border-gray-300'></div>
            </div>
            <div class='relative flex justify-center text-sm leading-5'>
              <span class='px-2 text-gray-500 bg-white'>Or</span>
            </div>
          </div>
          <div class='mt-6'>
            <div class='w-full space-y-6'>
              <div class='w-full'>
                <div class=' relative '>
                  <input
                    type='text'
                    id='search-form-price'
                    class=' rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent'
                    placeholder='Your price'
                  />
                </div>
              </div>
              <div class='w-full'>
                <div class=' relative '>
                  <input
                    type='text'
                    id='search-form-location'
                    class=' rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent'
                    placeholder='Your location'
                  />
                </div>
              </div>
              <div class='w-full'>
                <div class=' relative '>
                  <input
                    type='text'
                    id='search-form-name'
                    class=' rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent'
                    placeholder='Your name'
                  />
                </div>
              </div>
              <div>
                <span class='block w-full rounded-md shadow-sm'>
                  <button
                    type='button'
                    class='py-2 px-4  bg-indigo-600 hover:bg-indigo-700 focus:ring-indigo-500 focus:ring-offset-indigo-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg '
                  >
                    Search
                  </button>
                </span>
              </div>
            </div>
          </div>
        </div>
        <div class='px-4 py-6 border-t-2 border-gray-200 bg-gray-50 sm:px-10'>
          <p class='text-xs leading-5 text-gray-500'>
            This data are display for information and can change
          </p>
        </div>
      </div>

      <form onSubmit={submitHandler}>
        <h2>signUp</h2>
        <input type='text' name='username' placeholder='username'></input>
        <br />
        <input type='password' name='password' placeholder='password'></input>
        <br />
        <select name='role' required>
          <option value='user' default>
            user
          </option>
          <option value='admin'>admin</option>
          <option value='editor'>editor</option>
        </select>
        <br />
        <button type='submit'>Submit</button>
      </form>
    </div>
  );
}
