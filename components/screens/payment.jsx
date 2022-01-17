import React,{useState} from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Image} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import COLORS from '../consts/colors';
import room from '../consts/rooms';
import { FlatList,
    ScrollView,
    TextInput, 
    } from 'react-native-gesture-handler';
// import {Picker} from '@react-native-picker/picker';
import DatePicker from 'react-native-datepicker';
import { Row } from 'native-base';


const Payment=({navigation}) =>{
    
    const [CheckIn,setCheckIn] = useState('2022-02-02');


    return(

        <View style={{ flex:1}}>

        <View style={styles.header} >
        <Icon name="keyboard-arrow-left" size={38} color='#fff'
        style={{justifyContent:'flex-start',marginRight:'85%', marginTop:'5%'}} onPress={navigation.goBack}/>      

       
            <Text style={{ fontSize:26, fontWeight:'bold', color:COLORS.white, marginTop:30}}> Warloff Hotel</Text>
            {/* <Text style={{ fontSize:26, fontWeight:'bold', color:COLORS.white}}> {room.name}</Text> */}

        </View>

        <View>
        <Text style={{ fontSize:26, 
            fontWeight:'bold', 
            color:COLORS.secondary, textAlign:'center', paddingTop:10}}> Confirmation {room.name}</Text>
 
        </View>

        <View style={{fontWeight:'bold',
                 flexDirection:'row',
                 paddingHorizontal:20,
                 paddingTop:20,
                 alignContent:'space-between', 
                 justifyContent:'space-between'}}>
                    <View>
                    <Text style={{fontSize:16, fontWeight:'bold', color:COLORS.secondary, marginBottom:10}}>Arrival</Text>

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
                           fontWeight:'bold', color:COLORS.secondary, marginBottom:10}}>Departure</Text>
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
                    fontWeight:'bold', color:COLORS.secondary, marginBottom:10}}>No. of Kids</Text>
               
                </View>

                    <View style={{flexDirection:'row', justifyContent:'space-between', paddingHorizontal:20, paddingBottom:10}}>
                    <TouchableOpacity
                 style={{backgroundColor:'#ff6e1a',width:'25%',height:'145%',borderRadius:10,
                alignItems:'center'}}
                 onPress={()=>navigation.navigate('signIn')}>
                <Text style={{padding:5,color:'#fff',fontSize: 16}}>
AAAAA                </Text>
            </TouchableOpacity>
            <TouchableOpacity
                 style={{backgroundColor:'#ff6e1a',width:'25%',height:'145%',borderRadius:10,
                alignItems:'center'}}
                 onPress={()=>navigation.navigate('signIn')}>
                <Text style={{padding:5,color:'#fff',fontSize: 16}}>
BBBBB                </Text>
            </TouchableOpacity>

                    </View>
                        
                <View style={{flexDirection:'row', justifyContent:'space-between', alignContent:'space-between', paddingHorizontal:20, paddingTop:20}}>
                <Text style={{fontSize:16,
                           fontWeight:'bold', color:COLORS.primary, marginBottom:10}}>Total R1500</Text>
               

                <TouchableOpacity
                 style={{backgroundColor:'#ff6e1a',width:'45%',height:'155%',borderRadius:10,
                alignItems:'center'}}
                 onPress={()=>navigation.navigate('signIn')}>
                <Text style={{padding:5,color:'#fff',fontSize: 16}}>
                    Save Booking
                </Text>
            </TouchableOpacity>
                </View>

            <View style={{paddingTop:20 }}>
                <Text>Please use Reference Number for eft</Text>
                <Text>payment or Click Pay Now.</Text>
                <Text>Ref Number :</Text>
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

export default Payment