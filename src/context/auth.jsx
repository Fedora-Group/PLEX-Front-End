import React, { useState } from 'react';
import jwt from 'jsonwebtoken';
import cookie from 'react-cookies';
import base64 from 'base-64';


// https://oauth-maq.herokuapp.com/

let apiUrl = 'https://oauth-maq.herokuapp.com/';


export const AuthContext = React.createContext()

function AuthProvider(props) {

    //hooks
    const [user, setUser] = useState({});

    //functions

    const signUp = async function (username, password, role) {

        let url = `${apiUrl}signup`;

        let body = { username, password, role };

        let result = await fetch(
            url,
            {
                method: 'post',
                mode: 'cors',
                cache: 'no-cache',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(body)

            }
        )

        let user = await result.json();

        console.log('user', user);

    }

    const signIn = async function (username, password) {
        const encoded = base64.encode(`${username}:${password}`)

        let url = `${apiUrl}signin`
        const result = await fetch(
            url,
            {
                method: 'post',
                mode: 'cors',
                cache: 'no-cache',
                headers: { Authorization: `Basic ${encoded}` },
            }

        );
        let data = await result.json();

    }

    const state = {
        signUp,

        user,
        setUser,

    }


    return (
        <AuthContext.Provider value={state}>

            {props.children}

        </AuthContext.Provider>
    )

}

export default AuthProvider;
