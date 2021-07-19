import React,{ useEffect, useState }  from 'react'
import TextField from '@material-ui/core/TextField';
import io from "socket.io-client";



const socket =  io.connect('https://oauth-maq.herokuapp.com');

export default function Chat(props) {
  
  
  const [text, setText] = useState({message:'',username:'croco'})
  const [chat, setChat] = useState([ {name:'wat',message:'weareVEnom',time:2} ])

  // dev Note using the useref to define the soket didnot work // 
  
  
  const handelChange = (e)=>{
    setText({message:e.currentTarget.value})

  }
  
  
  
  const sendMessage = (e)=>{
    e.preventDefault();
    let val = text.message;
    
    socket.emit('send-chat-message',{
      message:text.message,
      roomId:'222'
    });
    setChat([...chat,{message:text.message,name:text.name}])
    e.currentTarget.message.value = '';
		setText({ message: "", username:'croco' });
    

    

  }


  const renderChat = () => {
		return chat.map(({ name, message,time }, index) => (
			<div key={index}>
				<p>
					{name}: <span>{message}</span> : <span> {time} </span>
				</p>
			</div>
		))

	}

  useEffect(() => {
 
    socket.emit('join-room',{roomId:'222'});
    socket.emit('new-user' , {roomId:'222',name:'famalam'})
    socket.on('old_massage',  (payload) => {
      if(payload.message){
      console.log([ ...chat,...[payload.message]])
         setChat(...[payload.message]);
        console.log(chat)
      }


    })
  
  }, [])

  useEffect(()=>{
    
    socket.on('chat-message',payload=>{
    setChat([...chat,{message:payload.message,name:payload.name}])
  });

  },[chat])
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
      <button>Send</button>
      </form>
      
    </div>
  )
}


