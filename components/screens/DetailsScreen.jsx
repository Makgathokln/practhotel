import * as React from 'react';
import {
    View,
    Text, StatusBar,
    ImageBackground, 
    Image, 
    StyleSheet,
    SearchBar,
    TouchableOpacity,
    Dimensions,
    SafeAreaView,
    Animated } 
    from 'react-native';
    
import { FlatList,
    ScrollView,
     TextInput 
   } from 'react-native-gesture-handler';

import hotel from '../consts/hotel';
import Icon from 'react-native-vector-icons/MaterialIcons'
import COLORS from '../consts/colors';


const  DetailsScreen = ({navigation, route}) => {
    const item = route.params;
    console.log(item);
    return(

            <ScrollView
            showsVerticalScrollIndicator={false}
            contentContainerStyle={{
                backgroundColor:'#fff',
                paddingBottom: 20,}}>

            <StatusBar barStyle="light-content" translucent 
            backgroundColor="rgba(0,0,0,0)"/>     
            
            <ImageBackground style={style.headerImage}
            source={item.image}> 
            
            <View style={style.header}>
            <Icon name="arrow-back-ios" size={28} color={COLORS.white} onPress={navigation.goBack} />
            
            <Icon
             name="bookmark-border"
              size={28} 
              color={COLORS.white}  />

            </View>
            </ImageBackground>

            <View>
                <View style={{marginTop: 10, paddingHorizontal:20}}>
                <Text style={{fontSize:20, fontWeight:'bold', color:COLORS.secondary, marginTop:20 }}>{item.name}</Text>
                <View style={{flexDirection:'row',marginTop:14  }}>
               
               <Icon name="star" color={COLORS.primary} size={22}/>
               <Icon name="star" color={COLORS.primary} size={22}/>
               <Icon name="star" color={COLORS.primary} size={22}/>
               <Icon name="star" color={COLORS.gray} size={22}/>

               <Text style={{fontSize:16, fontWeight:'bold', color:COLORS.gray}}>(135 Reviews)</Text>

                </View>
              
               <View style={{flexDirection:'row', marginTop:14 }}>
               
               <Icon name="place" color={COLORS.gray} size={22}/>
                <Text style={{fontSize:16, fontWeight:'bold', color:COLORS.gray}}>{item.location}</Text>
               
                </View>
                </View>

                <View style={{marginTop: 14, paddingHorizontal:20}}>
                    <Text style={{fontWeight:'bold', color:COLORS.secondary, fontSize:18}}>Details</Text>
                    <Text style={{ color:COLORS.gray, fontSize:14}}>Featuring an outdoor Pool. Warlof Hotel is located in Polokwane. 
                    Free Wi-fi acces is Available in all guest rooms. Read More
                    </Text>


                </View>

                <View style={{marginTop: 14, paddingHorizontal:20}}>
                    <Text style={{fontWeight:'bold', color:COLORS.secondary, fontSize:18, marginBottom:20}}>Amenities</Text>
                
                <View style={{flexDirection:'row',alignContent:'space-between',justifyContent:'space-between', }}>
                    
                    <View style={{border:3 , 
                        flexDirection:'row',justifyContent:'space-between',
                        borderRadius:10, borderColor:'#D9FCD9',
                         borderWidth:40, width:'10%', height:'40%'}}>
                    <Icon name="star" color={COLORS.gray} size={22}/>
                    

                    </View>

                    <View style={{border:3 ,width:'10%',height:'40%',
                     flexDirection:'row',justifyContent:'space-between',
                     borderRadius:10, borderColor:'#F6ED96', borderWidth:40}}>
                    <Icon name="wifi" color={COLORS.gray} size={22}/>
                    

                    </View>

                    <View style={{border:3 , width:'10%',height:'40%',
                    flexDirection:'row',justifyContent:'space-between',
                    borderRadius:10, borderColor:'#DCBFFC', borderWidth:40}}>
                    <Icon name="local-restaurant" color={COLORS.gray} size={22}/>
                    

                    </View>

                    <View style={{border:3 , width:'10%',height:'40%',
                    flexDirection:'row',justifyContent:'space-between',
                    borderRadius:10, borderColor:'#D9E7FC', borderWidth:40}}>
                    <Icon name="drive-eta" color={COLORS.gray} size={22}/>
                    

                    </View>
                
                    </View>
                </View>

                <View style={{marginTop: 20,
                 flexDirection: 'row',
                 justifyContent:'space-between',
                 paddingLeft:20,
                 alignItems:'center' }}>
                     <Text style={{color:COLORS.primary, fontWeight:'bold', fontSize:20}}>R {item.price} / Night</Text>
               
                     <TouchableOpacity
                 style={{backgroundColor:COLORS.secondary,width:'55%',height:'135%',borderRadius:10, marginRight:20,
                alignItems:'center'}}
                 onPress={()=>navigation.navigate('Bookings')}>
                <Text style={{padding:5,color:'#fff',fontSize: 18, marginTop: 20}}>
                    Select Rooms
                </Text>
            </TouchableOpacity>
                 </View>
            </View>
            </ScrollView>

        );
    };

    const style = StyleSheet.create ({
        btn:{
height:55,
justifyContent:'center',
alignItems:'center',
marginTop:40,
backgroundColor: COLORS.secondary
        },
        headerImage:{
            height:340,
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
        amenities:{
            flexDirection:'row',
            justifyContent: 'space-between'
        },
    })
export default DetailsScreen 
