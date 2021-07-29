import React, { useEffect, useLayoutEffect } from 'react';
import io from 'socket.io-client';
import { useHistory } from 'react-router';

let video = '';
let peerConnection;
const socket = io.connect('https://oauth-maq.herokuapp.com/');

const Watcher = props => {
  const history = useHistory();
  const actualRoomId = props.id;
  console.log(props.id);

  // const roomIdFromUrl = window.location.href;
  // const actualRoomId = roomIdFromUrl.split('/')[3];
  // taking the room id from the url

  const config = {
    iceServers: [
      {
        urls: 'stun:sp-turn2.xirsys.com',
      },
      {
        urls: 'turn:sp-turn2.xirsys.com:3478?transport=tcp',
        credential: '57eaecfc-f03c-11eb-b409-0242ac120004',
        username:
          'la9l9OExQKT_lXBu0g5-48EytlKTrMx7D5OoxRNUdXO9zkSzYP9O0idbNnlaJF9QAAAAAGECVOBpYnJhaGltYmFuYXQ=',
        credentialType: 'password',
      },
    ],
  };
  const cookies = getCookie();
  console.log(cookies);
  const enableAudioButton = document.querySelector('#enable-audio');
  const disableAudioButton = document.querySelector('#disable-audio');

  // enable stream audio button event handler
  function enableAudio() {
    video.muted = false;
    console.log(video);
  }
  // disable stream audio button event handler

  function disableAudio() {
    video.muted = true;
  }
  // get the username from the cookies

  useEffect(() => {
    peerConnection = new RTCPeerConnection(config);

    video = document.querySelector('video');

    socket.emit('join-room', { roomId: actualRoomId, cookies: cookies });
    // resiving an  peer-to-peer offer from the broadcaster via the socket.io-express server  with the ip and the offer description
  }, []);
  useLayoutEffect(() => {
    return () => {
      window.onunload = window.onbeforeunload = () => {
        socket.close();
        peerConnection.close();
      };
    };
  }, []);
  useEffect(() => {
    socket.on('offer', (id, description) => {
      console.log('from use effect', id, description);
      peerConnection
        .setRemoteDescription(description)
        .then(() => peerConnection.createAnswer())
        .then(sdp => peerConnection.setLocalDescription(sdp))
        .then(() => {
          socket.emit('answer', id, peerConnection.localDescription);
          // it will create new peer connection and read the remote description prepare an answer to it then emmits its own connection description to the broadcaster via the socket io
        });
      peerConnection.ontrack = event => {
        video.srcObject = event.streams[0];
      };
      peerConnection.onicecandidate = event => {
        if (event.candidate) {
          socket.emit('candidate', id, event.candidate);
        }
      };
    });
    //  Creating an ICE candidate from the broadcaster SDP  that  describes the protocols and routing needed for WebRTC to be able to communicate with a remote device.
    socket.on('candidate', (id, candidate) => {
      peerConnection
        .addIceCandidate(new RTCIceCandidate(candidate))
        .catch(e => console.error(e));
    });

    socket.on('connect', () => {
      let username = getCookie();
      console.log('we are venom', actualRoomId);
      socket.emit('watcher', actualRoomId);
      socket.emit('add-connected', { username, actualRoomId });
    });
    // retrieved the broadcaster roomID and emit it to the `watcher` listner on the server.js with its own room id//the should be the same roomID
    socket.on('broadcaster', roomId => {
      console.log('insid', roomId);
      socket.emit('watcher', roomId);
    });
    socket.on('kick-watcher', () => {
      history.push('/backtohome');
    });
    // close on socket/peer connection on closing/refreshing the window
  }, [actualRoomId]);

  function getCookie() {
    var arrayb = document.cookie.split('; ');
    for (const item of arrayb) {
      if (item.startsWith('username=')) {
        return item.substr(9);
      }
    }
  }
  return (
    <div className='w-full h-full flex'>
      <div className='w-1/2 h-full'>
        <video playsInline autoPlay muted className='w-full h-80'></video>
        <div className='flex gap-2 justify-center'>
          <button
            type='button'
            className='ban py-2 px-4 flex justify-center items-center  bg-indigo-600 hover:bg-indigo-700 focus:ring-indigo-500 focus:ring-offset-indigo-200 text-white  transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg '
            id='enable-audio'
            onClick={enableAudio}
          >
            Enable Audio
          </button>
          <button
            type='button'
            className='ban py-2 px-4 flex justify-center items-center   bg-white hover:bg-gray-100 focus:ring-white-500 focus:ring-offset-white-200 text-indigo-600  transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg '
            id='disable-audio'
            onClick={disableAudio}
          >
            Disable Audio
          </button>
        </div>
        {/* <button id='enable-audio' class='p-8 bg-gray-700' onClick={enableAudio}>
          Enable Audio
        </button>
        <button id='disable-audio' onClick={disableAudio}>
          Disable Audio
        </button>
      </div> */}
      </div>
      <div className='w-1/2 h-full'>{props.children}</div>
    </div>
  );
};

export default Watcher;
