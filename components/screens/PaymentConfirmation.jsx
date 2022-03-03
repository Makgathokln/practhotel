import React, {useState, useEffect} from 'react';
import { StyleSheet, 
    View, Text, 
    TouchableOpacity, 
    ScrollView } from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import Icon from 'react-native-vector-icons/MaterialIcons';
import COLORS from '../consts/colors';
import { db, auth } from '../backend/firebase';

import  { Paystack }  from 'react-native-paystack-webview';

const PaymentConfirmation = ({navigation,route}) =>{
  const [room, setRoom] = useState(0);
  const  room1=route.params.room
    // const CheckIn=route.params.CheckIn
    // const CheckOut=route.params.CheckOut
    const adultPlus=route.params.adultPlus
   const Rp=route.params.Rp
    const item=route.params.item
     
    const name=item.name
    //  const diff=route.params.diff

    const[CheckIn,setCheckIn]=useState(route.params.CheckIn)
    const [CheckOut, setCheckOut]=useState(route.params.CheckOut)
    const [images, setImages]=useState(item?.images)
     //const [roomprice, setroomprice]=useState(route.params.Rp)
    const [status,setStatus]=useState('Pending')
    const [description, setDescription]=useState('Succesfully paid booking')
    const [statement, setStatement]=useState('Succesfully paid booking'+CheckIn+CheckOut)


const addBooking=()=>{
  const userid=auth.currentUser.uid

  db.ref('addBookings').push({
    userid,status,
    description,name,CheckIn,
    CheckOut,adultPlus,room1,images,Rp
  })
}
console.log('price',Rp)

    return(
        
        <View style={{
            flex:1,
           
        }}>
        
      
        <View style={{flexDirection:'row',
         
         paddingTop:20 }}>
       {/* <Icon name="keyboard-arrow-left" size={38} color='#0b1674' style={{justifyContent:'flex-start',marginRight:'85%', marginTop:'5%'}} onPress={navigation.goBack}/>       */}
        </View>

        <View style={{
            flex:1,
            alignItems: 'center',
             justifyContent:'center',
            
        }}>
        {/* <Text style={{fontWeight:'bold', fontSize:24,  
         color:'#00cc00', textAlign:'center', }}>
           Payment Successful </Text> */}
           <View>
           {/* <Icon name="done" size={60} color={'#00cc00'} /> */}
           <Paystack 
        buttonText="pay now"
       
        paystackKey="pk_test_7454ec1e01d4ccb65293add51de6808ab68f1165"
        amount={Rp}
        billingEmail="makgathokln@gmail.com"
     
        activityIndicatorColor="green"
        currency={'ZAR'}
        onCancel={(e) => {
          navigation.navigate('HomeScreen')

          }}
          onSuccess={addBooking}
          autoStart={true}
          />
           </View>

        </View >

        
        </View>
        
    )
}
export default PaymentConfirmation;