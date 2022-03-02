import React, {useState, useEffect} from 'react';
import { StyleSheet, 
    View, Text, 
    TouchableOpacity, 
    ScrollView } from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import Icon from 'react-native-vector-icons/MaterialIcons';
import COLORS from '../consts/colors';
import  { Paystack }  from 'react-native-paystack-webview';

const PaymentConfirmation = ({navigation}) =>{
//    function renderHeader(){

//    }
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
        amount={'1.00'}
        billingEmail="makgathokln@gmail.com"
     
        activityIndicatorColor="green"
        currency={'ZAR'}
        onCancel={(e) => {
            navigation.goBack
          }}
          onSuccess={(res) => {
            navigation.goBack }}
          autoStart={true}
          />
           </View>

        </View >

        
        </View>
        
    )
}
export default PaymentConfirmation;