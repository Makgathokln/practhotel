import React, {useState, useEffect} from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Image} from 'react-native';

import Icon from 'react-native-vector-icons/MaterialIcons';
import COLORS from '../consts/colors';
import hotel from '../consts/hotel';
import { db, auth } from '../backend/firebase';

import { FlatList,
    ScrollView,
    TextInput, 
    } from 'react-native-gesture-handler';


const HistoryScreen=({navigation}) =>{
    

    const [addBookings, setAddBookings] = useState([]);
    const uid = auth.currentUser.uid;
    console.log(uid)
    useEffect(() => {
        db.ref('/addBookings' + uid).on('value', snapshot => {
            
            const addBookings = []
            snapshot.forEach(action => {
                const key = action.key

                const data = action.val()
                    addBookings.push({
                    key: key,
                    name: data.name,
                    images: data.images,
                    CheckIn: data.CheckIn,
                   CheckOut: data.CheckOut,
                    adultPlus: data.adultplus,
                    description: data.description,
                    price1: data.price1,
                    room: data.room,
                    status : data.status,
                 
                })
                setAddBookings(addBookings)
            })
            console.log(addBookings)
        })
    }, [])
    console.log(addBookings[0]?.images,)

    const categories = ['All', 'Hotel','Status']
    const [selectedCategoryIndex, setSelectedCategoryIndex] = React.useState(0);
    // const CategoryList =({})=>{
    //     return(
    //     <View style={styles.categoryListContainer}>
    //         {categories.map((item,index) =>(
    //             <TouchableOpacity key={index} 
    //             activeOpacity={0.8}
    //             onPress={()=>setSelectedCategoryIndex(index)}
    //             >
    //                 <View>
    //                     <Text style={{...styles.categoryListText, color:
    //                         selectedCategoryIndex == index 
    //                         ? COLORS.primary
    //                         : COLORS.secondary
    //                         }}>{item}
    //                         </Text>
    //                         {selectedCategoryIndex == index && (  <View style={{height:3, width:30,backgroundColor:COLORS.primary,
    //                             marginTop:2,
    //                         }}
    //                         />
    //                     )}
                                            

    //                 </View>
    //             </TouchableOpacity>
    //             ))}
    //         </View>
    //     );
    // };
    
const Card = ({hotel,index}) =>{
   return( 

<TouchableOpacity  onPress={()=>navigation.navigate('Notify', hotel)}>

    <View
    style={{
        flex:1,
        flexDirection:'row',
        justifyContent:'space-between',
        alignContent:'space-between',
        marginBottom:20,
        borderColor: COLORS.primary,
        borderRadius:10,
       
        paddingHorizontal:20,
        width:'95%',
        height:'150%'
    }}> 


    <Image source={{ uri: hotel?.images }} style={{width:'20%',height:'80%', borderRadius:5,marginTop:7,}}>
    </Image>

    <View style={{flex:1,
         paddingHorizontal:15}}>
    
    
    <Text style={{fontWeight:'bold', color:COLORS.gray, fontSize:12}}>You have succesfully paid for your stay at {hotel.name} from {hotel.CheckIn} to {hotel.CheckIn}.</Text>
    <View style={{flexDirection:'row',}}>
    {/* <Text style={{fontWeight:'bold', color:COLORS.gray,fontSize:10}}>{hotel.CheckIn} to {hotel.CheckIn} </Text> */}
    </View>
    {/* <TouchableOpacity onPress={() => navigation.navigate('signIn') }>
    <Text style={{fontWeight:'bold', color:COLORS.secondary, fontSize:16}}>{hotel.description}</Text>
    </TouchableOpacity> */}

</View>
    </View></TouchableOpacity> 
   )}

    return(

        <View style={{ flex:1}}>

        <View style={styles.header} >
        <Icon name="keyboard-arrow-left" size={38} color='#fff' style={{justifyContent:'flex-start',marginRight:'85%', marginTop:'5%'}} onPress={navigation.goBack}/>      

       
            <Text style={{ fontSize:26, fontWeight:'bold', color:COLORS.white, marginTop:30}}> Notifications</Text>
        </View>
        
        <View style={{top:-250, paddingHorizontal:20}}>
        <View style={{flexDirection:'row', justifyContent:'space-between', alignContent:'space-between', }}> 
<Text> All</Text>

<Text>Mark as read</Text>

</View>
        <View
  style={{
    borderBottomColor: COLORS.primary,
    borderBottomWidth: 2,
  }}
/>
       
        </View>
       

        <View style={{ height: 140,
        width: 300,
        backgroundColor: COLORS.white,
        elevation: 15,
        marginHorizontal: 10,
        borderRadius: 10,
        top:150,
        left:50,
        position:'absolute'
        }}>
                  <Text style={{ fontSize: 26, fontWeight: 'bold', color: COLORS.primary, marginTop: 50 ,textAlign:'center'}}> Notifications</Text>

          </View>
      
          <View >

            
            <FlatList 
            data={addBookings}
            contentContainerStyle={{paddingVertical:10,paddingLeft:20}}
            showsHorizontalScrollIndicator={false}
            renderItem={({item,index}) => <Card hotel={item} index={index}/>}
            />
            {
                    addBookings.map((item) => {
                        <Text>{item.name}</Text>
                    })
                }
        </View>

        
        </View>
    )
}

const styles = StyleSheet.create({
    header: {
        height:550,
        width:500,
        backgroundColor:COLORS.secondary,
        marginLeft:-45,
        borderRadius:500,
        top:-280
    },

    searchContainer:{
        height:50,
        width:100,
        borderColor: COLORS.primary,
        borderRadius:10,
        borderWidth: 3,

        flex:1,
        flexDirection:'row',
        alignItems:'center',
        marginHorizontal:20,

    }, 

    inputText:{
        fontSize:18,
        fontWeight:'bold',
        color: COLORS.secondary,
        flex:1,

    },

    categoryListContainer:{
        flexDirection:'row',
        justifyContent:'space-between',
        marginHorizontal:'space-between',
        marginHorizontal: 20,
        marginTop:30,
    },

    categoryListText:{
        fontSize:17,
        fontWeight:'bold',
    },
})

export default HistoryScreen