import React, { useEffect, useState } from 'react';
import TextField from '@material-ui/core/TextField';
import SendRoundedIcon from '@material-ui/icons/SendRounded';
import io from 'socket.io-client';
import cookie from 'react-cookies';
import moment from 'moment';

import DoneAllRoundedIcon from '@material-ui/icons/DoneAllRounded';
import ScheduleRoundedIcon from '@material-ui/icons/ScheduleRounded';
const socket = io.connect('https://oauth-maq.herokuapp.com/');

export default function Chat(props) {
  const [text, setText] = useState({ message: '', username: props.username });
  const [chat, setChat] = useState([]);

  const [userfromC, userfromCName] = useState('');
  console.log('props', props.username);
  // dev Note using the useref to define the soket didnot work //

  const handelChange = e => {
    setText({ message: e.currentTarget.value, username: props.username });
  };

  const sendMessage = e => {
    e.preventDefault();
    let val = text.message;
    // console.log('props1', props.username);
    socket.emit('send-chat-message', {
      message: text.message,
      roomId: props.id,
    });
    setChat([
      ...chat,
      {
        message: text.message,
        name: text.username,
        time: moment().format('h:mm a'),
      },
    ]);
    // e.currentTarget.message.value = '';
    setText({ message: '', username: props.username });
  };

  const renderChat = () => {
    return chat.map(({ name, message, time }, index) => (
      <div
        key={index}
        className='min-h-di p-2 border border-gray-100 max-w-cc rounded-xl shadow-message mb-3'
      >
        <p className='text-xl text-mess font-light'>{message}</p>
        <p className='flex justify-between'>
          <div>{name === userfromC ? '' : name}</div>
          <div className='text-mess flex items-center'>
            {time}{' '}
            <span className='ml-1'>
              {name === userfromC ? (
                <DoneAllRoundedIcon
                  fontSize={'small'}
                  style={{ color: '#4FC3F7' }}
                />
              ) : (
                <ScheduleRoundedIcon fontSize={'small'} />
              )}
            </span>
          </div>
        </p>
      </div>
    ));
  };
  useEffect(() => {
    let co = cookie.load('username');
    userfromCName(co);
  }, []);
  useEffect(() => {
    // console.log('useEffect []', props.id, props.username);
    socket.emit('join-room', { roomId: props.id });
    // console.log('props.name', props.username);
    // console.log('props.id llllll44', props.id);
    socket.emit('new-user', { roomId: props.id, name: props.username });
  }, []);

  useEffect(() => {
    socket.on('old_massage', payload => {
      // console.log('if payload.message', payload.message);

      if (payload.message) {
        // console.log([...chat, ...[payload.message]]);
        setChat(payload.message);
        // console.log('payload.message', payload.message);
      }
    });
    socket.on('chat-message', payload => {
      setChat([
        ...chat,
        { message: payload.message, name: payload.name, time: payload.time },
      ]);
    });
  }, [chat]);
  return (
    <>
      {/* <form onSubmit={sendMessage}>
        <h2>MessageApp</h2>
        <TextField
          name='message'
          onChange={e => handelChange(e)}
          value={text.message}
          id='outlined-multiline-static'
          variant='outlined'
          label='Message'
        />

        <button>Send</button>
      </form> */}
      <div className='chatDiv overflow-y-scroll h-5/6 p-2'>{renderChat()}</div>

      <div className='w-full absolute bottom-0 '>
        <form
          className='inline-flex w-full justify-center '
          onSubmit={sendMessage}
        >
          <div class=' relative w-5/6'>
            <input
              type='text'
              id='"form-subscribe-Subscribe'
              className=' rounded-lg border-transparent  flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none '
              placeholder='Aa'
              onChange={e => handelChange(e)}
              value={text.message}
              variant='outlined'
              label='Message'
            />
          </div>
          <button
            className='flex-shrink-0 ml-1 px-4 py-2 text-base font-semibold text-white bg-purple-600 rounded-lg shadow-md hover:bg-purple-700 focus:outline-none'
            type='submit'
          >
            <SendRoundedIcon fontSize={'small'} />
          </button>
        </form>
      </div>
    </>
  );
}
