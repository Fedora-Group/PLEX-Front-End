import React, { useEffect, useState } from 'react';
import SendRoundedIcon from '@material-ui/icons/SendRounded';
import io from 'socket.io-client';
import cookie from 'react-cookies';
import moment from 'moment';
import DoneRounded from '@material-ui/icons/DoneRounded';

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
    console.log('props1', props.username);
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
    return chat.map(({ name, message, time }, index) =>
      name === userfromC ? (
        <div
          key={index}
          className='h-auto p-2 max-w-cc rounded-xl shadow-message mb-3 self-end min-w-di flex flex-col h-auto bg-whats'
        >
          <div>{name === userfromC ? '' : name}</div>
          <p className='text-l  font-light inline-flex break-words flex-wrap w-full h-auto break-all'>
            {message}
          </p>
          <p className='flex  text-xs  items-center justify-end'>
            <div className='text-whatsgray font-light flex justify-center items-center'>
              {time}{' '}
              <span className='ml-1'>
                <DoneRounded fontSize={'small'} />
              </span>
            </div>
          </p>
        </div>
      ) : (
        <div
          key={index}
          className='h-auto p-2 max-w-cc rounded-xl shadow-message mb-3 self-start min-w-di flex flex-col h-auto bg-white'
        >
          <div className='-mt-1 text-whatsname font-semibold'>
            {name === userfromC ? '' : name}
          </div>
          <p className='text-l   inline-flex break-words flex-wrap w-full h-auto break-all'>
            {message}
          </p>
          <p className='flex  text-xs   justify-end'>
            <div className='text-whatsgray font-light'>
              {time}{' '}
              <span className='ml-1'>
                <DoneRounded fontSize={'small'} />
              </span>
            </div>
          </p>
        </div>
      )
    );
  };
  useEffect(() => {
    let co = cookie.load('username');
    userfromCName(co);
  }, []);
  useEffect(() => {
    console.log('useEffect []', props.id, props.username);
    socket.emit('join-room', { roomId: props.id });
    console.log('props.name', props.username);
    console.log('props.id llllll44', props.id);
    socket.emit('new-user', { roomId: props.id, name: props.username });
  }, []);

  useEffect(() => {
    socket.on('old_massage', payload => {
      console.log('if payload.message', payload.message);

      if (payload.message) {
        console.log([...chat, ...[payload.message]]);
        setChat(payload.message);
        console.log('payload.message', payload.message);
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
      <div className='chatDiv overflow-y-scroll h-5/6 p-2 flex flex-col bg-whatsbg rounded-lg rounded-b-none bg-cover '>
        {renderChat()}
      </div>
      <div className='w-full  p-2 sticky bottom-0 bg-whatsgraylight rounded-t-none rounded-lg '>
        <form className=' w-full   ' onSubmit={sendMessage}>
          <div class='  w-full h-4/6  flex items-center justify-center'>
            <input
              type='text'
              id='"form-subscribe-Subscribe'
              className=' rounded-lg border-transparent rounded-full flex-1 appearance-none border border-gray-300 w-7/8 py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none h-full'
              placeholder='Aa'
              onChange={e => handelChange(e)}
              value={text.message}
              variant='outlined'
              label='Message'
              autoComplete='none'
            />
            <button className='w-1/8 ml-2 outline-none' type='submit'>
              <SendRoundedIcon
                fontSize={'medium'}
                style={{ color: '#9A9A9A' }}
              />
            </button>
          </div>
        </form>
      </div>
    </>
  );
}
