import React, { useEffect, useState } from 'react';
import TextField from '@material-ui/core/TextField';
import io from 'socket.io-client';
import moment from 'moment';
const socket = io.connect('http://localhost:5000');

export default function Chat(props) {
  const [text, setText] = useState({ message: '', username: props.username });
  const [chat, setChat] = useState([]);
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
    e.currentTarget.message.value = '';
    setText({ message: '', username: props.username });
  };

  const renderChat = () => {
    return chat.map(({ name, message, time }, index) => (
      <div key={index}>
        <p>
          {name}: <span>{message}</span> : <span> {time} </span>
        </p>
      </div>
    ));
  };

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
    <div className='chatDiv'>
      <form onSubmit={sendMessage}>
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
      </form>
      <div>{props.username}</div>
      <div className='render-chat'>
        <h2>Chat Log</h2>
        {renderChat()}
      </div>
    </div>
  );
}
