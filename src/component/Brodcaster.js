import React, { useEffect, useState, useLayoutEffect } from 'react';
// import { getStream, getDevices, gotDevices } from '../scripts/boradcaster';
// import ScriptTag from 'react-script-tag';
import { useHistory } from 'react-router';
import io from 'socket.io-client';
let videoElement = '';
let audioSelect = '';
let videoSelect = '';
const peerConnections = {};

const socket = io.connect('http://localhost:5000');
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
        urls: 'stun:us-turn8.xirsys.com',
      },
      {
        urls: 'turn:bn-turn1.xirsys.com:3478?transport=tcp',
        credential: '623a9ff2-edf5-11eb-98f1-0242ac140004',
        username:
          'N4lRiJq6BOOjXlA5VG_uwUtS450cDuzSannpaBm6UmvtJKOw6X8gmC8Cp24JweZQAAAAAGD-gtVpYnJhaGltYmFuYXQ=',
        credentialType: 'password',
      },
    ],
  };

  // opening up(connecting) a socket through express server using http

  // const socket = io.connect(navigator.location.origin);

  // close on socket connection on closing/refreshing the navigator

  // Get camera and microphone

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
    <div>
      <section className='select'>
        <label htmlFor='audioSource'>Audio source: </label>
        <select id='audioSource' onChange={() => getStream}></select>
      </section>

      <section className='select'>
        <label htmlFor='videoSource'>Video source: </label>
        <select id='videoSource' onChange={() => getStream}></select>
      </section>

      <video playsInline autoPlay muted></video>
      <div>
        Online Users: <span id='online'>{users.length}</span>
      </div>

      <div id='users'>
        {users.map((user, index) => {
          return (
            <div key={index}>
              <span>{user.username}</span>
              <button
                className='ban'
                value={user.soketId}
                onClick={e => {
                  e.preventDefault();
                  console.log(
                    'e.target.value',
                    e.target.value,
                    e.currentTarget.value
                  );
                  socket.emit('remove-him', e.target.value);
                }}
              >
                Ban
              </button>
            </div>
          );
        })}
      </div>
      <div id='message-container'></div>
      <button
        className='bg-red-600 text-white p-2 rounded'
        onClick={endMeeting}
      >
        End Meeting
      </button>
    </div>
  );
};

export default Brodcaster;
