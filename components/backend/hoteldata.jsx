import { getDatabase } from "firebase/database";
import { db } from "./firebase";

//const db = firebase.ref('./addRooms')


class hoteldata {
    getData(addRooms){
        return firebase.ref(`./${addRooms}`).fetch(data)
    }

    getData(addHotels){
        return firebase.ref(`./${addHotels}`).fetch(data)
    }

    

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