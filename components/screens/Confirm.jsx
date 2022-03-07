import React, {useState, useEffect} from 'react';
import { StyleSheet, 
    View, Text, 
    TouchableOpacity, 
    ScrollView,
    ImageBackground, Pressable,
    Image } from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { TextInput } from 'react-native-gesture-handler';
import  { Paystack }  from 'react-native-paystack-webview';

import COLORS from '../consts/colors';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import FormInput from './FormInput';
import { db, auth } from '../backend/firebase';

const Confirm = ({navigation,route}) =>{
    const [room, setRoom] = useState(0);
      const  room1=route.params.room
        // const CheckIn=route.params.CheckIn
        // const CheckOut=route.params.CheckOut
        const adultPlus=route.params.adultPlus
         const roomprice=route.params.roomprice
        const item=route.params.item
         
        const name=item.name
        //  const diff=route.params.diff

        const[CheckIn,setCheckIn]=useState(route.params.CheckIn)
        const [CheckOut, setCheckOut]=useState(route.params.CheckOut)
        const [images, setImages]=useState(item?.images)
        // const [roomprice, setroomprice]=useState(route.params.roomprice)
        const [status,setStatus]=useState('Pending')
        const [description, setDescription]=useState('Succesfully paid booking')
        const [statement, setStatement]=useState('Succesfully paid booking'+CheckIn+CheckOut)


        const addBooking=()=>{
          const userid=auth.currentUser.uid

          db.ref('addBookings').push({
            userid,status,
            description,name,CheckIn,
            CheckOut,adultPlus,room1,images
          })
        }


        function renderCard(){
        return(

            <View 
            // source={require('./images/master.png')}
            style={{ width:'90%',
                height:200, 
                padding:20,
                paddingBottom:20,
               paddingHorizontal:20,
                borderRadius:20, 
                backgroundColor: COLORS.primary,
                marginLeft:20
                }}>

                    {/* Logo */}

                    <Image
                    source={require('./images/visa.png')}
                    resizeMode='contain'
                    style={{
                        position:'absolute',
                        top:20,
                        right:20,
                        height:40,
                        width:80
                    }}
                    />

                    <View
                    style={{
                        position:'absolute',
                        bottom:10,
                        left:0,
                        right:0,
                    paddingHorizontal:20                    }}
                    >
                        <Text
                        style={{color:COLORS.white,
                        fontSize:22, fontWeight:'bold'}}
                        >
                            Leah Makgatho
                        </Text>
                        <View style={{flexDirection:'row', justifyContent:'space-between', alignContent:'space-between'
                    }}>
                        <Text style={{color:COLORS.white,
                        fontSize:18, fontWeight:'bold'}}>
                            1234 1234 1234 1234
                        </Text>
                        <Text style={{color:COLORS.white,
                        fontSize:18, fontWeight:'bold'}}>12/25</Text>
                        </View>
                    </View>
                        
                   
                </View>
         
        )

    }
var Rp=0
    

    return(
        

        <ScrollView showsVerticalScrollIndicator={false} style={{
            flex:1,
        }}>
        
        {/* Header */}
      {/* //  {renderHeader} */}

        <View style={{flexDirection:'row',
         
         paddingTop:20 }}>
        <Icon name="keyboard-arrow-left" size={38} color='#0b1674'
         style={{justifyContent:'flex-start',marginRight:'85%', marginTop:'5%'}} onPress={navigation.goBack}/>      
        </View>

        <View>
        <Text style={{fontWeight:'bold', fontSize:22, paddingBottom:30, 
         color:COLORS.secondary, textAlign:'center'}}>
           My Card</Text>

        </View>  

        {renderCard()}
        
        <View>
        <Text style={{flexDirection:'row',color:COLORS.gray, fontSize:20, fontWeight:'bold', paddingHorizontal:20,paddingTop:20,}}>
           Please note that you are about to make a payment for your bookings. </Text>
        </View>

        <View style={{flexDirection:'row',alignContent:'space-between',justifyContent:'space-between',paddingHorizontal:20, paddingTop:10}}>
        <Text style={{flexDirection:'row',color:COLORS.secondary, fontSize:18, fontWeight:'bold'}}>No. Of Rooms</Text>
        {/* <Text style={{flexDirection:'row',color:COLORS.secondary, fontSize:18, fontWeight:'bold', paddingLeft:120}}>3</Text> */}
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
              onPress={() => setRoom(Math.min(item.room.length, room + 1))}
            >
              <Feather name="plus" color={COLORS.primary} size={22} />

            </Pressable>
            <Text style={{ fontSize: 21 }}>{room}</Text>
            <Pressable style={[styles.buttonAdding, {
              backgroundColor: '#fff',
              flexDirection: 'row'
            }]}
              onPress={() => setRoom(Math.max(0, room - 1))}
            >
              <Feather name="minus" color={COLORS.primary} size={22} />

            </Pressable>

          </View>
        </View>

        <View style={{flexDirection:'row',paddingHorizontal:20, paddingTop:20}}>
        <Text style={{flexDirection:'row',color:COLORS.secondary, fontSize:18, fontWeight:'bold'}}>Arrival</Text>
        <Text style={{flexDirection:'row',color:COLORS.secondary, fontSize:18, fontWeight:'bold', paddingLeft:140}}>Departure</Text>

        </View>

        <View style={{flexDirection:'row',paddingHorizontal:20, paddingTop:10}}>
        <Text style={{flexDirection:'row',color:COLORS.gray, fontSize:18, fontWeight:'bold'}}>{CheckIn}</Text>
        <Text style={{flexDirection:'row',color:COLORS.gray, fontSize:18, fontWeight:'bold', paddingLeft:100}}>{CheckOut}</Text>

        </View>

        <View style={{flexDirection:'row',paddingHorizontal:20, paddingTop:10}}>
        <Text style={{flexDirection:'row',color:COLORS.secondary, fontSize:18, fontWeight:'bold'}}>No. Of Guests</Text>

        </View>

        <View style={{paddingHorizontal:20, paddingTop:10, }}>
        <Text style={{flexDirection:'row',color:COLORS.gray, fontSize:18,
         fontWeight:'bold'}}>{adultPlus}</Text>

        </View>

        <View style={{flexDirection:'row',paddingHorizontal:20, paddingTop:10}}>
        <Text style={{flexDirection:'row',color:COLORS.primary, fontSize:22,
         fontWeight:'bold',}}>Total:R {Rp=room*room1.roomprice}</Text>
        <Text style={{flexDirection:'row',color:COLORS.primary, fontSize:22, fontWeight:'bold', paddingLeft:70}}>{roomprice}</Text>

        </View>

        <View style={{paddingTop:10, paddingHorizontal:20, flexDirection:'row', justifyContent:'space-between'}}>
        {/* <TouchableOpacity
                 style={{backgroundColor:COLORS.secondary,width:'40%',height:55,borderRadius:10,
                alignItems:'center'}}
                onPress={addBooking}>
                <Text style={{color:'#fff',fontSize: 16, marginTop:15, fontWeight:'bold'}}>
                    Book
                </Text>

                
            </TouchableOpacity> */}
     
              <TouchableOpacity
                 style={{backgroundColor:COLORS.secondary,width:'40%',height:50,borderRadius:10, marginBottom:10,
                alignItems:'center'}}
                onPress={()=>navigation.navigate('PaymentConfirmation',{
                  CheckIn:CheckIn,
        CheckOut:CheckOut,
        adultPlus:adultPlus,
        roomprice:roomprice,
        item:item,
        room:room,Rp:Rp
                })}>
                <Text style={{color:'#fff',fontSize: 16, marginTop:15, fontWeight:'bold'}}>
                    Pay
                </Text>

                
            </TouchableOpacity>

            
</View>

        </ScrollView>     
    )
}
export default Confirm;

const styles = StyleSheet.create({
    header: {
      width: '100%',
      height: '30%',
      paddingVertical: 30,
      borderRadius: 10,
      alignItems: 'center',
      backgroundColor: '#0b1674',
      borderBottomLeftRadius: 20,
      borderBottomRightRadius: 20,
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