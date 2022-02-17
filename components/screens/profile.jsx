import React,{useState} from 'react';
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

import * as yup from 'yup';
import { Formik } from 'formik';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import * as ImagePicker from 'expo-image-picker';

const profile =({navigation})=>{
    const [selectedImage, setSelectedImage] = useState(null);
    const [isPasswordShow,setPasswordShow]=useState(false)
    const ReviewSchem=yup.object({
        name:yup.string().required().min(2),
        phonenumber:yup.string().required().min(10).max(10),
        email:yup.string().required().min(6),
        password:yup.string().required().min(6),
        confirmpassword:yup.string().required().min(6).oneOf([yup.ref('password'),null],'password does not match')
    })
    let openImagePickerAsync = async () => {
        let permissionResult = await ImagePicker.requestMediaLibraryPermissionsAsync();
    
        if (permissionResult.granted === false) {
          alert("Permission to access camera roll is required!");
          return;
        }
    
        let pickerResult = await ImagePicker.launchImageLibraryAsync();
        if (pickerResult.cancelled === true) {
            return;
          }
      
          setSelectedImage({ localUri: pickerResult.uri });
      }
    return(
        <>


<View style={{flex:1, backgroundColor:'#fff',
       }}>

<View style={{paddingTop:40, 
    flexDirection:'row',paddingHorizontal:20}}>
          <Icon name="arrow-back-ios" size={30} style={{color:COLORS.secondary}}
          onPress={navigation.goBack} /> 
<Text style={{fontSize:18,color:COLORS.primary, fontWeight:'bold', left:70, top:30}}>Update Profile</Text>

</View>

<View style={{marginLeft:120}}>
                {
                   selectedImage?(<Image
              source={{ uri: selectedImage.localUri }}
              style={{height:120,width:120,borderRadius:60,}}
            />
                   ):(
                    <Image source={require('./images/profile.jpeg')}
                    style={{height:120,width:120,borderRadius:60,top:30}}/>
                   ) 
                }
            {/* <Image source={{ uri: 'https://image.shutterstock.com/image-vector/male-avatar-profile-picture-use-600w-193292033.jpg'}}
                style={{height:120,width:120,borderRadius:60,}}/> */}
                <TouchableOpacity style={{marginLeft:90,marginTop:-20}}
               mode="contained" onPress={openImagePickerAsync}>
                <FontAwesome name='camera' size={29} color='grey'/>
                </TouchableOpacity>
</View>

<View>
<Formik
        initialValues={{name:'',phonenumber:'',email:'',password:'',confirmpassword:''}}
        validationSchema={ReviewSchem}
        >
{(props)=>(
         <KeyboardAwareScrollView
           >
               <View>

                   
               </View>
               
               
               </KeyboardAwareScrollView>
            )}</Formik>
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