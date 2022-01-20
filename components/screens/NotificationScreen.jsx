import * as React from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Image} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import COLORS from '../consts/colors';
import hotel from '../consts/hotel';
import { FlatList,
    ScrollView,
    TextInput, 
    } from 'react-native-gesture-handler';


const NotificationScreen=({navigation}) =>{
    
    const categories = ['All', 'Popular','Top Rated']
    const [selectedCategoryIndex, setSelectedCategoryIndex] = React.useState(0);
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

    <Image source={hotel.image} style={{width:'40%',height:'105%', borderRadius:10,}}>
    </Image>

    <View style={{flex:1,
        flexDirection:'column', paddingHorizontal:15}}>
    
    <Text style={{fontWeight:'bold', color:COLORS.secondary, fontSize:20}}>{hotel.name}</Text>
    <Text style={{fontWeight:'bold', color:COLORS.gray, fontSize:16}}>{hotel.location}</Text>
    
    <TouchableOpacity onPress={() => navigation.navigate('signIn') }>
    <Text style={{fontWeight:'bold', color:COLORS.secondary, fontSize:16}}>Book Again</Text>
    </TouchableOpacity>

<View  style={{
        flex:1,
        flexDirection:'row', justifyContent:'space-between',alignContent:'space-between',

}}> 
    <Text style={{fontWeight:'bold', color:COLORS.primary, fontSize:16}}>Cancel Booking</Text>

    <Icon name="delete" size={24} color={COLORS.primary} style={{marginRight:10}}/>

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
 
        <View style={{
            flexDirection:'row', justifyContent:'space-between',alignContent:'space-between', marginTop:20}}>
        
            <View style={styles.searchContainer}>
            <Icon name="search" size={25} color={COLORS.secondary} style={{marginLeft: 20}}/>
           
            <TextInput 
            styles={styles.inputText}
            placeholder='Search For History'/>
      
        </View>

        <View>
        <Icon name="delete-sweep" size={34} color={COLORS.secondary} style={{marginTop:10, marginRight:10}}/>
        </View>


        </View>

        <CategoryList/>

        <View>
            <FlatList 
            data={hotel}
            contentContainerStyle={{paddingVertical:30,paddingLeft:20}}
            showsHorizontalScrollIndicator={false}
            renderItem={({item,index}) => <Card hotel={item} index={index}/>}
            />
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