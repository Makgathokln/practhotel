import React, {useState, useEffect} from 'react';
import { StyleSheet, 
    View, Text, 
    TouchableOpacity, 
    ScrollView, Image } from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import Icon from 'react-native-vector-icons/MaterialIcons';
import COLORS from '../consts/colors';
import DummyData from '../consts/dummyData';
import CardItem from './CardItem';

const PaymentScreen = ({navigation}) =>{
   
    return(
        <View style={{
            flex:1,
        }}>
        
        {/* Header */}
      {/* //  {renderHeader} */}

        <View style={{flexDirection:'row',
         
         paddingTop:20 }}>
        <Icon name="keyboard-arrow-left" size={38} color='#0b1674' style={{justifyContent:'flex-start',marginRight:'85%', marginTop:'5%'}} onPress={navigation.goBack}/>      
        </View>

        <View>
        <Text style={{fontWeight:'bold', fontSize:22, paddingTop:10, 
         color:COLORS.secondary, textAlign:'center'}}>
           My Cards</Text>

        </View>

        <ScrollView
        contentContainerStyle={{
            flexGrow:1,
            marginTop:20,
            marginHorizontal:20,
            paddingBottom:20
        }}
        >
            
            <View style={{flexDirection:'row',borderColor: COLORS.primary,
        borderRadius:10,
        borderWidth: 3,
        paddingHorizontal:20,
        width:'95%',
        height:'20%'
            }}>   
            {/* <Icon name="keyboard-arrow-left" size={38} color='#0b1674' style={{justifyContent:'flex-start',marginRight:'85%', marginTop:'5%'}} onPress={navigation.goBack}/>       */}
            <TouchableOpacity onPress={() => navigation.navigate('Confirm')}> 
            <Text style={{fontWeight:'bold', fontSize:22, paddingTop:10, 
         color:COLORS.secondary}}>
                <Image source={require('./images/master.png')}
               style={{flex:1, width:50,height:40, resizeMode: 'cover'}}></Image>
             My Card</Text>
           </TouchableOpacity>
            </View>

            <View style={{flexDirection:'row', justifyContent:'space-between', alignContent:'space-between', borderColor: COLORS.primary,
        borderRadius:10,
        borderWidth: 3,
        paddingHorizontal:20,
        width:'95%',
        height:'20%', marginTop:20}}>

            <TouchableOpacity style={{flexDirection:'row'}} >
            <Text style={{fontWeight:'bold', fontSize:22, paddingTop:40, 
         color:COLORS.secondary, 
         
         }}
         onPress={() => navigation.navigate('AddCard') }>Add new Card</Text>
            <Icon name="add-circle" size={24} color={COLORS.primary} style={{paddingTop:40, marginLeft:100}}
              onPress={() => navigation.navigate('AddCard') }/>
      
            {/* <Icon name="keyboard-arrow-left" size={38} color='#0b1674' style={{justifyContent:'flex-start',marginRight:'85%', marginTop:'5%'}} onPress={navigation.goBack}/>       */}

            </TouchableOpacity>
            
            </View>


       </ScrollView>
        </View>
        
    )
}
export default PaymentScreen