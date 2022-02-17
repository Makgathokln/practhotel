import React from "react";

const addHotel = () => {

    const queryHotelsByName = (name) => new Promise((resolve, reject) =>{
        firebase.db()
        .collection('addHotels')
        .where('name', '>=', email)
        .where('name', '<=', email + '\uf8ff')
       .get()
        .then((snapshot) => {
            let addHotels = snapshot.docs.map(doc => {
                const data = doc.data();
                const id = doc.id;
                return{id, ...data}
                // addHotels[0].name    
            })
            resolve(addHotels)
        })
        .catch(() => reject())
    })
    return ( 
<></>

    )
}

export default addHotel