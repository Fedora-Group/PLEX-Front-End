import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

// import { useContext } from 'react'
// import { AuthContext } from '../context/auth'
import { signUp } from '../store/signup';


// import {logout} from '../store/signIn';//
import {googleSignUp}from '../store/google';//
import {GoogleLogin} from 'react-google-login';//
// import {GoogleLogout} from 'react-google-login';//



const CLIENT_ID='772848863323-99gttoe9te13nujv7m3pb79a1e98dvds.apps.googleusercontent.com';//

export default function SignUp(props) {
  const dispatch = useDispatch();

  // const context = useContext(AuthContext);

    const state = useSelector(state => {
      return {
          signup: state.signup
      }
  });

  const submitHandler = e => {
    e.preventDefault();

    let user = {
      username: e.target.username.value,
      password: e.target.password.value,
      role: 'user',
    };

    // context.signUp(user.username, user.password, user.role)
    dispatch(signUp(user.username, user.password, user.role)).then (()=> console.log (state))
       
    
  };

  // const googleHandler = e=>{
  //   dispatch (googleSignUp())

  // }//

  // const responseGoogle = response => {
  //   console.log(response);
  // };//

  
  const onSuccess = (res)=>{
    // let id_token = res.tokenObj.id_token;
    console.log('success',res);
     dispatch (googleSignUp(res))

    // let xhr = new XMLHttpRequest();
    // // xhr.open('POST', 'https://oauth-maq.herokuapp.com/googleLogin');
    // xhr.open('POST', 'http://localhost:4000/googleLogin');

    // xhr.setRequestHeader('Content-Type', 'application/json');
    // xhr.onload = function () {
    //   console.log('done');
        
    //     // location.assign('/home.html');
      
    // };
    // xhr.send(JSON.stringify({ token: id_token }));
    // var body = xhr.response;
    


  }//
  const onFailure = (res)=>{
    console.log('failed', res);
  }////
  
  // const logoutHandler =()=>{
  //   dispatch (logout)
  // } 


  return (
    <div>
      <div class='bg-white rounded-lg shadow sm:max-w-md sm:w-full sm:mx-auto sm:overflow-hidden'>
        <div class='px-4 py-8 sm:px-10'>
          <div>
            <div className='pb-3 text-gray-500 font-semibold'>Sign in with</div>
            {/* <button 
            onClick={googleHandler}
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
              
            </button> */}
            <GoogleLogin
  clientId={CLIENT_ID}
  buttonText="Login with Google"
  onSuccess={onSuccess}
  onFailure={onFailure}
  cookiePolicy={"single_host_origin"}
isSignedIn= {true}
render={
  renderProps => (
    <button 
    onClick={renderProps.onClick}
    disabled = {renderProps.disabled}
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
  )
}
/>

{/* <GoogleLogout
 clientId={CLIENT_ID}
render={
  renderProps => (
    <button onClick={
      // logoutHandler();
      renderProps.onClick
    }
    disabled= {renderProps.disabled}
    >Sign out</button>
  )
}
/> */}


          </div>

          <div class='relative mt-6'>
            <div class='absolute inset-0 flex items-center'>
              <div class='w-full border-t border-gray-300'></div>
            </div>
            <div class='relative flex justify-center text-sm leading-5'>
              <span class='px-2 text-gray-500 bg-white'>Or</span>
            </div>
          </div>
          <form class='mt-6' onSubmit={submitHandler}>
            <div class='w-full space-y-6'>
              <div class='w-full'>
                <div class=' relative '>
                  <input
                    required
                    type='text'
                    id='form-username'
                    name='username'
                    class=' rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-gray-400 focus:border-transparent'
                    placeholder='Username'
                  />
                </div>
              </div>
              <div class='w-full'>
                <div class=' relative '>
                  <input
                    required
                    type='password'
                    name='password'
                    id='form-password'
                    class=' rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-gray-400 focus:border-transparent'
                    placeholder='Password'
                  />
                </div>
              </div>

              <div>
                <span class='block w-full rounded-md shadow-sm'>
                  <button
                    type='submit'
                    class='py-2 px-4  bg-indigo-600 hover:bg-indigo-700 focus:ring-indigo-500 focus:ring-offset-indigo-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg '
                  >
                    Create your account
                  </button>
                </span>
              </div>
            </div>
          </form>
        </div>
        <div class='px-4 py-6 border-t-2 border-gray-200 bg-gray-50 sm:px-10'>
          <p class='text-xs leading-5 text-gray-500 font-medium'>
            By signing up, you agree to our{' '}
            <span className='font-bold   text-gray-700'>
              Terms, Data Policy
            </span>{' '}
            and
            <span className='font-bold   text-gray-700'>
              {' '}
              Cookies <br />
              Policy{''}
            </span>
            .
          </p>
        </div>
      </div>
    </div>
  );
}
