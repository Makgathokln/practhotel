import { getDatabase } from "firebase/database";
//import { db } from "./firebase";
import firebase from "../backend/firebase";

// const db = firebase.ref('/addHotels')


class hoteldata {
    // getData(){
    //     return db
    // }

    // getData(addHotels){
    //     return firebase.ref(`./${addHotels}`).fetch(data)
    // }

    

    createHotel(data){
        return db.push(data)
    }

    getDataById(key) {
        return db.child(key)
    }

    updateHotel(key, data) {
        return db.child(key).update(data)
    }

    deleteHotel(key) {
        return db.child(key).remove()
    }

}

export default new hoteldata