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
const AddCard = ({navigation}) =>{
    function renderCard(){
        return(
            <ImageBackground 
            source={require('./images/master.png')}
            style={{ width:350,
                height:200, 
                resizeMode: 'cover', paddingLeft:20,paddingBottom:20,
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
        <Text style={{fontWeight:'bold', fontSize:22, paddingTop:10, 
         color:COLORS.secondary, textAlign:'center'}}>
           My Cards</Text>

        </View>  

        {renderCard()}
        
        <View style={{paddingHorizontal:20, paddingTop:10}}>
        <Text style={{margin: 10,color:'#0b1674', fontWeight:'bold' }}>Card Holder Name</Text>
    <TextInput
  style={{height: 50, width: '100%', borderColor: '#0b1674', borderWidth: 3, borderRadius:10}}
  inlineImageLeft="username"
  inlineImagePadding={2}
        />

<Text style={{margin: 10,color:'#0b1674', fontWeight:'bold' }}>Card Number</Text>
    <TextInput
  style={{height: 50, width: '100%', borderColor: '#0b1674', borderWidth: 3, borderRadius:10}}
  inlineImageLeft="username"
  inlineImagePadding={2}
/>

<View style={{flexDirection:'row', justifyContent:'space-between'}}>
<Text style={{margin: 10,color:'#0b1674', fontWeight:'bold' }}>Expiry Date</Text>
<Text style={{margin: 10,color:'#0b1674', fontWeight:'bold' }}>CVV Number</Text>
</View>

<View style={{flexDirection:'row', justifyContent:'space-between'}}>
<TextInput
  style={{height: 50, width: '25%', borderColor: '#0b1674', borderWidth: 3, borderRadius:10}}
  inlineImageLeft="username"
  inlineImagePadding={2}
/>
<TextInput
  style={{height: 50, width: '25%', borderColor: '#0b1674', borderWidth: 3, borderRadius:10}}
  inlineImageLeft="username"
  inlineImagePadding={2}
/>

<TextInput
  style={{height: 50, width: '40%', borderColor: '#0b1674', borderWidth: 3, borderRadius:10}}
  inlineImageLeft="username"
  inlineImagePadding={2}
/>
</View>
<View style={{paddingTop:50}}>
<TouchableOpacity
                 style={{backgroundColor:COLORS.secondary,width:'45%',height:55,borderRadius:10,
                alignItems:'center'}}
                onPress={navigation.goBack}>
                <Text style={{color:'#fff',fontSize: 16, marginTop:15, fontWeight:'bold'}}>
                    Add Card
                </Text>
            </TouchableOpacity>
</View>

        </View>
        </View>     
    )
}
export default AddCard;