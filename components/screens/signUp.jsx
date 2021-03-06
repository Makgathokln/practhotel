import React,{useState} from 'react'
import { SafeAreaView, StyleSheet,
   Text,
   View,
   TextInput,
   TouchableOpacity,
   ImageBackground,
   Dimensions,
   ScrollView, ToastAndroid} from 'react-native'
//import { COLORS } from '../styles/Colors'
//import Flatbutton from '../styles/button'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
//import { FONTS } from '../styles/Font'
import { Formik } from 'formik'
// import { auth } from './firebase'
import {useAuth } from '../contexts/UserAuthContext'
import {db} from '../backend/firebase';
import * as yup from 'yup'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'

const signUp = ({navigation}) => {
    const [isPasswordShow,setPasswordShow]=useState(false)
    
    const ReviewSchem=yup.object({
        name:yup.string().required().min(3).max(7),
        phonenumber:yup.string().required().min(10).max(10),
        email:yup.string().required().min(5).max(30),
        password:yup.string().required().min(6).max(10),
        confirmpassword:yup.string().required().max(6).oneOf([yup.ref('password'),null],'password does not match')
    })

    const setToastMsg =msg=>{
      ToastAndroid.showWithGravity(msg,ToastAndroid.SHORT,ToastAndroid.CENTER)
  }

    const {signup}=useAuth()

    const addUser = async (data)=>{
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
            uid:res.user.uid,
            
          }
          ).then((res)=>{
            
            alert(" Registered succesfully" +'\n'+"congrats")
            navigation.navigate('signIn')

          })

          .catch((err) =>{
            alert("something went wrong")
          })
          
          })
        
   
  
        }
        catch(error){
          if(error.code === 'auth/email-already-in-use'){
            alert(
              'That email adress is already in use'
            )
          }
          if(error.code === 'auth/invalid-email'){
            alert(
              'That email address is invalid'
            )
          }
          else{
            alert(error.code)
          }
          navigation.navigate('signUp')

        }
        
      }
  
    return (
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
        

        <Text style={{margin: 10,color:'#0b1674', fontWeight:'bold' }}>Name</Text>

            <TextInput
            style={{height: 50, width: '100%', paddingHorizontal:20, borderColor: '#0b1674', borderWidth: 3, borderRadius:20}}
  
             onChangeText={props.handleChange('name')}
             value={props.values.name}
             onBlur={props.handleBlur('name')}
             maxLength={7}
             />
                <Text style={{color:'red', fontWeight:'bold'}}>{props.touched.name && props.errors.name}</Text>


        <Text style={{margin: 10,color:'#0b1674', fontWeight:'bold' }}>Contact Number</Text>

            <TextInput
          style={{height: 50, width: '100%', borderColor: '#0b1674',paddingHorizontal:20, borderWidth: 3, borderRadius:20}}
            keyboardType='numeric'
             onChangeText={props.handleChange('phonenumber')}
             value={props.values.phonenumber}
             onBlur={props.handleBlur('phonenumber')}
             maxLength={10}

             />
        
        <Text style={{color:'red', fontWeight:'bold'}}>{props.touched.phonenumber && props.errors.phonenumber}</Text>


        <Text style={{margin: 10,color:'#0b1674', fontWeight:'bold' }}>Email Address</Text>

            <TextInput
            type="email"
            style={{height: 50, width: '100%', borderColor: '#0b1674',paddingHorizontal:20, borderWidth: 3, borderRadius:20}}
             keyboardType='email-address'
             onChangeText={props.handleChange('email')}
             value={props.values.email}
             onBlur={props.handleBlur('email')}
             maxLength={30}

             />
                <Text style={{color:'red',fontWeight:'bold'}}>{props.touched.email && props.errors.email}</Text>

        
        <Text style={{margin: 10,color:'#0b1674', fontWeight:'bold' }}>Password</Text>

            <TextInput
              style={{height: 50, width: '100%',paddingHorizontal:20, borderColor: '#0b1674', borderWidth: 3, borderRadius:20}}

            secureTextEntry={isPasswordShow? false :true}
            
             onChangeText={props.handleChange('password')}
             value={props.values.password}
             onBlur={props.handleBlur('password')}
             maxLength={7}

             />

<Text style={{color:'red', fontWeight:'bold'}}>{props.touched.password && props.errors.password}</Text>

         {/* <Icon name={isPasswordShow?'eye-off':"eye"}
            style={{color:'black',textAlign:'center',
        fontSize:18,}}
           onPress={()=>setPasswordShow(!isPasswordShow)} /> */}
        
        <Text style={{margin: 10,color:'#0b1674', fontWeight:'bold' }}> Confirm Password</Text>

            <TextInput
            secureTextEntry={isPasswordShow? false :true}
            style={{height: 50, width: '100%', paddingHorizontal:20, borderColor: '#0b1674', borderWidth: 3, borderRadius:20}}
             onChangeText={props.handleChange('confirmpassword')}
             value={props.values.confirmpassword}
             onBlur={props.handleBlur('confirmpassword')}
             maxLength={7}

             />

<Text style={{color:'red', fontWeight:'bold'}}>{props.touched.confirmpassword && props.errors.confirmpassword}</Text>

         {/* <Icon name={isPasswordShow?'eye-off':"eye"}
            style={{color:'black',textAlign:'center',
        fontSize:18,}}
           onPress={()=>setPasswordShow(!isPasswordShow)} /> */}
           
        {/* <Text style={{color:'red',marginTop:-15}}>{props.touched.confirmpassword && props.errors.confirmpassword}</Text> */}
        
        <View style={{marginTop:20,alignItems:'center',justifyContent:'center'}}>
        <TouchableOpacity
                 style={{margin:10,backgroundColor:'#0b1674',width:'95%',height:60,borderRadius:30,
                alignItems:'center'}}
                onPress={props.handleSubmit}>
                <Text style={{padding:10,color:'#fff',fontSize: 24}}>
                    Sign Up
                </Text>
                </TouchableOpacity>
                <TouchableOpacity
                 style={{ margin:10}}
                 onPress={()=>navigation.navigate('signIn')}>
                <Text style={{padding:5,color:'#0b1674',fontWeight:'bold',  justifyContent:'flex-end', flexDirection:'row-reverse'}}>
                Back to Sign In
                </Text>
</TouchableOpacity>
          
            {/* <Flatbutton text='REGISTER' onPress={props.handleSubmit}/> */}
            {/* <View style={styles.signupContainer}>
               <Text style={styles.accountText}>Already have account?</Text>
               <Text style={styles.signupText}
               onPress={()=>navigation.navigate('SignIn')}>Sign In</Text>
            </View> */}
            </View>
            </KeyboardAwareScrollView>
            )}</Formik>
        </View>
      </View>

</ScrollView>
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
innerContainer:{
  marginTop:20
},
 buttonText: {
    fontSize: 20,
    color: '#ff6e1a',
    fontWeight: 'bold',
top:5,
 },

})