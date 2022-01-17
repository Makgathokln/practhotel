import * as React from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Image} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import COLORS from '../consts/colors';
import room from '../consts/rooms';
import { FlatList,
    ScrollView,
    TextInput, 
    } from 'react-native-gesture-handler';
import {Picker} from '@react-native-picker/picker';


const Rooms=({navigation}) =>{
    
    const categories = ['All', 'Popular','Top Rated']
    const [selectedCategoryIndex, setSelectedCategoryIndex] = React.useState(0);
    // const [selectedPrice, setSelectedPrice] = useState();

const Card = ({room,index}) =>{
   return( 
    <View style={{
        flex:1,
        flexDirection:'row', justifyContent:'space-between',
        alignContent:'space-between', marginTop:20,
        borderColor: COLORS.primary,
        borderRadius:10,
        borderWidth: 3,
        width:'95%',
        height:'250%',
        padding:10,

}}> 

    <Image source={room.image} style={{width:'40%',height:'105%', borderRadius:10}}>
    </Image>

    <View style={{flex:1,
        flexDirection:'column', paddingHorizontal:15}}>
    
    <Text style={{fontWeight:'bold', color:COLORS.secondary, fontSize:24}}>{room.type}</Text>
    <View style={{flexDirection:'row', }}>
    <Icon name="airline-seat-flat" size={24} color={COLORS.primary} style={{marginRight:10}}/>
    <Text style={{fontWeight:'bold', color:COLORS.secondary, fontSize:16}}>{room.availability}</Text>

    </View>

    <View style={{flexDirection:'row', }}>
    <Icon name="money" size={24} color={COLORS.primary} style={{marginRight:10}}/>
    <Text style={{fontWeight:'bold', color:COLORS.secondary, fontSize:16}}>{room.price}</Text>

    </View>

    <View style={{flexDirection:'row',justifyContent:'space-between', alignContent:'space-between' }}>

    <TouchableOpacity onPress={() => navigation.navigate('Payment') }>
    <Text style={{fontWeight:'bold', color:COLORS.secondary, fontSize:16}}>Select</Text>
    <Icon name="add-circle" size={24} color={COLORS.primary} />

    </TouchableOpacity>
</View>
</View>
    </View> 
   )}

    return(

        <View style={{ flex:1}}>

        <View style={styles.header} >
        <Icon name="keyboard-arrow-left" size={38} color='#fff'
        style={{justifyContent:'flex-start',marginRight:'85%', marginTop:'5%'}} onPress={navigation.goBack}/>      

       
            <Text style={{ fontSize:26, fontWeight:'bold', color:COLORS.white, marginTop:30}}> Select Room Type</Text>
            {/* <Text style={{ fontSize:26, fontWeight:'bold', color:COLORS.white}}> {room.name}</Text> */}

        </View>

        <View>
        <Text style={{ fontSize:26, 
            fontWeight:'bold', 
            color:COLORS.secondary}}> Warloff Hotel {room.name}</Text>
 
        </View>

        <View style={{flexDirection:'row', 
        justifyContent:'flex-end', 
        alignContent:'flex-end', }}>
           

            <Text style={{color:COLORS.gray, fontWeight:'bold', marginTop:'5%'}}>Sort By</Text>
           
        </View>
        
      


        <View>
            <FlatList 
            data={room}
            contentContainerStyle={{paddingVertical:20,paddingLeft:20}}
            showsHorizontalScrollIndicator={false}
            renderItem={({item,index}) => <Card room={item} index={index}/>}
            />
        </View>

        
        </View>
    )
}

const styles = StyleSheet.create({
    header: {
    width:'100%',
    height:'30%',
    paddingVertical: 30,
    borderRadius:10,
    alignItems:'center',
    backgroundColor: '#0b1674',
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    },


    inputText:{
        fontSize:18,
        fontWeight:'bold',
        color: COLORS.secondary,
        flex:1,

    },

    

    categoryListText:{
        fontSize:17,
        fontWeight:'bold',
    },
})

export default Rooms