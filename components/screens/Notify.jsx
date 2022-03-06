import React from 'react'
import {Text, View, ImageBackground, StyleSheet,     TouchableOpacity
} from 'react-native'
import COLORS from '../consts/colors';
import Icon from 'react-native-vector-icons/MaterialIcons'


const Notify =({navigation, route})=>{
    const item = route.params;
    console.log(item);
    return(

        <View style={{flex:1, paddingBottom:20}}>

<ImageBackground style={style.headerImage}
            source={{uri:item?.images}}> 
            
            <View style={style.header}>
            <Icon name="arrow-back-ios" size={28}
             color={COLORS.white} onPress={navigation.goBack}
            />
            
          

            </View>
            </ImageBackground>
            <Text style={{fontWeight:'bold', color:COLORS.secondary, fontSize:18, paddingHorizontal:20, marginTop:30}}>Good Day,</Text>

<Text style={{fontWeight:'bold', color:COLORS.secondary, fontSize:18, paddingHorizontal:20, marginTop:30}}>You have succesfully paid for your stay at {item.name} from {item.CheckIn} to {item.CheckOut}.We are glad to have you as our guests.</Text>
<Text style={{fontWeight:'bold', color:COLORS.secondary, fontSize:18, paddingHorizontal:20, marginTop:30}}>You have paid R{item.Rp} for {item.room1} nights for  {item.adultPlus} guest. We are glad to have you as our guests.</Text>

<Text style={{fontWeight:'bold', color:COLORS.secondary, fontSize:18, paddingHorizontal:20, marginTop:30}}>Regards,</Text>
<Text style={{fontWeight:'bold', color:COLORS.secondary, fontSize:18, paddingHorizontal:20, marginTop:10}}>The Admin Of {item.name}</Text>



            <TouchableOpacity
                 style={{backgroundColor:COLORS.secondary,width:'50%',height:60,borderRadius:10, marginLeft:100,
                alignItems:'center', marginTop:20}}
                onPress={navigation.goBack}>
                
                <Text style={{padding:5,color:'#fff',fontSize: 18, marginTop: 10, marginRight:4,}}>
                    Cancel Booking
                </Text>
                
            </TouchableOpacity>
        </View>

    )
}
const style = StyleSheet.create ({
    btn:{
height:55,
justifyContent:'center',
alignItems:'center',
marginTop:40,
backgroundColor: COLORS.secondary
    },
    headerImage:{
        height:320,
        borderBottomRightRadius:40,
        borderBottomLeftRadius:40,
        overflow:'hidden',
    },

    header:{
        marginTop:60,
        flexDirection:'row',
        alignItems:'center',
        marginHorizontal:20,
        justifyContent:"space-between", 
    },
})

export default Notify