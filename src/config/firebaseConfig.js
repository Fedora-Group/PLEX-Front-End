import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: 'AIzaSyC7nsVkxb-upxDpdSf4OTY11J0r79JJr8s',
  authDomain: 'plex-2152b.firebaseapp.com',
  projectId: 'plex-2152b',
  storageBucket: 'plex-2152b.appspot.com',
  messagingSenderId: '930940583706',
  appId: '1:930940583706:web:ca8c209c412129acbb36a3',
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.firestore().settings({ timestampsInSnapshots: true });

export default firebase;
