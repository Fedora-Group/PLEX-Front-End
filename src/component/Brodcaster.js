import React, { useEffect, useState, useLayoutEffect } from 'react';
// import { getStream, getDevices, gotDevices } from '../scripts/boradcaster';
// import ScriptTag from 'react-script-tag';
import Accordion from './Accordion';
import FiberManualRecordRoundedIcon from '@material-ui/icons/FiberManualRecordRounded';

import { useHistory } from 'react-router';
import io from 'socket.io-client';
let videoElement = '';
let audioSelect = '';
let videoSelect = '';
const peerConnections = {};

const socket = io.connect('https://oauth-maq.herokuapp.com');
const Brodcaster = props => {
  const history = useHistory();
  const actualRoomId = props.id;
  const [users, setUsers] = useState([]);
  // const roomIdFromUrl = window.location.href;
  // const actualRoomId = roomIdFromUrl.split('/')[3];

  // taking the room id from the url
  const onlineUsers = document.getElementById('users');
  const online = document.getElementById('online');

  // object contains peers id's which is connected to the broadcaster

  // array contains names of connected users(watchers)

  // calling the fucntion to split out the username cookie from the browser
  const cookies = getCookie();

  //setting up params of TURN & STUN servers.
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

  // opening up(connecting) a socket through express server using http

  // const socket = io.connect(navigator.location.origin);

  // close on socket connection on closing/refreshing the navigator

  // Get camera and microphone

  // useEffect(() => {
  // console.log('users for tamara', users);
  //   // assinging a socket to a room
  //   // socket.emit('join-room', { roomId: actualRoomId, cookies: cookies });
  // }, [users]);

  useEffect(() => {
    videoElement = document.querySelector('video');
    audioSelect = document.querySelector('select#audioSource');
    videoSelect = document.querySelector('select#videoSource');
    getStream().then(getDevices).then(gotDevices);

    // assinging a socket to a room
    socket.emit('join-room', { roomId: actualRoomId, cookies: cookies });
  }, []);

  useLayoutEffect(() => {
    return () => {
      window.onunload = window.onbeforeunload = () => {
        socket.close();
      };
    };
  }, []);
  //fire event when the dropDown list changed.
  //   audioSelect.onchange = getStream;
  //   videoSelect.onchange = getStream;

  useEffect(() => {
    //reciving the answer and establishing (or refusing) with the watcher.js via its RTCPeerConnection

    socket.on('answer', (id, description) => {
      console.log(id);
      peerConnections[id].setRemoteDescription(description);
    });
    // read connected users and render them on the dom
    socket.on('users', userPayload => {
      console.log('userPayload', userPayload);
      // users.push(userPayload);
      setUsers([...users, userPayload]);
      // renderUsers(users);
    });
    // remove/ban watchers
    socket.on('remove-user', username => {
      setUsers(() => {
        return users.filter(item => item.username !== username);
      });
    });
    socket.on('watcher', id => {
      // creating anew RTC peer connection class and sits its STUN and TURN server

      const peerConnection = new RTCPeerConnection(config);
      // saving the peer connection in object value and make the socket id for the watcher the key for it
      peerConnections[id] = peerConnection;
      // adding the video audio stream(all was retrieved bellow in the code)to the same peer connection value
      let stream = videoElement.srcObject;
      stream
        .getTracks()
        .forEach(track => peerConnection.addTrack(track, stream));
      // event handler when activated when the watcher wants to communicate with broadcaster through the STUN signalling
      peerConnection.onicecandidate = event => {
        if (event.candidate) {
          // sending back the watcher socket id along with the Session Description Protocol SDP
          socket.emit('candidate', id, event.candidate);
        }
      };
      // creating connection offer and from its SDP creating localDescription and emitting it along with the its description and the watcher id
      peerConnection
        .createOffer()
        .then(sdp => peerConnection.setLocalDescription(sdp))
        .then(() => {
          socket.emit('offer', id, peerConnection.localDescription);
        });
    });
    // requiring the ip and the id of an watcher candidate from the stun server
    socket.on('candidate', (id, candidate) => {
      peerConnections[id].addIceCandidate(new RTCIceCandidate(candidate));
    });
    // closing the peer connection of  disconnected/banned watcher
    socket.on('disconnectPeer', id => {
      if (peerConnections[id]) {
        console.log('peerConnections[id]', peerConnections, id);
        peerConnections[id].close();
        delete peerConnections[id];
      }
      console.log('peerConnections[id]', peerConnections, id);
    });
  });

  // requests a list of the available media input and output devices, such as microphones, cameras, headsets, and so forth. The returned Promise is resolved with a MediaDeviceInfo array describing the devices.
  function getDevices() {
    return navigator.mediaDevices.enumerateDevices();
  }
  //  creating option element then appending the devises list to the dom tree drop list element(option)
  function gotDevices(deviceInfos) {
    navigator.deviceInfos = deviceInfos;
    for (const deviceInfo of deviceInfos) {
      const option = document.createElement('option');
      option.value = deviceInfo.deviceId;
      if (deviceInfo.kind === 'audioinput') {
        option.text =
          deviceInfo.label || `Microphone ${audioSelect.length + 1}`;
        audioSelect.appendChild(option);
      } else if (deviceInfo.kind === 'videoinput') {
        option.text = deviceInfo.label || `Camera ${videoSelect.length + 1}`;
        videoSelect.appendChild(option);
      }
    }
  }
  //  using the device camera and microphone and capturing their data stream
  function getStream() {
    //getTracks: a sequence that represents all the MediaStreamTrack objects in this stream's
    if (window.stream) {
      window.stream.getTracks().forEach(track => {
        track.stop();
      });
    }
    const audioSource = audioSelect.value;
    console.log('oleeeeeeeeeh', audioSource);
    const videoSource = videoSelect.value;
    const constraints = {
      audio: { deviceId: audioSource ? { exact: audioSource } : undefined },
      video: { deviceId: videoSource ? { exact: videoSource } : undefined },
    };
    return navigator.mediaDevices
      .getUserMedia(constraints)
      .then(gotStream)
      .catch(handleError);
  }
  // save the selected stream data into the videoElement source object then emitting `broadcaster with room id as payload `
  function gotStream(stream) {
    navigator.getUserMedia = stream;
    audioSelect.selectedIndex = [...audioSelect.options].findIndex(
      option => option.text === stream.getAudioTracks()[0].label
    );
    videoSelect.selectedIndex = [...videoSelect.options].findIndex(
      option => option.text === stream.getVideoTracks()[0].label
    );
    videoElement.srcObject = stream;
    socket.emit('broadcaster', { roomId: actualRoomId });
  }
  // logging any unexpected error
  function handleError(error) {
    console.error('Error: ', error);
  }
  // to render users list and the connected user number on the dom

  // handling clicking on the ban button from the dom

  // get the username from the cookies
  function getCookie() {
    var arrayb = document.cookie.split('; ');
    for (const item of arrayb) {
      if (item.startsWith('username=')) {
        return item.substr(9);
      }
    }
  }
  const endMeeting = () => {
    users.forEach(user => {
      socket.emit('remove-him', user.soketId);
      socket.close();
    });
    let gg = videoElement.srcObject;
    gg.getTracks().forEach(function (track) {
      track.stop();
    });
    history.push('/');
  };
  return (
    <React.Fragment>
      <div className='w-1/2 h-1/2'>
        <video playsInline autoPlay muted className='w-full h-64'></video>
        <div className='flex items-center justify-center'>
          <div className='flex gap-3'>
            <section className=''>
              <label htmlFor='audioSource' className='text-gray-700'>
                Audio
              </label>
              <select
                id='audioSource'
                onChange={() => getStream}
                className='block w-52 py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-primary-500 focus:border-primary-500'
              ></select>
            </section>

            <section className='select'>
              <label htmlFor='videoSource' className='text-gray-700'>
                Video
              </label>
              <select
                id='videoSource'
                onChange={() => getStream}
                className='block w-52 py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-primary-500 focus:border-primary-500'
              ></select>
            </section>
          </div>
          <div className='self-end'>
            <button
              type='button'
              className='w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-red-600 text-base font-medium text-white hover:bg-red-700 focus:outline-none focus:ring-2 h-10 focus:ring-offset-2 focus:ring-red-500 sm:ml-3 sm:w-auto sm:text-sm'
              onClick={endMeeting}
            >
              End Meeting
            </button>
          </div>
        </div>
        <div className=' h-1/2 w-full pt-2'>
          <Accordion length={users.length}>
            {users.map((user, index) => {
              return (
                <li className='flex flex-row' key={index}>
                  <div className='select-none cursor-pointer flex flex-1 items-center p-4'>
                    <div className='flex-1 pl-1 '>
                      <div className='font-medium dark:text-white w-full flex justify-between items-center'>
                        <p>
                          {user.username}
                          <span className='ml-1'>
                            <FiberManualRecordRoundedIcon
                              style={{ fontSize: '14px', color: '#31A24C' }}
                            />
                          </span>
                        </p>
                        <button
                          type='button'
                          className='ban py-2 px-4 flex justify-center items-center  bg-indigo-600 hover:bg-indigo-700 focus:ring-indigo-500 focus:ring-offset-indigo-200 text-white  transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg '
                          value={user.soketId}
                          onClick={e => {
                            e.preventDefault();

                            socket.emit('remove-him', e.target.value);
                          }}
                        >
                          Kick
                        </button>
                      </div>

                      <div></div>
                    </div>
                  </div>
                </li>
              );
            })}
          </Accordion>
        </div>
      </div>

      <div className='w-1/2 flex flex-col items-center h-full px-8'>
        <div className='h-full w-full relative mb-4 '>{props.children}</div>
      </div>
    </React.Fragment>
  );
};

export default Brodcaster;
