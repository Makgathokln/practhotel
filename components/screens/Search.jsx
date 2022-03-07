import React, { useState, useEffect } from 'react';
import { useHistory, useLocation, Link } from 'react-router'
import {
    FlatList,
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
    SafeAreaView,
    Animated,
    ScrollView, Dimensions
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
import { useNavigation } from '@react-navigation/native';

const { width } = Dimensions.get('screen');
const cardWidth = width / 1.8;

const Search = ({navigation,route}) => {
    const [addHotels, setAddHotels] = useState([]);
    const [searchresult,setSearchresult]=useState([])

    const scrollX = React.useRef(new Animated.Value(0)).current;

    const item = route.params;
    console.log(item); 

    const {data}=route.params
    console.log('route',data.length)


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
                                {item.name}
                            </Text>
                            
                            <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignContent: 'space-between' }}>

                                <Icon name="location-pin" size={24} color={COLORS.secondary} />

                                <Text style={{ color: COLORS.secondary, fontSize: 15, fontWeight: 'bold' }}>
                                    {item.location}
                                </Text>
                            </View>
                            
                                                        </View>

                    </View>
                </View>
            </Animated.View>

        </TouchableOpacity>

    );
};
return(
    <>
<FlatList
    horizontal
    data={data}
    contentContainerStyle={{ paddingVertical: 30, paddingLeft: 20, paddingRight: cardWidth / 2 - 40, }}
    showsHorizontalScrollIndicator={false}
    renderItem={({ item, index }) => <Card hotel={item} index={index} />}
    snapToInterval={cardWidth}
/> 
   </>
)
}

const style = StyleSheet.create({
   
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
export default Search