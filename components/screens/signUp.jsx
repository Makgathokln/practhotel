import React, { useState, useEffect } from "react";
import {Text,
     ImageBackground,
     ScrollView,
     Dimensions,
     View,
     Button,
      StyleSheet,
      Pressable,
      TouchableOpacity} from 'react-native';
import { useAuth } from "../contexts/UserAuthContext";
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'

import { auth } from "../backend/firebase";
import { Formik } from 'formik';
import * as yup from 'yup';
import {db} from '../backend/firebase'

import { TextInput } from 'react-native-gesture-handler';
//import CheckBox from 'react-native-check-box';
import Ionicons from 'react-native-vector-icons/Ionicons'
import FontAwesome from 'react-native-vector-icons/FontAwesome'


const signUp =({navigation})=>{

  const [isPasswordShow,setPasswordShow]=useState(false)
    const ReviewSchem=yup.object({
        name:yup.string().required().min(2),
        phonenumber:yup.string().required().min(10).max(10),
        email:yup.string().required().min(6),
        password:yup.string().required().min(6),
        confirmpassword:yup.string().required().min(6).oneOf([yup.ref('password'),null],'password does not match')
    })
    const {signup}=useAuth()
    const addUser= async (data)=>{
        try{
          const {uid,email,password,name,phonenumber} =data
        // const user = await auth
        // .createUserWithEmailAndPassword(
        //   email.trim().toLowerCase(),password
        // )
        await signup(email.trim().toLowerCase(),password)
        .then(res =>{
          db.ref(`/user`).child(res.user.uid).set({
            name:name,
            email:email,
            Phonenumber:phonenumber,
            uid:res.user.uid
          })
          })
            }
        catch(error){
          if(error.code === 'auth/email-already-in-use'){
            Alert.alert(
              'That email adress is already inuse'
            )
          }
          if(error.code === 'auth/invalid-email'){
            Alert.alert(
              'That email address is invalid'
            )
          }
          else{
            Alert.alert(error.code)
          }
          
        }
        
      }
  

    return(
        <>
<ScrollView style={{flex:1, backgroundColor:'#ffffff'}} showsVerticalScrollIndicator={false}>
<ImageBackground source={require('./images/background1.png')}
style={{height:Dimensions.get('window').height / 3.5}}>
</ImageBackground>

{/*Bottom View*/}

<View style={styles.bottomView}>

<View style={styles.innerBottom}>
<Text style= {{fontWeight:'bold', color:'#0b1674', fontSize:30 }}>
        Sign Up


</Text>

<Formik
        initialValues={{name:'',phonenumber:'',email:'',password:'',confirmpassword:''}}
        validationSchema={ReviewSchem}
        onSubmit={(values,action)=>{
            action.resetForm()
         addUser(values)
        }}
       >
 {(props)=>(
         <KeyboardAwareScrollView
             style={styles.innerContainer}>
<View >
      <Text style={{margin: 10, color:'#0b1674', fontWeight:'bold'}}>First Name</Text>
      <TextInput
        style={{height: 50, width: '100%', borderColor: '#0b1674', borderWidth: 3, borderRadius:20}}
        onChangeText={props.handleChange('firstname')}
             value={props.values.firstname}
             onBlur={props.handleBlur('firstname')}

      />
      

          <Text style={{margin: 10,color:'#0b1674', fontWeight:'bold' }}>Last Name</Text>



      <TextInput
        style={{height: 50, width: '100%', borderColor: '#0b1674', borderWidth: 3, borderRadius:20}}
        onChangeText={props.handleChange('lastname')}
             value={props.values.lastname}
             onBlur={props.handleBlur('lastname')}
      />

<Text style={{margin: 10,color:'#0b1674', fontWeight:'bold' }}>Email Address</Text>



<TextInput
  style={{height: 50, width: '100%', borderColor: '#0b1674', borderWidth: 3, borderRadius:20}}
  keyboardType='email-address'
  onChangeText={props.handleChange('email')}
  value={props.values.email}
  onBlur={props.handleBlur('email')}
/>

<Text style={{margin: 10,color:'#0b1674', fontWeight:'bold' }}>Password </Text>



<TextInput
  style={{height: 50, width: '100%', borderColor: '#0b1674', borderWidth: 3, borderRadius:20}}
  secureTextEntry={isPasswordShow? false :true}
  onChangeText={props.handleChange('password')}
  value={props.values.password}
  onBlur={props.handleBlur('password')}
/>


<Text style={{margin: 10,color:'#0b1674', fontWeight:'bold' }}>Confirm Password</Text>



<TextInput
  style={{height: 50, width: '100%', borderColor: '#0b1674', borderWidth: 3, borderRadius:20}}
  secureTextEntry={isPasswordShow? false :true}
  onChangeText={props.handleChange('confirmpassword')}
  value={props.values.confirmpassword}
  onBlur={props.handleBlur('confirmpassword')}
/>


<TouchableOpacity style={{ margin:10, justifyContent:'flex-end'}}
                 onPress={()=>navigation.navigate('forgot')}>

  <Text style={{padding:5,color:'#0b1674',fontWeight:'bold', textAlign:'right'}}>
                I Have Read The T'Cs?
  </Text>
</TouchableOpacity>

 
<TouchableOpacity
                 style={{margin:10,backgroundColor:'#0b1674',width:'95%',height:'10%',borderRadius:30,
                alignItems:'center'}}
                  onPress={props.handleSubmit}>
                <Text style={{padding:5,color:'#fff',fontSize: 24}}>
                    Sign Up
                </Text>
</TouchableOpacity>


    </View>

    </KeyboardAwareScrollView>
            )}</Formik>
    </View>
</View>


</ScrollView>
</>
    )
}

export default signUp

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