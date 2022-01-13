import React from 'react';
import {Text,
     ImageBackground,
     ScrollView,
     Dimensions,
     View,
     Button,
      StyleSheet,
      Pressable,
      TouchableOpacity} from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
//import CheckBox from 'react-native-check-box';
import Ionicons from 'react-native-vector-icons/Ionicons'
import FontAwesome from 'react-native-vector-icons/FontAwesome'


const signUp =({navigation})=>{
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
<View >
      <Text style={{margin: 10, color:'#0b1674', fontWeight:'bold'}}>First Name</Text>
      <TextInput
        style={{height: 50, width: '100%', borderColor: '#0b1674', borderWidth: 3, borderRadius:20}}
        inlineImageLeft="username"
        inlineImagePadding={2}

      />
      

          <Text style={{margin: 10,color:'#0b1674', fontWeight:'bold' }}>Last Name</Text>



      <TextInput
        style={{height: 50, width: '100%', borderColor: '#0b1674', borderWidth: 3, borderRadius:20}}
        inlineImageLeft="username"
        inlineImagePadding={2}
      />

<Text style={{margin: 10,color:'#0b1674', fontWeight:'bold' }}>Email Address</Text>



<TextInput
  style={{height: 50, width: '100%', borderColor: '#0b1674', borderWidth: 3, borderRadius:20}}
  inlineImageLeft="username"
  inlineImagePadding={2}
/>

<Text style={{margin: 10,color:'#0b1674', fontWeight:'bold' }}>Password </Text>



<TextInput
  style={{height: 50, width: '100%', borderColor: '#0b1674', borderWidth: 3, borderRadius:20}}
  inlineImageLeft="username"
  inlineImagePadding={2}
/>


<Text style={{margin: 10,color:'#0b1674', fontWeight:'bold' }}>Confirm Password</Text>



<TextInput
  style={{height: 50, width: '100%', borderColor: '#0b1674', borderWidth: 3, borderRadius:20}}
  inlineImageLeft="username"
  inlineImagePadding={2}
/>


<TouchableOpacity
                 style={{ margin:10, justifyContent:'flex-end'}}
                 onPress={()=>navigation.navigate('forgot')}>
                <Text style={{padding:5,color:'#0b1674',fontWeight:'bold', textAlign:'right'}}>
                I Have Read The T'Cs?
                </Text>
</TouchableOpacity>

 
<TouchableOpacity
                 style={{margin:10,backgroundColor:'#0b1674',width:'95%',height:'10%',borderRadius:30,
                alignItems:'center'}}
                 onPress={()=>navigation.navigate('signIn')}>
                <Text style={{padding:5,color:'#fff',fontSize: 24}}>
                    Sign Up
                </Text>
</TouchableOpacity>


    </View>
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