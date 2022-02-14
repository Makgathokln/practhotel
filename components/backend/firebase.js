import firebase from 'firebase/app'
import 'firebase/auth';
import 'firebase/firestore';
import 'firebase/storage';
import 'firebase/database'

const fire = firebase.initializeApp({
    apiKey: "AIzaSyDaO7bCngukYSWp-BtBiHy59_rL3HJ81wg",
    authDomain: "hotel-dashboard-d8fae.firebaseapp.com",
    databaseURL: "https://hotel-dashboard-d8fae-default-rtdb.firebaseio.com",
    projectId: "hotel-dashboard-d8fae",
    storageBucket: "hotel-dashboard-d8fae.appspot.com",
    messagingSenderId: "431569237747",
    appId: "1:431569237747:web:3c3abdbbdc3516b3e6e986",
});

export const auth = fire.auth();
//export const db = fire.firestore();
export const db = firebase.database();
export default { fire, };