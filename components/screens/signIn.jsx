import React, { useState, useEffect } from "react";
import {Text,  Pressable,
    TouchableOpacity,
    ImageBackground,
    ScrollView, Dimensions,
    View,Button, StyleSheet,Alert, ToastAndroid} from 'react-native';
import { useAuth } from "../contexts/UserAuthContext";
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'

import { auth } from "../backend/firebase";
import { TextInput } from 'react-native-gesture-handler';
import { Formik } from 'formik'
import * as yup from 'yup'

import Ionicons from 'react-native-vector-icons/Ionicons'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
//import TextInput from 'react-native-textinput-with-icons'
import Icon from 'react-native-vector-icons/MaterialIcons';

const signIn =({navigation})=>{
    const [isSelected,setSelection]=useState(false)
    const [isPasswordShow,setPasswordShow]=useState(false)
    const ReviewSchem =yup.object({
        email:yup.string().required().min(6),
        password:yup.string().required().min(6),
    })


    const setToastMsg =msg=>{
        ToastAndroid.showWithGravity(msg,ToastAndroid.SHORT,ToastAndroid.CENTER)
    }
    
    const {login}=useAuth()
    const Submit = async (data) => {
        console.log('run <<<<<<')
        try {
          const { email, password } = data
          const user = await login(
              email.trim().toLowerCase(), password
            ).then(res=>{
                if(res.user){
                    navigation.navigate('MainContainer')
                }
            })

        
          
    
          setToastMsg('succesfully logged in')
        }
        catch (error) {
    
          Alert.alert(
            error.name,
            error.message
          )
        }
    }

    return(
        <>
<ScrollView style={{flex:1, backgroundColor:'#ffffff'}} showsVerticalScrollIndicator={false}>
<ImageBackground source={require('./images/background1.png')}
style={{height:Dimensions.get('window').height / 2.5}}>
</ImageBackground>

{/*Bottom View*/}

<View style={styles.bottomView}>

<View style={styles.innerBottom}>
<Text style= {{fontWeight:'bold', color:'#0b1674', fontSize:30 }}>
        Sign In


</Text>
<Formik 
        initialValues={{email:'',password:''}}
        validationSchema={ReviewSchem}
        onSubmit={(values,action)=>{
            action.resetForm()
            Submit(values)
        }}
        >
{(props)=>(
        
        <KeyboardAwareScrollView
         >
<View >
<Text style={{margin: 10, color:'#0b1674', fontWeight:'bold'}}>Email</Text>

    <View style={{flexDirection:'row', alignItems:'center'}}>
    {/* <View >
<Icon name="search" size={30} style={{marginLeft:20}}/>
<TextInput placeholder="Search" 
style={{paddingLeft:10}} 
/>
</View> */}

       <TextInput
        style={{height: 50, width: '100%', borderColor: '#0b1674', borderWidth: 3, borderRadius:20, flex:1, paddingHorizontal:20}}
        onChangeText={props.handleChange('email')}
        value={props.values.email}
        onBlur={props.handleBlur('email')}
        maxLength={30}
        />

{/* <Icon name="keyboard-arrow-left" size={38} color='#0b1674' style={{marginRight:80}} onPress={navigation.goBack}/>       */}

    </View>
    <Text style={{margin: 10,color:'#0b1674', fontWeight:'bold' }}>Password</Text>
        <TextInput
        style={{height: 50, width: '100%', paddingHorizontal:20, borderColor: '#0b1674', borderWidth: 3, borderRadius:20}}
        secureTextEntry={isPasswordShow? false :true}

        onChangeText={props.handleChange('password')}
        value={props.values.password}
        onBlur={props.handleBlur('password')}
        maxLength={30}
        />

 
<TouchableOpacity
                 style={{ margin:10, justifyContent:'flex-end'}}
                 onPress={()=>navigation.navigate('forgot')}>
                <Text style={{padding:5,color:'#0b1674',fontWeight:'bold', textAlign:'right'}}>
                Forgot Your Password?
                </Text>
</TouchableOpacity>

 
                <TouchableOpacity
                 style={{margin:10,backgroundColor:'#0b1674',width:'95%',height:60,borderRadius:30,
                alignItems:'center'}}
                onPress={props.handleSubmit}>
                <Text style={{padding:10,color:'#fff',fontSize: 24}}>
                    Sign In
                </Text>
                </TouchableOpacity>

<TouchableOpacity
                 style={{ margin:10}}
                 onPress={()=>navigation.navigate('signUp')}>
                <Text style={{padding:5,color:'#0b1674',fontWeight:'bold',  justifyContent:'flex-end', flexDirection:'row-reverse'}}>
                Don't Have An Account? Sign Up
                </Text>
</TouchableOpacity>

    </View>
    </KeyboardAwareScrollView>
            )}
    </Formik>
    </View>
</View>
</ScrollView>
</>
    )
}

export default signIn

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
    borderWidth:3,
    borderColor:'#0b1674',
    top:50,
    left:40,
},

 buttonText: {
    fontSize: 20,
    color: '#ff6e1a',
    fontWeight: 'bold',
top:8,
left:160,
 },

 buttonb:{
    width:width / 1.3,
    height:height / 18.3,

    borderRadius:10,
    alignItems:'center',
    backgroundColor: '#fff',
    borderWidth:3,
    borderColor:'#fff',
    top:50,
    left:40,
},

 buttonTextb: {
    fontSize: 15,
    color: '#ff6e1a',
    fontWeight: 'bold',
top:8,
left:10,
 },

 searchSection: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
},
searchIcon: {
    padding: 20,
},
input: {
    flex: 1,
    paddingTop: 10,
    paddingRight: 10,
    paddingBottom: 10,
    paddingLeft: 0,
    backgroundColor: '#fff',
    color: '#424242',
    borderWidth: 3,
      width:width / 1.2,
      height:height / 18.2,
      borderRadius:30
},

})