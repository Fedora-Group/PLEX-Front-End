import React, { useEffect } from 'react';
import Brodcaster from './Brodcaster';
import Watcher from './Watcher';
import { If, Then, Else } from 'react-if';
import { useLocation } from 'react-router-dom';
import { useState } from 'react';
import axios from 'axios';
import cookie from 'react-cookies';

const Room = () => {
  const location = useLocation();
  const [id, setId] = useState('');
  const [flag, setFlag] = useState('');
  let token = cookie.load('token');
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
      .catch(err => console.log(err));
  };
  custom();
  return (
    <div>
      <If condition={flag}>
        <Then>
          <Brodcaster />
        </Then>

        <Else>
          <Watcher />
        </Else>
      </If>
    </div>
  );
};

export default Room;
