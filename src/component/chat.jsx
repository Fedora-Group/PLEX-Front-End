import React,{ useEffect, useState }  from 'react'
import TextField from '@material-ui/core/TextField';
import io from "socket.io-client";



const socket =  io.connect('https://oauth-maq.herokuapp.com');

export default function Chat(props) {
  
  
  const [text, setText] = useState({message:'',name:'croco'})
  const [chat, setChat] = useState([ {name:'wat',message:'weareVEnom'} ])

  // dev Note using the useref to define the soket didnot work // 
  
  
  const handelChange = (e)=>{
    setText({message:e.currentTarget.value})

  }
  
  
  
  const sendMessage = (e)=>{
    e.preventDefault();
    

  }


  // socket.on('new-user', payload => {
  //   socket.emit('old_massage', { message: roomsMassages[payload.roomId] });
  //   console.log('********************', roomsMassages[payload.roomId]);
  //   users[socket.id] = payload.name;
  //   socket.broadcast.to(payload.roomId).emit('user-connected', {
  //     name: payload.name,
  //     time: moment().format('h:mm a'),
  //   });
  // });

  const renderChat = () => {
		return chat.map(({ name, message }, index) => (
			<div key={index}>
				<h3>
					{name}: <span>{message}</span>
				</h3>
			</div>
		))

	}

  useEffect(() => {
 
    socket.emit('join-room',{roomId:'222'});
    socket.emit('new-user' , {roomId:'222',name:'famalam'})
    socket.on('old_massage',payload=>{console.log(payload)})
  
  }, [])
  return (
    <div className = 'chatDiv'>
      <form onSubmit={sendMessage}>
        <h2>MessageApp</h2>
        <TextField
						name="message"
						onChange={(e) => handelChange(e)}
						value={text.message}
						id="outlined-multiline-static"
						variant="outlined"
						label="Message"
					/>

<div className="render-chat">
				<h2>Chat Log</h2>
				{renderChat()}
			</div>
      </form>
      
    </div>
  )
}


