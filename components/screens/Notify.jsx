import React from 'react'
import {Text, View} from 'react-native'
import COLORS from '../consts/colors';


const Notify =({navigation, route})=>{
    const item = route.params;
    console.log(item);
    return(
        <View style={{flex:1, padding:20}}>
<Text style={{fontWeight:'bold', color:COLORS.gray, fontSize:12}}>You have succesfully paid for your stay at {item.name} from {item.CheckIn} to {item.CheckOut}.We are glad to have you as our guests.</Text>
<Text style={{fontWeight:'bold', color:COLORS.gray, fontSize:12}}>You have paid R{item.Rp} for two nights for  {item.adultPlus} guest. We are glad to have you as our guests.</Text>

            <Text>Notify{item.name}</Text>
        </View>

    )
}

export default Notify