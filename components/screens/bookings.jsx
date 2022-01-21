import React,{useState} from 'react';
import {View, Text,StyleSheet, 
  ImageBackground, Pressable, 
     TouchableOpacity,
} from 'react-native';
// import { FlatList,
//     ScrollView,
//      TextInput 
//    } from 'react-native-gesture-handler';
// import hotel from '../consts/hotel';
import COLORS from '../consts/colors'
import Icon from 'react-native-vector-icons/MaterialIcons';
import DatePicker from 'react-native-datepicker';
import Feather from 'react-native-vector-icons/Feather';


const  bookings = ({navigation}) => {
    // const item = route.params;
    // console.log(item);
   
    const [CheckIn,setCheckIn] = useState(0);
     const [adultPlus,setAdultPlus]=useState(0);
     const [childPlus,setChildPlus]=useState(0);

    return(

            // <ScrollView
            // showsVerticalScrollIndicator={false}
            // contentContainerStyle={{
            //     backgroundColor:'#fff',
            //     paddingBottom: 20,}}>

            // <ImageBackground style={style.headerImage}
            // > </ImageBackground>
            // </ScrollView>
            <View style={{flex:1}}>
                 <View style={styles.header} >
                <Icon name="keyboard-arrow-left" size={38} color='#fff' style={{justifyContent:'flex-start',marginRight:'85%', marginTop:'5%'}} onPress={navigation.goBack}/>      

       
                <Text style={{ fontSize:26, fontWeight:'bold', color:COLORS.white, marginTop:30}}> Bookings</Text>
                 </View>

               <View>
                   <Text style={{color:COLORS.secondary, 
                    fontSize:20, marginTop:20,
                    fontWeight:'bold', paddingHorizontal:20, 
                    marginBottom:20}}>
                Please select your booking date :</Text>

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

      <View style={{fontWeight:'bold', flexDirection:'row',paddingHorizontal:20, 
      justifyContent:'space-between', marginTop:10}}>
      <Text style={{fontSize:16, fontWeight:'bold', color:COLORS.secondary, marginBottom:10}}>No. of Adults</Text>
         
      
        
        <Text style={{fontSize:16, fontWeight:'bold', color:COLORS.secondary, marginBottom:10}}>No. of Children</Text>

      </View>

      <View style={{flexDirection:'row', justifyContent:'space-between', 
      alignContent:'space-between', paddingHorizontal:20}}>



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

    
      

     
<View style={{paddingTop:30}}>
      <TouchableOpacity
                 style={{backgroundColor:COLORS.secondary,width:'55%',height:'35%',
                 borderRadius:10, flexDirection:'column', 
                 justifyContent:'center', alignContent:'center', marginLeft:100,
                alignItems:'center'}}
                 onPress={()=>navigation.navigate('Availability')}>
                <Text style={{padding:5,color:'#fff',fontSize: 18, }}>
                Make bookings
                </Text>
            </TouchableOpacity>
            </View>

               </View>

            </View>

        );

        
    };

    const style = StyleSheet.create ({
        headerImage:{
            height:400,
            borderBottomRightRadius:10,
            borderBottomLeftRadius:40,
            overflow:'hidden',
        }
    })

export default bookings 

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

    searchContainer:{
        height:50,
        width:100,
        borderColor: COLORS.primary,
        borderRadius:10,
        borderWidth: 3,

        flex:1,
        flexDirection:'row',
        alignItems:'center',
        marginHorizontal:20,

    }, 

    inputText:{
        fontSize:18,
        fontWeight:'bold',
        color: COLORS.secondary,
        flex:1,

    },

    categoryListContainer:{
        flexDirection:'row',
        justifyContent:'space-between',
        marginHorizontal:'space-between',
        marginHorizontal: 20,
        marginTop:30,
    },

    categoryListText:{
        fontSize:17,
        fontWeight:'bold',
    },

    buttonAdding:{
      width:30,
      height:30,
      borderRadius:1,
      justifyContent:'center',
      alignItems:'center',
    }
})