import React, {useState, useEffect} from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Image,Dimensions} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import COLORS from '../consts/colors';
import hotel from '../consts/hotel';
import { db, auth } from '../backend/firebase';

import {
    FlatList,
    ScrollView,
    TextInput
} from 'react-native-gesture-handler';



const NotificationScreen=({navigation}) =>{
    const {width, height } = Dimensions.get("screen");
    const [Search, setSearch] = useState([])
    const [searchtext, setSearchtext] = useState('');
    const [filteredDataSource, setFilteredDataSource] = useState([]);
    const [masterDataSource, setMasterDataSource] = useState([]);

    const [addBookings, setAddBookings] = useState([]);
    const uid = auth.currentUser.uid;
    console.log(uid)
    useEffect(() => {
        db.ref('/addBookings' + uid).on('value', snapshot => {
            
            const addBookings = []
            snapshot.forEach(action => {
                const key = action.key

                const data = action.val()
                    addBookings.push({
                    key: key,
                    name: data.name,
                    images: data.images,
                    CheckIn: data.CheckIn,
                   CheckOut: data.CheckOut,
                    adultPlus: data.adultplus,
                    description: data.description,
                    Rp: data.Rp,
                    room: data.room,
                    room1 : data.room1,
                 
                })
                setAddBookings(addBookings)
                setFilteredDataSource(addBookings)
                setMasterDataSource(addBookings)
            })
            console.log(addBookings)
        })
    }, [])
    console.log(addBookings[0]?.images,)
    const categories = ['All', 'Popular','Top Rated']
    const [selectedCategoryIndex, setSelectedCategoryIndex] = React.useState(0);

    const searchFilterFunction = (text) => {
        // Check if searched text is not blank
        if (text) {
          // Inserted text is not blank
          // Filter the masterDataSource and update FilteredDataSource
          const newData = masterDataSource.filter(
            function (item) {
              // Applying filter for the inserted text in search bar
              const itemData = item.name
                  ? item.name.toUpperCase()
                  : ''.toUpperCase();
              const textData = text.toUpperCase();
              return itemData.indexOf(textData) > -1;
            }
          );
          setFilteredDataSource(newData);
          setSearch(text);
        } else {
          // Inserted text is blank
          // Update FilteredDataSource with masterDataSource
          setFilteredDataSource(masterDataSource);
          setSearch(text);
        }
      };




    const CategoryList =({})=>{
        return(
        <View style={styles.categoryListContainer}>
            {categories.map((item,index) =>(
                <TouchableOpacity key={index} 
                activeOpacity={0.8}
                onPress={()=>setSelectedCategoryIndex(index)}
                >
                    <View>
                        <Text style={{...styles.categoryListText, color:
                            selectedCategoryIndex == index 
                            ? COLORS.primary
                            : COLORS.secondary
                            }}>{item}
                            </Text>
                            {selectedCategoryIndex == index && (  <View style={{height:3, width:30,backgroundColor:COLORS.primary,
                                marginTop:2,
                            }}
                            />
                        )}
                                            

                    </View>
                </TouchableOpacity>
                ))}
            </View>
        );
    };

const Card = ({hotel,index}) =>{
   return( 
    <View style={{
        flex:1,
        flexDirection:'row', justifyContent:'space-between',alignContent:'space-between', marginTop:20,

}}> 

    <Image source={{ uri: hotel?.images }} style={{width:'40%',height:'105%', borderRadius:10,}}>
    </Image>

    <View style={{flex:1,
        flexDirection:'column', paddingHorizontal:15}}>
    
    <Text style={{fontWeight:'bold', color:COLORS.secondary, fontSize:20}}>{hotel.name}</Text>
    <Text style={{fontWeight:'bold', color:COLORS.gray, fontSize:16}}>Price paid R{hotel.Rp}.</Text>
    
    

<View  style={{
        flex:1,
        flexDirection:'row', justifyContent:'space-between',alignContent:'space-between',

}}> 
    {/* <Text style={{fontWeight:'bold', color:COLORS.primary, fontSize:16}}>Cancel Booking</Text> */}

<TouchableOpacity>
    <Icon name="delete" size={24} color={COLORS.primary} style={{marginRight:10}}/>
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

       
            <Text style={{ fontSize:26, fontWeight:'bold', color:COLORS.white, marginTop:30}}> Booking History</Text>
        </View>
        <View style={{  width:width / 1.3,
    height:height /6.3,
        backgroundColor: COLORS.white,
        elevation: 15,
        marginHorizontal: 10,
        borderRadius: 10,
        top:100,
        left:35,
        position:'absolute'
        }}>
    
    <Text style={{ fontSize: 26, fontWeight: 'bold', color: COLORS.primary, marginTop: 40 ,textAlign:'center'}}> History</Text>
{/* 
                  <TouchableOpacity>
        <Icon name="keyboard-arrow-left" size={38} color='white' style={{top:-160, left:-40}} 
        onPress={navigation.goBack} />
       </TouchableOpacity> */}
          </View>
        <View style={{
            flexDirection:'row', justifyContent:'space-between',alignContent:'space-between', marginTop:20, top:-250}}>
        
            <View style={styles.searchContainer}>
           
            <Icon name="search" size={25} color={COLORS.secondary} style={{marginLeft: 20}}/>
           
            <TextInput 
            styles={styles.inputText}
            placeholder='Search For History'
            onChangeText={(text)=>searchFilterFunction(text)}

            />
      
        </View>

        <View>
        <Icon name="delete-sweep" size={34} color={COLORS.secondary} style={{marginTop:10, marginRight:10}}/>
        </View>


        </View>

       
        <View style={{top:-280}}>
            <FlatList 
            data={filteredDataSource}
            contentContainerStyle={{paddingVertical:30,paddingLeft:20, justifyContent:'space-between'}}
            showsHorizontalScrollIndicator={false}
            renderItem={({item,index}) => <Card hotel={item} index={index}/>}
            />
        </View>

        
        </View>
    )
}

const styles = StyleSheet.create({
    header: {
        height:470,
        width:480,
        backgroundColor:COLORS.secondary,
        marginLeft:-60,
        borderRadius:500,
        top:-260
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
})

export default NotificationScreen