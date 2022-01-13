import React from 'react';
import {Text, ImageBackground, View,Pressable,Button, StyleSheet,TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons'


const first =({navigation})=>{
    return(
        <>
    <ImageBackground source={require('./images/signIn.png')}
    style={styles.container}
    >
    {/* <View style={styles.inner}>
    <Button  title='Get Started' color='#ff6e1a'/>
    </View>   */}
<Text style={{color:'#ffffff',fontSize: 34, top:200, right:40}}>
Enjoy The {"\n"}Beauty Of {"\n"}Hotels 
</Text>

<Text style={{color:'#ffffff',fontSize: 25, top:210, fontWeight:'normal'}}>
Rest Yourself By {"\n"}Booking Yourself To {"\n"}Your Dream Hotel
</Text>

<TouchableOpacity style={styles.button} onPress={() => navigation.navigate('signIn') }>

    
    
    </TouchableOpacity>

    <Pressable >
  <Text style={styles.buttonText}>Get Started</Text>
</Pressable>

    </ImageBackground>
               
        </>
    )
}

export default first

const styles = StyleSheet.create({
    container: {
        flex:1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'gray',
        opacity: 0.7,
    },

    inner: {
        width:'193px',
        height:'80px',
        top:'350px',

    },

    button:{
        width:'65%',
        height:20,
        paddingVertical: 30,
        borderRadius:10,
        alignItems:'center',
        top:240,
        backgroundColor: '#ff6e1a',
    },
    buttonText: {
        fontSize: 26,
        color: '#ffffff',
        top:190,

      },
})