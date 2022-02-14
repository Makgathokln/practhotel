import React, {useState, useEffect} from 'react';
import { StyleSheet, 
    View, Text, 
    TouchableOpacity, 
    ScrollView,
    ImageBackground,
    Image } from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { TextInput } from 'react-native-gesture-handler';

import COLORS from '../consts/colors';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import FormInput from './FormInput';

const Confirm = ({navigation}) =>{
    function renderCard(){
        return(

            <ImageBackground 
            source={require('./images/master.png')}
            style={{ width:310,
                height:180, 
                resizeMode: 'cover',
                paddingBottom:20,
                marginLeft:25,
               paddingHorizontal:5,
                borderRadius:20, overflow:'hidden'}}>

                    {/* Logo */}

                    <Image
                    source={require('./images/visa.png')}
                    resizeMode='contain'
                    style={{
                        position:'absolute',
                        top:20,
                        right:20,
                        height:40,
                        width:80
                    }}
                    />

                    <View
                    style={{
                        position:'absolute',
                        bottom:10,
                        left:0,
                        right:0,
                    paddingHorizontal:20                    }}
                    >
                        <Text
                        style={{color:COLORS.secondary,
                        fontSize:20}}
                        >
                            Leah Makgatho
                        </Text>
                        <View style={{flexDirection:'row'
                    }}>
                        <Text style={{flex:1, color:COLORS.secondary,}}>
                            1234 1234 1234 1234
                        </Text>
                        <Text style={{color:COLORS.secondary}}>12/25</Text>
                        </View>
                    </View>
                        
                   
                </ImageBackground>
         
        )

    }

    

    return(
        

        <View style={{
            flex:1,
        }}>
        
        {/* Header */}
      {/* //  {renderHeader} */}

        <View style={{flexDirection:'row',
         
         paddingTop:20 }}>
        <Icon name="keyboard-arrow-left" size={38} color='#0b1674'
         style={{justifyContent:'flex-start',marginRight:'85%', marginTop:'5%'}} onPress={navigation.goBack}/>      
        </View>

        <View>
        <Text style={{fontWeight:'bold', fontSize:22, paddingBottom:30, 
         color:COLORS.secondary, textAlign:'center'}}>
           My Card</Text>

        </View>  

        {renderCard()}
        
        <View>
        <Text style={{flexDirection:'row',color:COLORS.gray, fontSize:20, fontWeight:'bold', paddingHorizontal:20,paddingTop:20,}}>
           Please note that you are about to make a payment for your bookings. </Text>
        </View>

        <View style={{flexDirection:'row',paddingHorizontal:20, paddingTop:10}}>
        <Text style={{flexDirection:'row',color:COLORS.secondary, fontSize:18, fontWeight:'bold'}}>No. Of Rooms</Text>
        <Text style={{flexDirection:'row',color:COLORS.secondary, fontSize:18, fontWeight:'bold', paddingLeft:120}}>3</Text>

        </View>

        <View style={{flexDirection:'row',paddingHorizontal:20, paddingTop:20}}>
        <Text style={{flexDirection:'row',color:COLORS.secondary, fontSize:18, fontWeight:'bold'}}>Arrival</Text>
        <Text style={{flexDirection:'row',color:COLORS.secondary, fontSize:18, fontWeight:'bold', paddingLeft:140}}>Departure</Text>

        </View>

        <View style={{flexDirection:'row',paddingHorizontal:20, paddingTop:10}}>
        <Text style={{flexDirection:'row',color:COLORS.gray, fontSize:18, fontWeight:'bold'}}>23/03/2022</Text>
        <Text style={{flexDirection:'row',color:COLORS.gray, fontSize:18, fontWeight:'bold', paddingLeft:100}}>25/2/2022</Text>

        </View>

        <View style={{flexDirection:'row',paddingHorizontal:20, paddingTop:10}}>
        <Text style={{flexDirection:'row',color:COLORS.secondary, fontSize:18, fontWeight:'bold'}}>No. Of Adults</Text>
        <Text style={{flexDirection:'row',color:COLORS.secondary, fontSize:18, fontWeight:'bold', paddingLeft:90}}>No. Of Children</Text>

        </View>

        <View style={{flexDirection:'row',paddingHorizontal:20, paddingTop:10}}>
        <Text style={{flexDirection:'row',color:COLORS.gray, fontSize:18,
         fontWeight:'bold',paddingLeft:50}}>3</Text>
        <Text style={{flexDirection:'row',color:COLORS.gray, fontSize:18, fontWeight:'bold', paddingLeft:190}}>3</Text>

        </View>

        <View style={{flexDirection:'row',paddingHorizontal:20, paddingTop:10}}>
        <Text style={{flexDirection:'row',color:COLORS.primary, fontSize:22,
         fontWeight:'bold',}}>Total:</Text>
        <Text style={{flexDirection:'row',color:COLORS.primary, fontSize:22, fontWeight:'bold', paddingLeft:70}}>R7500</Text>

        </View>

        <View style={{paddingTop:10, paddingHorizontal:20}}>
<TouchableOpacity
                 style={{backgroundColor:COLORS.secondary,width:'100%',height:55,borderRadius:10,
                alignItems:'center'}}
                onPress={()=>navigation.navigate('PaymentConfirmation')}>
                <Text style={{color:'#fff',fontSize: 16, marginTop:15, fontWeight:'bold'}}>
                    Pay
                </Text>
            </TouchableOpacity>
</View>

        </View>     
    )
}
export default Confirm;