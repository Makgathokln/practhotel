import React,{useState} from 'react';
import {View, Text, StyleSheet, TouchableOpacity,
    Pressable, Image} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import COLORS from '../consts/colors';
import room from '../consts/rooms';
import { FlatList,
    ScrollView,
    TextInput, 
    } from 'react-native-gesture-handler';
// import {Picker} from '@react-native-picker/picker';
import DatePicker from 'react-native-datepicker';
import Feather from 'react-native-vector-icons/Feather';
import SelectDropdown from 'react-native-select-dropdown'
import { Row } from 'native-base';


const Payment=({navigation}) =>{
    
    const [CheckIn,setCheckIn] = useState('2022-02-02');
    const [adultPlus,setAdultPlus]=useState(0);
    const [childPlus,setChildPlus]=useState(0);
    const roomtype = ["Executive", "Standard", "Junior"]

    return(

        <ScrollView style={{ flex:1}}>

        <View style={styles.header} >
        <Icon name="keyboard-arrow-left" size={38} color='#fff'
        style={{justifyContent:'flex-start',marginRight:'85%', marginTop:'5%'}} onPress={navigation.goBack}/>      

       
            <Text style={{ fontSize:26, fontWeight:'bold', 
            color:COLORS.white, marginTop:30}}> Warloff Hotel</Text>
            {/* <Text style={{ fontSize:26, fontWeight:'bold', color:COLORS.white}}> {room.name}</Text> */}

        </View>

        <View>
        <Text style={{ fontSize:26, 
            fontWeight:'bold', 
            color:COLORS.secondary, 
            textAlign:'center', paddingTop:10}}> 
            Confirmation {room.name}</Text>
 
        </View>

        <View style={{flexDirection:'row', justifyContent:'space-between', alignContent:'space-between', paddingHorizontal:20, paddingTop:10}}>
                <Text style={{fontSize:16,
                           fontWeight:'bold', color:COLORS.secondary, marginTop:10}}>Room Type(s)</Text>
                          
        <SelectDropdown
	        data={roomtype}
            containerStyle= {
                styles. dropdownStyle }
	        onSelect={(selectedItem, index) => {
		    console.log(selectedItem, index)
	}}
	buttonTextAfterSelection={(selectedItem, index) => {
		// text represented after item is selected
		// if data array is an array of objects then return selectedItem.property to render after item is selected
		return selectedItem
	}}
	rowTextForSelection={(item, index) => {
		// text represented for each item in dropdown
		// if data array is an array of objects then return item.property to represent item in dropdown
		return item
	}}
/>   
                </View>

                <View style={{fontWeight:'bold',
                 flexDirection:'row',
                 paddingHorizontal:20,
                 alignContent:'space-between', 
                 justifyContent:'space-between'}}>
                    <View>
                    <Text style={{fontSize:16, fontWeight:'bold', color:COLORS.secondary, marginBottom:10}}>Check In</Text>

                    <DatePicker
        style={{width: 150,
         }}
        date={'2022-02-02'}
        mode="date"
        placeholder="select date"
        format="YYYY-MM-DD"
        minDate="2022-05-01"
        maxDate="2022-06-01"
        confirmBtnText="Confirm"
        cancelBtnText="Cancel"
        customStyles={{
          dateIcon: {
            position: 'absolute',
            left: 0,
            top: 4,
            marginLeft: 0,
            
          },
          dateInput: {
            marginLeft: 36
          }
          // ... You can check the source to find the other keys.
        }}
        onDateChange={(date) => {this.setState({date: date})}}
      />

                    </View>
                        
                        <View>
                        <Text style={{fontSize:16,
                           fontWeight:'bold', color:COLORS.secondary, marginBottom:10}}>Check Out</Text>
                        <DatePicker
        style={{width: 150}}
        date={'2022-02-02'}
        mode="date"
        placeholder="select date"
        format="YYYY-MM-DD"
        minDate="2022-05-01"
        maxDate="2022-06-01"
        confirmBtnText="Confirm"
        cancelBtnText="Cancel"
        customStyles={{
          dateIcon: {
            position: 'absolute',
            left: 0,
            top: 4,
            marginLeft: 0
          },
          dateInput: {
            marginLeft: 36
          }
          // ... You can check the source to find the other keys.
        }}
        onDateChange={(date) => {this.setState({date: date})}}
      />
                        </View>

               
                </View>
        

        
      
                <View style={{flexDirection:'row', justifyContent:'space-between', alignContent:'space-between', paddingHorizontal:20, paddingTop:10}}>
                <Text style={{fontSize:16,
                           fontWeight:'bold', color:COLORS.secondary, marginBottom:10}}>No. of Adults</Text>
                          
                <Text style={{fontSize:16,
                    fontWeight:'bold', color:COLORS.secondary, marginBottom:10, marginRight:60}}>No. of Kids</Text>
               
                </View>

                    <View style={{flexDirection:'row', justifyContent:'space-between', 
                    paddingHorizontal:20, paddingBottom:10}}>
                   
      <View style={{flexDirection:'row',
      alignContent:'space-between', 
      justifyContent:'space-between',
       borderRadius:10,
      padding:10, backgroundColor:'#EDEDED',
       elevation:2, width:'40%',
    }}>


<Pressable style={[styles.buttonAdding, {backgroundColor:'#fff',
       flexDirection:'row'}]}
       onPress={()=>setAdultPlus(Math.max(1,adultPlus+1))}
        >
    <Feather name="plus" color={COLORS.primary} size={22}/>

      </Pressable>
      <Text style={{fontSize:21}}>{adultPlus}</Text>
      <Pressable style={[styles.buttonAdding, {backgroundColor:'#fff',
       flexDirection:'row'}]}
       onPress={()=>setAdultPlus(Math.max(1,adultPlus-1))}
        >
    <Feather name="minus" color={COLORS.primary} size={22}/>

      </Pressable>

</View>

      <View style={{flexDirection:'row',
      alignContent:'space-between', 
      justifyContent:'space-between',
       borderRadius:10,
      padding:10, backgroundColor:'#EDEDED',
       elevation:2, width:'40%',
    }}>


<Pressable style={[styles.buttonAdding, {backgroundColor:'#fff',
       flexDirection:'row'}]}
       onPress={()=>setChildPlus(Math.max(1,childPlus+1))}
        >
    <Feather name="plus" color={COLORS.primary} size={22}/>

      </Pressable>
      <Text style={{fontSize:21}}>{childPlus}</Text>
      <Pressable style={[styles.buttonAdding, {backgroundColor:'#fff',
       flexDirection:'row'}]}
       onPress={()=>setChildPlus(Math.max(1,childPlus-1))}
        >
    <Feather name="minus" color={COLORS.primary} size={22}/>

      </Pressable>
</View>

                    </View>
                        
                <View style={{flexDirection:'row', justifyContent:'space-between', alignContent:'space-between', paddingHorizontal:20, paddingTop:20}}>
                <Text style={{fontSize:16,
                           fontWeight:'bold', color:COLORS.primary, marginTop:10}}>Total R7500</Text>
               

                <TouchableOpacity
                 style={{backgroundColor:COLORS.secondary,width:'45%',height:'155%',borderRadius:10,
                alignItems:'center'}}
                 onPress={()=>navigation.navigate('signIn')}>
                <Text style={{color:'#fff',fontSize: 16, marginTop:10, fontWeight:'bold'}}>
                    Save Booking
                </Text>
            </TouchableOpacity>
                </View>

            <View style={{paddingTop:40, paddingHorizontal:20,  }}>
                <Text style={{color:COLORS.secondary, fontWeight:'bold'}}>Please use Reference Number for EFT</Text>
                <Text style={{color:COLORS.secondary, fontWeight:'bold'}}>payment or Click Pay Now.</Text>
                <Text style={{color:COLORS.secondary, fontWeight:'bold'}}>Ref Number :</Text>
            </View>
       
            <View style={{flexDirection:'row', justifyContent:'space-between', alignContent:'space-between', paddingHorizontal:20, paddingTop:20}}>
                
                <TouchableOpacity
                 style={{backgroundColor:COLORS.secondary,width:'45%',height:'155%',borderRadius:10,
                alignItems:'center'}}
                 onPress={()=>navigation.navigate('signIn')}>
                <Text style={{color:'#fff',fontSize: 16, marginTop:10, fontWeight:'bold'}}>
                    Cancel
                </Text>
            </TouchableOpacity>

            <TouchableOpacity
                 style={{backgroundColor:COLORS.secondary,width:'45%',height:'155%',borderRadius:10,
                alignItems:'center'}}
                 onPress={()=>navigation.navigate('PaymentScreen')}>
                <Text style={{color:'#fff',fontSize: 16, marginTop:10, fontWeight:'bold'}}>
                    Pay Now
                </Text>
            </TouchableOpacity>
                </View>

        
        </ScrollView>
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

    dropdownStyle:{

        backgroundColor:'#ff6e1a',
        width:'45%',height:'155%',
        borderRadius:10,
       
    }
})

export default Payment