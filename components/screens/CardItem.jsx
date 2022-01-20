import React, {useState, useEffect} from 'react';
import { StyleSheet, 
    View, Text, 
    TouchableOpacity, 
    ScrollView } from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import Icon from 'react-native-vector-icons/MaterialIcons';
import COLORS from '../consts/colors';

const CardItem = ({item, isSelected, onPress}) =>{
//    function renderHeader(){

//    }
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
           Add New Card</Text>

        </View>
        </View>
        
    )
}
export default CardItem;