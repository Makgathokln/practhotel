import React, { useState, useEffect } from "react";
import {
    FlatList,
    ScrollView,
    TextInput
} from 'react-native-gesture-handler';

import {
    View,
    ActivityIndicator,
    Text,
    ImageBackground,
    Image,
    StyleSheet,
    SearchBar,
    TouchableOpacity,
    Dimensions,
    SafeAreaView,
    Animated
}
    from 'react-native';

import Icon from 'react-native-vector-icons/MaterialIcons'
import Ionicons from 'react-native-vector-icons/Ionicons'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import hotel from '../consts/hotel';
import COLORS from '../consts/colors';
//import hoteldata from "../backend/hoteldata";
import firebase from "../backend/firebase";
import { auth, db } from "../backend/firebase";
import SearchUserItem from "../search/userItem/hotelitem";
import queryHotelsByName from "../services/addHotel";
const { width } = Dimensions.get('screen');

const cardWidth = width / 1.8;
import { useHistory } from "react-router";

const HomeScreen = ({ navigation }) => {
    const categories = ['Top Hotels'];
    const [selectedCategoryIndex, setSelectedCategoryIndex] = React.useState(0);
    const scrollX = React.useRef(new Animated.Value(0)).current;
    const [name, setName] = useState('');
    const [location, setLocation] = useState('');
    const [images, setImages] = useState('');
    const [addHotels, setAddHotels] = useState([]);
    const [textInput, setTextInput] = useState('')
    const [Search, setSearch] = useState([])
    const [searchtext, setSearchtext] = useState('');
    const [filteredDataSource, setFilteredDataSource] = useState([]);
    const [masterDataSource, setMasterDataSource] = useState([]);
    const [searchresult,setSearchresult]=useState([])
    const [queries, setquery] = useState();
    
    
    var ref=db.ref('addHotels')
    
    // const Search = () => {
    //     let arr=[]
    //     if(queries!==""){

            // ref.orderByChild('province').equalTo(queries).on("value",function(snapshot){
            //     snapshot.forEach((child)=>{
            //         arr.push(child)
            //     })
            // })
    //         ref.orderByChild('province').equalTo("Limpopo").once('value').then((snapshot)=>{
    //             console.log(snapshot,'mysnapshort')
    //         })
    //         setSearchresult(arr)
    //         navigation.navigate('Search',{data:searchresult})
    //     }
    // };
    
    const uid = auth.currentUser.uid;
    // console.log(uid)
    const getUser = () => {
        db.ref('/user/' + uid).update({
            name: name,


        });
    };

    useEffect(() => {
        db.ref('/user/' + uid).on('value', value => {
            // console.log(value, 'value')
            setName(value?.val().name)


        })
    }, [])


    useEffect(() => {
        db.ref('/addHotels').on('value', snapshot => {
           
            const addHotels = []
            snapshot.forEach(action => {
                const key = action.key

                const data = action.val()
                addHotels.push({
                    key: key,
                    name: data.name,
                    images: data.images[0].url,
                    image2: data.image2,
                    location: data.location,
                    description: data.description,
                    city: data.city,
                    price1: data.price1,
                    room: data.room,
                    latitude: data.latitude,
                    longitude: data.longitude,
                    hotelprice : data.hotelprice,
                    roomprice: data.roomprice,
                    roomtype:data.roomtype,
                    beds: data.beds,
                    province: data.province
                })
                setAddHotels(addHotels)
                setFilteredDataSource(addHotels)
                setMasterDataSource(addHotels)

            })
            // console.log(addHotels)
        })
    }, [])
    // React.useEffect(() =>{
    //     onValue(ref(db, "/addRooms/"), (snapshot) =>{
    //       setAddRooms([]);
    //       const data = snapshot.val();
    //       if(data !== null) {
    //         Object.values(data).map((addRoom) => {
    //           setAddRooms((oldArray) => [...oldArray,addRoom ]);
    //         });
    //       }
    //     });
    //   },[])

    // const searchName =(input) =>{
    //     let data = addHotels;
    //     let searchData = data.filter((item)=>{
    //         return item.name.toLowerCase().includes(input.toLowerCase());
    //     });
    //     setAddHotels(searchData);
    // };
    

    const searchFilterFunction = (text) => {
        // Check if searched text is not blank
        if (text) {
          // Inserted text is not blank
          // Filter the masterDataSource and update FilteredDataSource
          const newData = masterDataSource.filter(
            function (item) {
              // Applying filter for the inserted text in search bar
              const itemData = item.province
                  ? item.province.toUpperCase()
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

    const CategoryList = () => {
        return (
            <View style={style.categoryListContainer}>
                {categories.map((item, index) => (
                    <TouchableOpacity key={index} activeOpacity={0.8} onPress={() => setSelectedCategoryIndex(index)}>
                        <View>
                            <Text style={{
                                ...style.categoryListText, color: selectedCategoryIndex == index
                                    ? '#0b1674'
                                    : '#ff6e1a'
                            }} onPress={() => navigation.navigate("Popular")}>
                                {item}
                            </Text>
                            {selectedCategoryIndex == index && (
                                <View
                                    style={{
                                        height: 3,
                                        width: 30,
                                        backgroundColor: COLORS.primary,
                                        marginTop: 2
                                    }}>

                                </View>

                            )}

                        </View>

                    </TouchableOpacity>
                ))}

            </View>
        );
    };

    

    const Card = ({ hotel, index }) => {

        const inputRange = [
            (index - 1) * cardWidth,
            index * cardWidth,
            (index + 1) * cardWidth,
        ];
        const opacity =
            scrollX.interpolate({
                inputRange,
                outputRange: [0.7, 0, 0.7],

            });

        // const scale = dfdghyg
        // scrollX.interpolate({
        //     inputRange,
        //     outputRange:[0.8, 1, 0.8],

        // });

        return (
            <TouchableOpacity activeOpacity={1}
                onPress={() => navigation.navigate("DetailsScreen", hotel)}>

                <Animated.View style={{ ...style.card }}>

                    <Animated.View style={{ ...style.cardOverlay, opacity }} />
                    <Image source={{ uri: hotel?.images }}
                        style={style.cardImage} />



                    <View style={{ ...style.cardDetails }}>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignContent: 'space-between' }}>
                            <View>
                                <Text style={{ color: COLORS.primary, fontWeight: 'bold', fontSize: 17, }}>
                                    {hotel.name}
                                </Text>
                                
                                <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignContent: 'space-between' }}>

                                    <Icon name="location-pin" size={24} color={COLORS.secondary} />

                                    <Text style={{ color: COLORS.secondary, fontSize: 15, fontWeight: 'bold' }}>
                                        {hotel.location}                                        

                                    </Text>

                                    
                                </View>

                                <Text style={{ color: COLORS.secondary, fontSize: 15, fontWeight: 'bold' }}>
                                        {hotel.city}                                        

                                    </Text>
                                
                                                            </View>

                        </View>
                    </View>
                </Animated.View>

            </TouchableOpacity>

        );
    };

    const TopHotelCard = ({ hotel }) => {
        return (
            <TouchableOpacity activeOpacity={1} onPress={() => navigation.navigate("DetailsScreen", hotel)}>
            <View style={style.topHotelCard}>
                <View style={{
                    position: 'absolute',
                    top: 5,
                    right: 5,
                    zIndex: 1,
                    flexDirection: 'row'
                }}></View>

                <Image style={style.topHotelCardImage}
                    source={{ uri: hotel?.images }}
                />

                <View style={{ paddingVertical: 10, paddingHorizontal: 10 }}>
                    <Text style={{ fontSize: 10, fontWeight: 'bold', color: COLORS.primary }}>
                        {hotel.name}
                    </Text>

                    <Text style={{ fontSize: 7, fontWeight: 'bold', color: COLORS.secondary }}>
                        {hotel.location} {hotel.city}
                    </Text>

                   
                </View>
            </View>
            </TouchableOpacity>
        )
    }

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: '#fff' }}>
            <View style={style.header}>
                <View style={{ paddingBottom: 15, flexDirection: 'row', justifyContent: 'space-between' }}>
                    <Text style={{ fontSize: 25, fontWeight: 'bold', color: '#ff6e1a' }}> Welcome! </Text>
                    <Text style={{ fontSize: 25, fontWeight: 'bold', color: '#ff6e1a' }}>{name}</Text>

                </View>

                <TouchableOpacity onPress={() => navigation.navigate("UserDetails")}>
                    {/* <Icon name="person-outline" size={38} color='gray' /> */}
                    <Image source={require('./images/profile.jpeg')}
                        style={{ flex: 1, width: 60, height: 60, borderRadius: 40, resizeMode: 'cover' }}></Image>
                </TouchableOpacity>
                {/* <TouchableOpacity  onPress={()=> navigation.navigate("profile")}
>
 <Image source={require('./images/signIn.png')} 
 style={{height:"80%", width:'12%', borderRadius:20}}
 />  
</TouchableOpacity> */}
            </View>

            <ScrollView showsVerticalScrollIndicator={false}>
                
                <View style={style.searchInputContainer}>
                    <Icon name="search" size={30} style={{ marginLeft: 20 }} />
                    <TextInput placeholder="Search"
                        style={{ paddingLeft: 10 }}
                        // onBlur={()=>Search(queries)}
                        onChangeText={(text)=>searchFilterFunction(text)}
                        // value={queries}
                        // onChangeText={(input) => {
                        //     searchFilterFunction(input)   }}                                     
                        />




                </View>
                {/* <TouchableOpacity
                 style={{margin:10,backgroundColor:'#0b1674',width:60,height:50,borderRadius:10,justifyContent:'flex-end', marginLeft:20}}
                onPress={Search}>
                    
                <Text style={{padding:10,color:'#fff',fontSize: 24}}>
                    Sign In
                </Text>
                </TouchableOpacity> */}
                {/* <TextInput placeholder="Search"
onChangeText={setTextInput}

 style={{backgroundColor:'#2f363c', height:50}}/>

<FlatList
data={searchName}
renderItem={SearchUserItem}
keyExtractor={(item) => item.id}
/> */}

                <CategoryList />

                <View>


<FlatList
    horizontal
    data={filteredDataSource}
    contentContainerStyle={{ paddingVertical: 30, paddingLeft: 20, paddingRight: cardWidth / 2 - 40, }}
    showsHorizontalScrollIndicator={false}
    renderItem={({ item, index }) => <Card hotel={item} index={index} />}
    snapToInterval={cardWidth}
/>

</View>

                <View style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    marginHorizontal: 20
                }}>

                    <Text style={{ fontWeight: 'bold', color: COLORS.secondary, fontSize: 17 }}> Most Visited Hotels</Text>

                    {/* <Text style={{ color: COLORS.primary, fontSize: 17, fontWeight: 'bold' }}> Show All</Text> */}
                </View>

                <FlatList
                    data={addHotels}
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    contentContainerStyle={{ paddingLeft: 20, marginTop: 20, paddingBottom: 30 }}
                    renderItem={({ item }) => <TopHotelCard hotel={item} />}
                />
                {
                    addHotels.map((item) => {
                        <Text>{item.name}</Text>
                    })
                }
            </ScrollView>
        </SafeAreaView>
    )
}


const style = StyleSheet.create({
    header: {
        marginTop: 40,
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 20
    },

    searchInputContainer: {
        height: 50,
        backgroundColor: '#fff',
        marginTop: 15,
        marginLeft: 20,
        borderRadius: 10,
        borderColor: '#ff6e1a',
        borderWidth: 3,
        flexDirection: 'row',
        alignItems: 'center',
        width: '90%',


    },

    categoryListContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginHorizontal: 20,
        marginTop: 30,

    },

    categoryListText: {
        fontWeight: 'bold',
        fontSize: 17,
    },
    card: {
        height: 280,
        width: cardWidth,
        elevation: 15,
        marginRight: 20,
        borderRadius: 15,
        backgroundColor: COLORS.white,
    },
    cardImage: {
        height: 200,
        width: "100%",
        borderTopLeftRadius: 15,
        borderTopRightRadius: 15,

    },

    cardDetails: {
        height: 100,
        borderRadius: 15,
        backgroundColor: '#fff',
        position: 'absolute',
        bottom: 0,
        padding: 20,
        width: '100%',

    },

    cardOverlay: {
        height: 280,
        backgroundColor: '#fff',
        position: 'absolute',
        zIndex: cardWidth,
        borderRadius: 15,
    },

    topHotelCard: {
        height: 140,
        width: 120,
        backgroundColor: COLORS.white,
        elevation: 15,
        marginHorizontal: 10,
        borderRadius: 10,
    },

    topHotelCardImage: {
        height: 100,
        width: '100%',
        borderTopRightRadius: 10,
        borderTopLeftRadius: 10
    }
})

export default HomeScreen