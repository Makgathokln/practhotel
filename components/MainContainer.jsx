import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import  Ionicons from 'react-native-vector-icons/Ionicons';
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

//Screens
import HomeScreen from './screens/HomeScreen'
import HistoryScreen from './screens/HistoryScreen'
import NotificationScreen from './screens/NotificationScreen'
import Profile from './screens/profile'
import DetailsScreen from './screens/DetailsScreen';
import userDetails from './screens/UserDetails';


//Screen bames
const homeName ='HomeScreen';
const historyName ='history';
const notificationName ='notification';
const userName ='user';
const detailsName ='detail';


const Tab = createBottomTabNavigator();

// const  DetailsScreen = ({navigation}) => {

const MainContainer =({navigation})=>{
    return(


        // <NavigationContainer independent={true}>

            <Tab.Navigator initialRouteName={homeName} 
            screenOptions={({route}) =>({
                tabBarShowLabel:false,
                tabBarIcon:({focused, color, size}) =>{
                    let iconName;
                    let rn = route.name;

                    if (rn === homeName){
                        iconName = focused ? 'home' : 'home-outline'
                    }else if (rn === notificationName){
                        iconName = focused ? 'notifications-sharp' : 'notifications-sharp'
                    }else if (rn ===historyName){
                        iconName = focused ? 'repeat' : 'repeat-outline';

                    }else if (rn ===userName){
                        iconName = focused ? 'person' : 'person';
                    }else if (rn ===detailsName){
                        iconName = focused ? 'person' : 'person';

                    }
                    
                    return <Ionicons name={iconName} size={size} color={color}/>
                }})
    
    }
        tabBarOptions={{
            activeTintColor: '#0b1674',
            inactiveTintColor: 'gray',
           

        }}
            > 

            <Tab.Screen name={homeName} options={{headerShown: false}} component={HomeScreen}/>
            <Tab.Screen name={notificationName} options={{headerShown: false}} component={HistoryScreen}/>
            <Tab.Screen name={historyName} options={{headerShown: false, footerShown:false}} component={NotificationScreen}/>
            <Tab.Screen name={userName} options={{headerShown: false, footerShown:false}} component={Profile}/>
            {/* <Tab.Screen name={detailsName} options={{headerShown: false}} component={DetailsScreen}/> */}


            </Tab.Navigator>

        // </NavigationContainer>
    // <View>
    //     <Text>Welcome</Text>
    // </View>

             )
}

export default MainContainer
