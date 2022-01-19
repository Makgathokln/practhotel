import React from 'react';
import {Text,
     ImageBackground,
     ScrollView,
     Dimensions,
     View,
     Image,
     Button,
      StyleSheet,
      Pressable,
      TouchableOpacity
    } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
//import CheckBox from 'react-native-check-box';
import Ionicons from 'react-native-vector-icons/Ionicons'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import Icon from 'react-native-vector-icons/MaterialIcons'
import COLORS from '../consts/colors';


const profile =({navigation})=>{
    return(
        <>


<View style={{flex:1, backgroundColor:'#fff'}}>
<View style={{paddingTop:40, 
    flexDirection:'row',paddingHorizontal:20}}>
          <Icon name="arrow-back-ios" size={38} color='gray'
          onPress={navigation.goBack} />
 
    <Text style={{fontSize:20, fontWeight:'bold',color:COLORS.secondary, paddingLeft:"20%"}}>My Profile</Text>

    </View>

    <View style={{flexDirection:'row',paddingHorizontal:20, paddingTop:20,}}>
{/* 
    <Image source={require('./images/exec.jpg')} 
    style={{height:'20%',width:'20%'}}
 />   */}
 <Image source={require('./images/profile.jpeg')}
               style={{ width:100,height:100,marginLeft:100 , borderRadius:20}}></Image>
           <View style={{paddingTop:'20%'}}>
           <Icon name="create" size={20} color='gray' />



           </View>


    </View>
    <View>
<Text style={{fontSize:20, fontWeight:'bold',
color:COLORS.primary, paddingLeft:"30%", 
paddingTop:'5%'}}>Leah Makgatho</Text>

</View>
</View>

</>
    )
}

export default profile

const {width, height } = Dimensions.get("screen");

const styles = StyleSheet.create({
    container: {
        flex:1,
        alignItems: 'center',
        justifyContent: 'center',
    },

    innerBottom: {
        margin:20,
    },


    bottomView:{
  flex:1.5,
  backgroundColor:'#fff',
  bottom:50,
  borderTopStartRadius: 40,
  borderTopEndRadius: 40,
  },

  input:{
      borderColor: '#0b1674',
      borderWidth: 3,
      width:width / 1.3,
      padding: 10,
    
    },

    inputContainer:{
        top:20
  
    },

    textdes:{
        fontWeight:'bold',
    paddingBottom:10,
        color:'#0b1674',
 },

 
 button:{
    width:width / 1.3,
    height:height / 18.3,

    borderRadius:10,
    alignItems:'center',
    backgroundColor: '#fff',
    borderWidth:2,
    borderColor:'#0b1674',
    top:30,
},

 buttonText: {
    fontSize: 20,
    color: '#ff6e1a',
    fontWeight: 'bold',
top:5,
 },

})