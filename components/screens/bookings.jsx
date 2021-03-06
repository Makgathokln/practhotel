import React, { useState } from 'react';
import {
  View, Text, StyleSheet,
  ImageBackground, Pressable,
  TouchableOpacity,Dimensions
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
import moment from 'moment';
import DropShadow from "react-native-drop-shadow";


const bookings = ({ navigation,route }) => {
  
  const {width, height } = Dimensions.get("screen");
  // const item = route.params;
  console.log()
  const item = route.params.item
  const [CheckIn, setCheckIn] = useState(0);
  const [CheckOut, setCheckOut] = useState(0);
  const [Guest, setGuest] = useState(0)
  const [adultPlus, setAdultPlus] = useState(0);
  const [childPlus, setChildPlus] = useState(0);
 
  var datetoday= new Date()
  var a =moment(CheckOut)
      var b =moment(CheckIn)
      var given=moment("2022-01-15","YYYY-MM-DD")
     
      var diff=0
        var datetoday= new Date()
  return (

    // <ScrollView
    // showsVerticalScrollIndicator={false}
    // contentContainerStyle={{
    //     backgroundColor:'#fff',
    //     paddingBottom: 20,}}>

    // <ImageBackground style={style.headerImage}
    // > </ImageBackground>
    // </ScrollView>
    <View style={{ flex: 1 }}>
      <View style={styles.header} >
      
        
      </View>
      <TouchableOpacity style={{width:80,height:80,zIndex:999,position:'absolute',top:50}} onPress={()=>navigation.goBack()}>
        <Icon name="keyboard-arrow-left" size={38} color='white' style={{position:'absolute' }} 
         />
       </TouchableOpacity>
<View style={{
          width:width / 1.3,
    height:height /6.3,
        backgroundColor: COLORS.white,
        elevation: 15,
        marginHorizontal: 10,
        borderRadius: 10,
        top:170,
        left:35,
        position:'absolute'
        }}>
        
        <Text style={{ fontSize: 26, fontWeight: 'bold', color: COLORS.primary, marginTop: 40 ,textAlign:'center'}}> Bookings</Text>
      

      </View>

          <View style={{  width:width / 1.1,
    height:height /2.2,
        backgroundColor: COLORS.white,
        elevation: 15,
        marginHorizontal: 10,
        borderRadius: 10,
        top:340,
        left:5,
        
        position:'absolute'}}>
      <View >
        
        <Text style={{
          color: COLORS.secondary,
          fontSize: 20, marginTop: 20,
          fontWeight: 'bold', paddingHorizontal: 10,
          marginBottom: 20
        }}>
          Select your booking date :</Text>

        <View style={{
          fontWeight: 'bold',
          flexDirection: 'row',
          paddingHorizontal: 10,
          alignContent: 'space-between',
          justifyContent: 'space-between'
        }}>
          <View>
            <Text style={{ fontSize: 16, fontWeight: 'bold', color: COLORS.secondary, marginBottom: 10 }}>Check In</Text>

            <DatePicker
              style={{
                width: 150,
              }}
              date={CheckIn}
              mode="date"
              placeholder="select date"
              format="YYYY-MM-DD"
              minDate={datetoday}
              // maxDate="2022-06-01"
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
              onDateChange={(date) => {setCheckIn(date) }}
            />

          </View>

          <View>
            <Text style={{
              fontSize: 16,
              fontWeight: 'bold', color: COLORS.secondary, marginBottom: 10
            }}>Check Out</Text>
            <DatePicker
              style={{ width: 150 }}
              date={CheckOut}
              mode="date"
              placeholder="select date"
              format="YYYY-MM-DD"
              minDate={datetoday}
              // maxDate="2022-06-01"
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
              onDateChange={(date) => {setCheckOut(date) }}
            />
          </View>


        </View>
        <Text style={{
              fontSize: 16, paddingHorizontal:10,
              fontWeight: 'bold', color: COLORS.primary, marginTop: 10}}>{diff=(a.diff(b,'days'))} Nights</Text>
        <View style={{
          fontWeight: 'bold', flexDirection: 'row', paddingHorizontal: 10,
          justifyContent: 'space-between', marginTop: 10
        }}>
          <Text style={{ fontSize: 16, fontWeight: 'bold', color: COLORS.secondary, marginBottom: 10 }}>Guests</Text>

          <View style={{
            flexDirection: 'row',
            alignContent: 'space-between',
            justifyContent: 'space-between',
            borderRadius: 10,
            padding: 10, backgroundColor: '#EDEDED',
            elevation: 2, width: '40%',
          }}>


            <Pressable style={[styles.buttonAdding, {
              backgroundColor: '#fff',
              flexDirection: 'row'
            }]}
              onPress={() => setAdultPlus(Math.max(1, adultPlus + 1))}
            >
              <Feather name="plus" color={COLORS.primary} size={22} />

            </Pressable>
            <Text style={{ fontSize: 21 }}>{adultPlus}</Text>
            <Pressable style={[styles.buttonAdding, {
              backgroundColor: '#fff',
              flexDirection: 'row'
            }]}
              onPress={() => setAdultPlus(Math.max(1, adultPlus - 1))}
            >
              <Feather name="minus" color={COLORS.primary} size={22} />

            </Pressable>

          </View>

          {/* <Text style={{fontSize:16, fontWeight:'bold', color:COLORS.secondary, marginBottom:10}}>No. of Children</Text> */}

        </View>

        <View style={{
          flexDirection: 'row', justifyContent: 'space-between',
          alignContent: 'space-between', paddingHorizontal: 20
        }}>



          {/* <View style={{
            flexDirection: 'row',
            alignContent: 'space-between',
            justifyContent: 'space-between',
            borderRadius: 10,
            padding: 10, backgroundColor: '#EDEDED',
            elevation: 2, width: '40%',
          }}>


            <Pressable style={[styles.buttonAdding, {
              backgroundColor: '#fff',
              flexDirection: 'row'
            }]}
              onPress={() => setAdultPlus(Math.max(1, adultPlus + 1))}
            >
              <Feather name="plus" color={COLORS.primary} size={22} />

            </Pressable>
            <Text style={{ fontSize: 21 }}>{adultPlus}</Text>
            <Pressable style={[styles.buttonAdding, {
              backgroundColor: '#fff',
              flexDirection: 'row'
            }]}
              onPress={() => setAdultPlus(Math.max(1, adultPlus - 1))}
            >
              <Feather name="minus" color={COLORS.primary} size={22} />

            </Pressable>

          </View> */}

          {/* <View style={{flexDirection:'row',
      alignContent:'space-between', 
      justifyContent:'space-between',
       borderRadius:10,
      padding:10, backgroundColor:'#EDEDED',
       elevation:2, width:'40%',
    }}> */}


          {/* <Pressable style={[styles.buttonAdding, {backgroundColor:'#fff',
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

      </Pressable> */}
          {/* </View> */}

        </View>




{
  diff<=0?(
<View style={{ flexDirection:'row',justifyContent:'center',alignItems:'center',width:'100%',marginTop:10}}>
          <TouchableOpacity
            style={{
              backgroundColor: COLORS.secondary, width: '55%', height: 50,
              borderRadius: 10,
              justifyContent: 'center', 
              alignItems: 'center',position:'absolute', top:20
            }} disabled={true}
            onPress={() => navigation.navigate('Rooms',{
              CheckIn:CheckIn,
              CheckOut:CheckOut,
              adultPlus:adultPlus,
            })}>
            <Text style={{ padding: 5, color: '#fff', fontSize: 18, }}>
              Proceed
            </Text>
          </TouchableOpacity>
        </View>
  ):(
    <View style={{ paddingTop: 30 }}>
          
          <TouchableOpacity
            style={{
              backgroundColor: COLORS.secondary, width: '55%', height: '35%',
              borderRadius: 10, flexDirection: 'column',
              justifyContent: 'center', alignContent: 'center', marginLeft: 85,
              alignItems: 'center', marginBottom:10
            }}
            onPress={() => navigation.navigate('Rooms',{
              CheckIn:CheckIn,
              CheckOut:CheckOut,
              adultPlus:adultPlus,
              item:item,
            })}>
            <Text style={{ padding: 5, color: '#fff', fontSize: 18, }}>
              Proceed
            </Text>
          </TouchableOpacity>
        </View>
  )
}
        

      </View>

    </View>
    </View>
  );


};

const style = StyleSheet.create({
  headerImage: {
    height: 400,
    borderBottomRightRadius: 10,
    borderBottomLeftRadius: 40,
    overflow: 'hidden',
  }
})

export default bookings

const styles = StyleSheet.create({
  header: {
    height: 350,
    width: 480,
    backgroundColor: COLORS.secondary,
    marginLeft: -60,
    borderRadius: 500,

    top: -100,
    // width: '100%',
    // height: '30%',
    // paddingVertical: 30,
    // alignItems: 'center',
    // backgroundColor: '#0b1674',
    // borderBottomLeftRadius: 20,
    // borderBottomRightRadius: 20,
  },

  searchContainer: {
    height: 50,
    width: 100,
    borderColor: COLORS.primary,
    borderRadius: 10,
    borderWidth: 3,

    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 20,

  },

  inputText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: COLORS.secondary,
    flex: 1,

  },

  categoryListContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 'space-between',
    marginHorizontal: 20,
    marginTop: 30,
  },

  categoryListText: {
    fontSize: 17,
    fontWeight: 'bold',
  },

  buttonAdding: {
    width: 30,
    height: 30,
    borderRadius: 1,
    justifyContent: 'center',
    alignItems: 'center',
  }
})