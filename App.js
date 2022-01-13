import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native'
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Start from './components/screens/start'
import Forgot from './components/screens/forgot'
import SignIn from './components/screens/signIn'
import SignUp from './components/screens/signUp'
import History from './components/screens/HistoryScreen'
import MainContainer from './components/MainContainer';
import HomeScreen from './components/screens/HomeScreen';
import DetailsScreen from './components/screens/DetailsScreen';
import Terms from './components/terms';
import Bookings from './components/screens/bookings'
import HotelDetails from './components/screens/HotelDetails';
import Leah from './components/screens/Leah';
import Rooms from './components/screens/rooms';
import Availability from './components/screens/availability';

const Menu = ()=>{
  const Stack = createNativeStackNavigator()
  return(
      <NavigationContainer independent={true}>
          <Stack.Navigator initialRouteName = { "start" } screenOptions={{headerShown:false}}
           >
           <Stack.Screen name = "start" component={Start}/>
            <Stack.Screen name={'signIn'} component={SignIn}/>
            <Stack.Screen name={'signUp'} component={SignUp} />  
            <Stack.Screen name ={'forgot'} component={Forgot}/> 
            <Stack.Screen name={'bookings'} component={Bookings}/>
            <Stack.Screen name={'HotelDetails'} component={HotelDetails}/>
            <Stack.Screen name={'MainContainer'} component={MainContainer} />  
            <Stack.Screen name={'Home'} component={HomeScreen} />   
            {/* <Stack.Screen name={'Home'} component={HomeScreen} />    */}
            <Stack.Screen name={"DetailsScreen"} component={DetailsScreen} />   
            <Stack.Screen name={"HomeScreen"} component={HomeScreen} />   
            <Stack.Screen name={"Bookings"} component={Bookings} />   
            <Stack.Screen name={"Rooms"} component={Rooms} />   
            <Stack.Screen name={"Availability"} component={Availability} />   


          </Stack.Navigator>
      </NavigationContainer>
  )
}
export default Menu