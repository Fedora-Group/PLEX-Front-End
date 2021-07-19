// import React, { useState} from 'react';
// import jwt from 'jsonwebtoken';
// import cookie from 'react-cookies';
// import base64 from 'base-64';
// require('dotenv').config()


// // https://oauth-maq.herokuapp.com/

// const apiUrl = 'https://oauth-maq.herokuapp.com/';

// const SECRET=process.env.React_App_SECRET

// export const AuthContext = React.createContext()

// <<<<<<< signin
// function AuthProvider(props) {  
//     //hooks
//     const [user, setUser] = useState({});
//     const [loggedIn, setLoggedIn] = useState(false);
//     const [token, setToken] = useState(null);
//     //functions
// =======
// function AuthProvider(props) {

//     // //hooks
//     // const [user, setUser] = useState({});

//     // //functions
// >>>>>>> eventrtk

//     // const signUp = async function (username, password, role) {

//     //     let url = `${apiUrl}signup`;

//     //     let body = { username, password, role };

//     //     let result = await fetch(
//     //         url,
//     //         {
//     //             method: 'post',
//     //             mode: 'cors',
//     //             cache: 'no-cache',
//     //             headers: { 'Content-Type': 'application/json' },
//     //             body: JSON.stringify(body)

//     //         }
//     //     )

//     //     let user = await result.json();

//     //     console.log('user', user);

//     // }



//     const signIn = async function (username, password) {
//         const encoded = base64.encode(`${username}:${password}`)

//         const url = `${apiUrl}signin`
//         const result = await fetch(
//             url,
//             {
//                 method: 'post',
//                 mode: 'cors',
//                 cache: 'no-cache',
//                 headers: { Authorization: `Basic ${encoded}` },
//             }
           
//         );
      
//         const data = await result.json();
//         validateToken(data.token);
//         // console.log('data',data.token)
        
//     }

//     const validateToken = (token) => {
//         try {
//             const user = jwt.verify(token, SECRET);
//             // console.table(user);
//           setLoginState(!!user, token, user);
//         }
//          catch (error) {
//             console.error('User is not verified', error.message);
//             setLoginState(false, null, {})
//         }
//     }


//     const logout = () => {
//        setLoginState(false, null, {})
//     }

//    const  setLoginState = (loggedIn, token, user) => {
//         cookie.save('token', token);
//         setLoggedIn(true);
//         setToken(token);
//         setUser(user);
//         // this.setState({ token, loggedIn, user });
//     }




//     const state = {

//         signUp,
//         user,
//         setUser,
//         signIn,
//         logout,
//         setLoginState,
//         loggedIn, setLoggedIn,
//         token, setToken,
//         validateToken

//         // signUp,

//         // user,
//         // setUser,

//     }


//     return (
//         <AuthContext.Provider value={state}>

//             {props.children}

//         </AuthContext.Provider>
//     )

// }

// export default AuthProvider;
