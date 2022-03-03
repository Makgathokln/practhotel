import React, { useState, useEffect } from 'react';
import { useHistory, useLocation, Link } from 'react-router'
import {
    FlatList,
    TextInput
} from 'react-native-gesture-handler';

import {
    View,
    ActivityIndicator,
    Text,
    ImageBackground,
    Image,
    StyleSheet,
    SearchBar,
    TouchableOpacity,
    Dimensions,
    SafeAreaView,
    Animated,
    ScrollView
}
    from 'react-native';

import Icon from 'react-native-vector-icons/MaterialIcons'
import Ionicons from 'react-native-vector-icons/Ionicons'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import hotel from '../consts/hotel';
import COLORS from '../consts/colors';
//import hoteldata from "../backend/hoteldata";
import firebase from "../backend/firebase";
import { auth, db } from "../backend/firebase";
import SearchUserItem from "../search/userItem/hotelitem";
import queryHotelsByName from "../services/addHotel";
import { useNavigation } from '@react-navigation/native';

// const data = [
//     {id:1, name:"sohil"},
//     {id:2, name:"like"},
//     {id:3, name:"add"},
//     {id:4, name:"cate"}
// ]

const Search = () => {

//const [dataFromState, setData]= useState(addHotels);
//const [searchName, setsearchName] = useState([])
const [addHotels, setAddHotels] = useState();

useEffect(() => {
    db.ref('/addBookings').on('value', snapshot => {
        const addHotels = []
        snapshot.forEach(action => {
            const key = action.key

            const data = action.val()
            addHotels.push({
                key: key,
                name: data.name,
                images: data.images[0].url,
                location: data.location,
                description: data.description,
                city: data.city,
                price1: data.price1
            })
            setAddHotels(addHotels)
        })
        console.log(addHotels)
    })
}, [])
// console.log(dataFromState[0]?.images, '<------------')

const item = ({item}) =>{
        return(
            <View>
                <Text>{item.name}</Text>
            </View>
        )
    }



const searchName =(input) =>{
   if(input) {
    let data = addHotels;
    let searchData = data.filter((item)=>{
        return item.name.toLowerCase().includes(input.toLowerCase());
    });
    setAddHotels(searchData);
} else {
    setAddHotels(addHotels);
    }
}


    return (
        <View style={{flex:1, padding:10}}>
                <Text>Hello |World</Text>
<TextInput
placeholder='Search'
onChangeText={(input) => {
    searchName(input)
}}
/> 
<FlatList
data={addHotels}
renderItem={item}
keyExtractor={(item,index)=>index.toString()}
/>  
  
     
                        
                    
                
        </View>
    )
}

export default Search