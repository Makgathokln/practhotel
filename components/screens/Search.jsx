import React, { useState, useEffect } from 'react';
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


//import hoteldata from "../backend/hoteldata";
import firebase from "../backend/firebase";
import { auth, db } from "../backend/firebase";

// const data = [
//     {id:1, name:"sohil"},
//     {id:2, name:"like"},
//     {id:3, name:"add"},
//     {id:4, name:"cate"}
// ]

const Search = () => {

// const [dataFromState, setData]= useState(addHotels);
// const [searchName, setsearchName] = useState([])
// const [addHotels, setAddHotels] = useState([]);

// useEffect(() => {
//     db.ref('/addHotels').on('value', snapshot => {
//         const dataFromState = []
//         snapshot.forEach(action => {
//             const key = action.key

//             const data = action.val()
//             dataFromState.push({
//                 key: key,
//                 name: data.name,
//                 images: data.images[0].url,
//                 location: data.location,
//                 description: data.description,
//                 city: data.city,
//                 price1: data.price1
//             })
//             setData(dataFromState)
//         })
//         console.log(dataFromState)
//     })
// }, [])
// console.log(dataFromState[0]?.images, '<------------')

// const item = ({item}) =>{
//         return(
//             <View>
//                 {/* <Text>{item.name}</Text> */}
//             </View>
//         )
//     }



// const searchName =(input) =>{
//     let data = dataFromState;
//     let searchData = data.filter((item)=>{
//         return item.name.toLowerCase().includes(input.toLowerCase());
//     });
//     setData(searchData);
// };


    return (
        <View style={{flex:1, padding:10}}>
                {/* <Text>Hello |World</Text> */}

{/* <TextInput
placeholder='Search'
onChangeText={(input) => {
    searchName(input)
}}
/> 
<FlatList
data={dataFromState}
renderItem={item}
keyExtractor={(item,index)=>index.toString()}
/>  
  
      */}
                        
                    )
                
        </View>
    )
}

export default Search