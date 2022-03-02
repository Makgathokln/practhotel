import React, { useState, useEffect } from "react";
import {View, Text, StyleSheet, TouchableOpacity, Image} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import COLORS from '../consts/colors';
import room from '../consts/rooms';
import { FlatList,
    ScrollView,
    TextInput, 
    } from 'react-native-gesture-handler';
import  { Paystack }  from 'react-native-paystack-webview';

import {Picker} from '@react-native-picker/picker';
import SelectDropdown from 'react-native-select-dropdown'
import { auth, db } from "../backend/firebase";


const Rooms=({navigation,route}) =>{
    const [addHotels, setAddHotels] = useState([]);
    const item =route.params.item
    const CheckIn=route.params.CheckIn
    const CheckOut=route.params.CheckOut
    const adultPlus=route.params.adultPlus
    const categories = ['All', 'Popular','Top Rated']

    // const paystackWebViewRef = useRef<paystackProps.PayStackRef>();

    
    const [selectedCategoryIndex, setSelectedCategoryIndex] = React.useState(0);
    // const [selectedPrice, setSelectedPrice] = useState();
    const sort = ["highest to lowest", "lowest to highest"]

   
    // console.log(addHotels[0]?.images, '<------------')

const Card = ({room,index}) =>{
   return( 
    <ScrollView showsVerticalScrollIndicator={false}>
        
    <View style={{
        flex:1,
        flexDirection:'row', justifyContent:'space-between',
        alignContent:'space-between', marginTop:10,
        borderColor: COLORS.primary,
        borderRadius:10,
        borderWidth: 3,
        width:'95%',
        height:'250%',
        padding:10,

}}> 

    <Image source={{ uri: room?.roomurl }} style={{width:'40%',height:'105%', borderRadius:10}}>
    </Image>

    <View style={{flex:1,
        flexDirection:'column', paddingHorizontal:15}}>
    
    <Text style={{fontWeight:'bold', color:COLORS.secondary, fontSize:20}}>{room.roomtype} Room </Text>
    <View style={{flexDirection:'row', }}>
    <Icon name="airline-seat-flat" size={24} color={COLORS.primary} style={{marginRight:10}}/>
    <Text style={{fontWeight:'bold', color:COLORS.secondary, fontSize:16}}>{room.beds}bed(s) </Text>

    </View>

    <View style={{flexDirection:'row', }}>
    <Icon name="money" size={24} color={COLORS.primary} style={{marginRight:10}}/>
    <Text style={{fontWeight:'bold', color:COLORS.secondary, fontSize:16}}>R{room.roomprice}.00</Text>

    </View>

    <View style={{flexDirection:'row',justifyContent:'space-between', alignContent:'space-between' }}>

    {/* <Paystack 
        buttonText="pay now"
       
        paystackKey="pk_test_7454ec1e01d4ccb65293add51de6808ab68f1165"
        amount={'1.00'}
        billingEmail="makgathokln@gmail.com"
     
        activityIndicatorColor="green"
        currency={'ZAR'}
        onCancel={(e) => {
            navigation.goBack
          }}
          onSuccess={(res) => {
            navigation.goBack          }}
          autoStart={true}
          />
{/*  */}
    {/* <TouchableOpacity onPress={()=> paystackWebViewRef.current.startTransaction()}>
          <Text>Pay Now</Text>
        </TouchableOpacity>  */}
    <TouchableOpacity onPress={() => navigation.navigate('Confirm',{
        CheckIn:CheckIn,
        CheckOut:CheckOut,
        adultPlus:adultPlus
    }) }>
    {/* <Text style={{fontWeight:'bold', color:COLORS.secondary, fontSize:16}}>Select</Text> */}
    <Icon name="add-circle" size={24} color={COLORS.primary} />
    <Text> {item.room.length} Available Rooms</Text>
    
    </TouchableOpacity>
</View>
</View>
    </View> 
    </ScrollView>
   )}

    return(

        <ScrollView showsVerticalScrollIndicator={false}>

        <View style={{ flex:1}}>

        <View style={styles.header} >
        <Icon name="keyboard-arrow-left" size={38} color='#fff'
        style={{justifyContent:'flex-start',marginRight:'85%', marginTop:'5%'}} onPress={navigation.goBack}/>      

       
            <Text style={{ fontSize:26, fontWeight:'bold', color:COLORS.white, marginBottom:30}}>  Select Room Type </Text>
            {/* <Text style={{ fontSize:26, fontWeight:'bold', color:COLORS.white}}> {room.name}</Text> */}

        </View>

        <View>
        {/* <Text style={{ fontSize:26, 
            fontWeight:'bold', 
            color:COLORS.secondary,
             paddingTop:10, paddingHorizontal:20, textAlign:'center'}}> Select Room Type {room.name}</Text> */}
 
        </View>

        {/* <View style={{flexDirection:'row', 
        justifyContent:'flex-end', 
        alignContent:'flex-end', }}>
           
           <SelectDropdown
	        data={sort}
            containerStyle= {
                styles. dropdownStyle }
	        onSelect={(selectedItem, index) => {
		    console.log(selectedItem, index)
	}}
	buttonTextAfterSelection={(selectedItem, index) => {
		// text represented after item is selected
		// if data array is an array of objects then return selectedItem.property to render after item is selected
		return selectedItem
	}}
	rowTextForSelection={(item, index) => {
		// text represented for each item in dropdown
		// if data array is an array of objects then return item.property to represent item in dropdown
		return item
	}}
/>              
        </View> */}
        
      


        <View style={{marginTop:20}}>
            <FlatList 
            data={item.room}
            contentContainerStyle={{paddingLeft:20}}
            showsHorizontalScrollIndicator={false}
            renderItem={({item,index}) => <Card room={item} index={index}/>}
            />
        </View>

        <TouchableOpacity
                 style={{ margin:10, justifyContent:'flex-end'}}
                 onPress={()=>navigation.navigate('PaymentScreen')}>
                <Text style={{padding:5,color:COLORS.secondary,fontWeight:'bold', textAlign:'right'}}>
                Proceed to payment
                </Text>
</TouchableOpacity>
        
        </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    header: {
    width:'100%',
    height:'30%',
    paddingVertical: 30,
    borderRadius:10,
    alignItems:'center',
    backgroundColor: '#0b1674',
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    },


    inputText:{
        fontSize:18,
        fontWeight:'bold',
        color: COLORS.secondary,
        flex:1,

    },

    

    categoryListText:{
        fontSize:17,
        fontWeight:'bold',
    },
})

export default Rooms