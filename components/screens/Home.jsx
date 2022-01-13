import * as React from 'react';
import { FlatList,
     ScrollView,
      TextInput 
    } from 'react-native-gesture-handler';

import {View,
     Text, 
     ImageBackground, 
     Image, 
     StyleSheet,
     SearchBar,
     TouchableOpacity,
     Dimensions } 
     from 'react-native';

import Ionicons from 'react-native-vector-icons/Ionicons'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import Icon from 'react-native-vector-icons/MaterialIcons'
import hotel from '../consts/hotel';
const cardWidth = width /1.8;

export default function HomeScreen({navigation}) {

const categories = ['All', 'Popular','Top Rated'];

const [selectedCategoryIndex, setSelectedCategoryIndex ] = React.useState(0);
const [activeCardIndex, setActiveCardIndex] = React.useState(0)
const TopHotelCard = ({hotel}) =>{
    return <View style={style.topHotelCard}>
<Image style={style.topHotelCardImage} source={hotel.image}/>
<View style={{paddingVertical:5, paddingHorizontal:10}}>
<Text style={{fontSize:10, fontWeight:'bold'}}>
    {hotel.name}
</Text>
<Text style={{fontSize:7, fontWeight:'bold', color:'gray'}}>
    {hotel.location}
</Text>

</View>

    </View>

    
}

const CategoryList = ({navigation}) => {
return(
<View style={style.categoryListContainer}>
{categories.map((item,index) => (
    
    <TouchableOpacity key={index} 
    activeOpacity={0.8}
    onPress={()=>setSelectedCategoryIndex(index)}
    >

    <View>
        <Text style={{...style.categoryListText,
         color:selectedCategoryIndex == index
         ? '#0b1674'
        : '#ff6e1a' }}>
             {item}
        </Text>
    {selectedCategoryIndex == index && (
    <View 
    style={{height:3,
        width:30,
         backgroundColor:'#0b1674', 
         marginTop:2}}/>

    )}

    </View>
    </TouchableOpacity>
))}
</View>
);
}; 

const Card = ({hotel, index}) => {
    return(
    
        <TouchableOpacity 
        disabled={activeCardIndex != index}
        activeOpacity={1} 
        onPress={()=> navigation.navigate('DetailsScreen', hotel)}>
    <View style={{...style.card}}>

        <View style={{...style.cardOverlay, opacity:0}}/>
        <Image source={hotel.image} style={style.cardImage}/>
        <View style={style.cardDetails}>
            <View >   
            <Text style={{fontWeight:'bold', fontSize:17, color:"#0b1674"}}>{hotel.name}</Text>
            <View style={{flexDirection:'row', justifyContent:'space-between'}}>
            <Icon name="bookmark-border" size={26}/>      
            <Text style={{fontWeight:'bold', fontSize:12, color:"gray"}}>{hotel.location}</Text>
            </View>
            </View>
        </View>
    </View>
    </TouchableOpacity>
    )
}
   
return(

        <View style={{flex:1}}>
        <View style={style.header}>
        <View style={{paddingBottom:15}}>
            <Text style={{fontSize:25, fontWeight:'bold', color:'#ff6e1a'}}> Welcome! Leah</Text>
        </View>
        <Icon name="person-outline" size={38} color='gray' />
{/* <Image source={require('./images/signIn.png')} style={{height:80, width:80,top:40, borderRadius:40, justifyContent:'space-between', left:150 }}/>  */}

</View>
<ScrollView showsVerticalScrollIndicator={false}> 
<View style={style.searchInputContainer}>
<Icon name="search" size={30} color='#ff6e1a' style={{marginLeft:20}}/>
<TextInput placeholder='Search for Hotel' style={{fontSize:20, paddingLeft:50,color:'#0b1674' }}/>
</View>

<CategoryList/>
<View>
    
    <FlatList
    onMomentumScrollEnd={(e)=>{
        setActiveCardIndex(
            Math.round(e.nativeEvent.contentOffset.x/ cardWidth),
        ); 
    }}
    horizontal
   data={hotel}
    contentContainerStyle={{paddingVertical:30, paddingLeft:20}}
    showsHorizontalScrollIndicator={false}
     renderItem={({item,index}) => <Card hotel={item} index={index} />}
    />

</View>

<View style={{flexDirection:'row', 
justifyContent:'space-between',
marginHorizontal:20,}}>

<Text style={{fontWeight:'bold', color:'#0b1674'}}>Top Hotels</Text>
<Text style={{fontWeight:'bold', color:'gray'}}>Show All</Text>

</View>

<FlatList 
data={hotel}
horizontal 
showsHorizontalScrollIndicator={false}
 contentContainerStyle={{
paddingLeft:20, 
marginTop:20,
paddingBottom:30
}}

renderItem={({item})=><TopHotelCard hotel={item} />}
/>
</ScrollView>

        </View>
    )
    }

    const {width, height } = Dimensions.get("screen");
    
    const style =  StyleSheet.create({
        header:{
            marginTop: 40,
            flexDirection: 'row',
            justifyContent: 'space-between',
            paddingHorizontal: 20
        },

        searchInputContainer: {
            height:50,
            backgroundColor:'#fff',
            marginTop:15,
            marginLeft:20,
            borderRadius:10,
            borderColor: '#ff6e1a',
             borderWidth: 3,
            flexDirection:'row',
            alignItems:'center',
            width:'90%',
        },
        categoryListContainer:{
            flexDirection:'row',
            justifyContent:'space-between',
            marginHorizontal:20,
            marginTop:30,

        },

        categoryListText:{
            fontSize:17,
            fontWeight:'bold',
        },

        card:{
        height:280,
        width:width / 1.8,
        elevation: 15,
        marginRight:20,
        borderRadius:15,
        backgroundColor: '#fff',
        
        },

        cardImage:{
            height:200,
            width:"100%",
            borderTopLeftRadius:15,
            borderTopRightRadius:15,
            
        },

        cardDetails:{
            height:100,
            borderRadius:15,
            position: 'absolute',
            bottom:0,
            padding:30,
            width:"100%",
            
        },
        cardOverlay:{
            height:280,
            backgroundColor:'#fff',
            position:'absolute',
            zIndex:100,
            width: width/1.8,

        },
        topHotelCard:{
            height:140,
            width:120,
            backgroundColor: '#fff',
            elevation:15, marginHorizontal:10,
            borderRadius:10

        },
        topHotelCardImage:{
            height:100,
            width:'100%',
            borderTopRightRadius:10,
            borderTopLeftRadius:10


        }

    });

