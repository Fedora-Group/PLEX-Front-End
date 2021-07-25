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
  const [id, setId] = useState('');
  const [flag, setFlag] = useState('');
  const [errorFalse, setErrorFalse] = useState(true);
  const [errorMessage, setErrorMessage] = useState('');

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
      .then(data => {
        setFlag(data.data.OwnerFlag);
      })
      .catch(err => {
        setErrorFalse(false);

        setErrorMessage(err.response.data);

        console.log(err.response);
      });
  };
  custom();
  return (
    <div>
      <If condition={errorFalse}>
        <Then>
          <If condition={flag}>
            <Then>
              <Brodcaster id={id} />
              <Chat id={id} username={username} />
            </Then>

            <Else>
              <Watcher id={id} />
              <Chat id={id} username={username} />
            </Else>
          </If>
        </Then>
        <Else>
          <div>{errorMessage}</div>
        </Else>
      </If>
    </div>
  );
};

export default Room;
