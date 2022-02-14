import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyDaO7bCngukYSWp-BtBiHy59_rL3HJ81wg",
    authDomain: "hotel-dashboard-d8fae.firebaseapp.com",
    databaseURL: "https://hotel-dashboard-d8fae-default-rtdb.firebaseio.com",
    projectId: "hotel-dashboard-d8fae",
    storageBucket: "hotel-dashboard-d8fae.appspot.com",
    messagingSenderId: "431569237747",
    appId: "1:431569237747:web:3c3abdbbdc3516b3e6e986",
};

const app = initializeApp(firebaseConfig);
export const db = getDatabase(app);
export const auth = getAuth(); 