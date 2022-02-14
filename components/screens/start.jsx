import React from 'react';
import {Text, Dimensions, ImageBackground,StyleSheet, View,Pressable,Button,TouchableOpacity} from 'react-native';

const { height, width } = Dimensions.get('window');

const start =({navigation})=>{
    return(
        <View style={{flex:1, }}>
            <ImageBackground source={require('./images/signIn.png')} style={{flex:1,  backgroundColor: '#595959',
        opacity: 0.8}}>


            <View style={{justifyContent: 'center',  height: height + 220, backgroundColor:'black'}}>

                <Text style={{justifyContent: 'center',paddingHorizontal:20, alignItems: 'center', fontSize: 40, color: '#fff'}}>
                Enjoy The Beauty Of Hotels          
                </Text>

                <Text style={{justifyContent: 'center',paddingHorizontal:20, alignItems: 'center', 
                textTransform: 'capitalize',fontSize: 20, color: '#fff'}}>
                Rest Yourself By Booking Yourself To Your Dream Hotel  
                </Text>

                
                <TouchableOpacity
                 style={{marginBottom: -150,marginTop:30,
                    backgroundColor:'#ff6e1a',width:'65%',
                    height:'5%',borderRadius:10, justifyContent: 'center',
                alignItems:'center',  marginLeft:60}}
                 onPress={()=>navigation.navigate('signIn')}>
                <Text style={{padding:5,color:'#fff',fontSize: 24}}>
                    Get Started
                </Text>
            </TouchableOpacity>
            </View>
            
            </ImageBackground>
        </View>
    )
}

export default start

const styles = StyleSheet.create({
    container: {
        flex:1,
        
        },

    inner: {
        flex:1,

        alignItems: 'center',
        justifyContent: 'center',  
        padding:'2%',

        },

    text:{
            fontSize:34,
            fontWeight:'normal',
            color:'#fff',

        },

        text2:{
            fontSize:25,
            fontWeight:'normal',
            color:'#fff',
            marginLeft:'20%',

        },

        button:{
        width:'65%',
        height:20,
        paddingVertical: 30,
        borderRadius:10,
        alignItems:'center',
        backgroundColor: '#ff6e1a',

        },
        textbutton:{
            fontSize: 26,
            color: '#ffffff',
           
        }

    })