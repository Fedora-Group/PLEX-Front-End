import React, { useEffect } from 'react';
import Brodcaster from './Brodcaster';
import Watcher from './Watcher';
import { If, Then, Else } from 'react-if';
import { useLocation } from 'react-router-dom';
import { useState } from 'react';
import axios from 'axios';
import cookie from 'react-cookies';
import Chat from './chat';

const Room = () => {
  const location = useLocation();
  const [id, setId] = useState(location.pathname.split('/')[2]);
  const [flag, setFlag] = useState('');
  const [errorFalse, setErrorFalse] = useState(true);
  const [errorMessage, setErrorMessage] = useState('');
  const [config, setConfig] = useState([]);

  let token = cookie.load('token');
  let username = cookie.load('username');
  useEffect(() => {
    let temp = location.pathname.split('/')[2];
    setId(temp);
  }, []);
  let isOwner = true;

  const custom = () => {
    console.log(id);
    let uri = `https://oauth-maq.herokuapp.com/${id}`;
    axios
      .get(uri, {
        headers: {
          'Accept-Language': 'en',
          'Content-Type': 'application/json',
          mode: 'cors',
          withCredentials: 'true',
          Authorization: `Bearer ${token}`,
        },
      })
      .then( async (res) => {
        let data = await  axios.get('https://oauth-maq.herokuapp.com/configs/', {
              headers: {
                'Accept-Language': 'en',
              'Content-Type': 'application/json',
                mode: 'cors',
               withCredentials: 'true',
              Authorization: `Bearer ${token}`,
            },
        })
        setConfig(data.data.config)
        console.log(config,'happy',data.data.config);
        setFlag(res.data.OwnerFlag);
      })
      .catch(err => {
        setErrorFalse(false);

        setErrorMessage(err.response.data);

        console.log(err.response);
      });
  };
  useEffect(()=> custom(),[])
  return (
    <div className='w-full h-screen flex p-10'>
      <If condition={errorFalse}>
        <Then>
          <If condition={flag} >
            <Then>

              <Brodcaster id={id}>
                <Chat id={id} username={username} />
              </Brodcaster>
            </Then>

            <Else>
              <Watcher id={id}>
                <Chat id={id} username={username} />
              </Watcher>
            </Else>

          </If>
          <Chat id={id} username={username} />

        </Then>
        <Else>
          <div>{errorMessage}</div>
        </Else>
      </If>
    </div>
  );
};

export default Room;
