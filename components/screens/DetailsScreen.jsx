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
import Slideshow from "react-native-image-slider-show";

import hotel from '../consts/hotel';
import Icon from 'react-native-vector-icons/MaterialIcons'
import COLORS from '../consts/colors';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';


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
            source={{uri:item?.images}}> 
            
            <View style={style.header}>
            <Icon name="arrow-back-ios" size={28}
             color={COLORS.white} onPress={navigation.goBack}
            />
            
            <Icon
             name="favorite"
              size={28} 
              color={COLORS.primary} 
            
              />

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
                <Text style={{fontSize:16, fontWeight:'bold', color:COLORS.gray}}>{item.location} {item.city}</Text>
               
                </View>
                </View>

                <View style={{marginTop: 14, paddingHorizontal:20}}>
                    <Text style={{fontWeight:'bold', color:COLORS.secondary, fontSize:18}}>Details</Text>
                    <Text style={{ color:COLORS.gray, fontSize:14}}>{item.description}
                    </Text>


                </View>

                <View style={{marginTop: 14, 
                    paddingHorizontal:20}}>
                    <Text style={{fontWeight:'bold', 
                    color:COLORS.secondary, fontSize:18, marginBottom:20}}>Amenities</Text>
                
                <View style={{flexDirection:'row',
                alignContent:'space-between',justifyContent:'space-between', }}>
                    
                    <View style={{
                       flexDirection:'row',justifyContent:'space-between',
                        
                        }}>
                    
                    <View style={{backgroundColor:'#ccffcc',width:50,
                    height:50,borderRadius:10, 
                    alignItems:'center', }}>
                        
                    <FontAwesome5 name="swimmer" color={'#00cc44'} size={30} 
                    style={{padding:10, }} />
                    </View>

                    </View>

                    <View style={{
                     flexDirection:'row',justifyContent:'space-between'}}>
                   
                   <View  style={{backgroundColor:'#fff0b3',width:50,
                 height:50,borderRadius:10, 
                alignItems:'center'}}>
                    <Icon name="wifi" color={'#ff9933'}  size={30} style={{padding:10}}/>
                   </View> 

                    </View>

                    <View style={{
                    flexDirection:'row',justifyContent:'space-between',
                   }}>
                       <View  style={{backgroundColor:'#e6ccff',width:50,
                 height:50,borderRadius:10, 
                alignItems:'center'}}>
                    <Icon name="local-restaurant" color={'#6600cc'} size={30} style={{padding:10}}/>
                    </View>

                    </View>

                    <View style={{
                    flexDirection:'row',justifyContent:'space-between'}}>
                   <View
                 style={{backgroundColor:'#D9E7FC',width:50,
                 height:50,borderRadius:10, 
                alignItems:'center'}}
                 >
                <Icon name="directions-car" color={'#0047b3'} size={30} style={{padding:10}}/>

            </View>

                    </View>
                
                    </View>
                </View>

                <View style={{marginTop: 20,
                 flexDirection: 'row',
                 justifyContent:'space-between',
                 paddingLeft:20,
                 alignItems:'center' }}>
                     <Text style={{color:COLORS.primary, fontWeight:'bold', 
                     fontSize:20}}>R {item.price1} / Night</Text>
               
                     <TouchableOpacity
                 style={{backgroundColor:COLORS.secondary,width:'50%',height:'100%',borderRadius:10, marginRight:20,
                alignItems:'center', marginTop:20}}
                 onPress={()=>navigation.navigate('Bookings',{item:item})}>
                <Text style={{padding:5,color:'#fff',fontSize: 18, marginTop: 20, marginRight:4,}}>
                    Check Availability
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
            height:280,
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
