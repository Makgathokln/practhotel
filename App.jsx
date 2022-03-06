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
import Profile from './components/screens/profile';
import Edit from './components/screens/edit';
import Notify from './components/screens/Notify';
import Payment from './components/screens/payment';
import PaymentScreen from './components/screens/PaymentScreen';
import PaymentView from './components/screens/PaymentView';
import CardItem from './components/screens/CardItem'
import MyCard from './components/screens/MyCard';
import AddCard from './components/screens/AddCard';
import FormInput from './components/screens/FormInput';
import Confirm from './components/screens/Confirm';
import PaymentConfirmation from './components/screens/PaymentConfirmation';
import Popular from './components/screens/Popular';
import Luxury from './components/screens/Luxury';
import Top from './components/screens/Top';
import UserDetails from './components/screens/UserDetails';
import Search from './components/screens/Search';
import HistoryScreen from './components/screens/HistoryScreen';
import NotificationScreen from './components/screens/NotificationScreen';
import { AuthProvider } from './components/contexts/UserAuthContext';

const Menu = ()=>{
  const Stack = createNativeStackNavigator()
  return(
    <AuthProvider>
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
            <Stack.Screen name={"HistoryScreen"} component={HistoryScreen} />   
            <Stack.Screen name={"NotificationScreen"} component={NotificationScreen} />   

            <Stack.Screen name={"Bookings"} component={Bookings} />   
            <Stack.Screen name={"Rooms"} component={Rooms} />   
            <Stack.Screen name={"Availability"} component={Availability} />   
            <Stack.Screen name={"Profile"} component={Profile} />    
            <Stack.Screen name={"edit"} component={Edit} />    
            <Stack.Screen name={"Payment"} component={Payment} />    
            <Stack.Screen name={"PaymentScreen"} component={PaymentScreen}/>
            <Stack.Screen name={"PaymentView"} component={PaymentView}/>
            <Stack.Screen name={"MyCard"} component={MyCard}/>
            <Stack.Screen name={"CardItem"} component={CardItem}/>
            <Stack.Screen name={"AddCard"} component={AddCard}/>
            <Stack.Screen name={"FormInput"} component={FormInput}/>
            <Stack.Screen name={"Confirm"} component={Confirm}/>
            <Stack.Screen name={"UserDetails"} component={UserDetails}/>
            <Stack.Screen name={"Search"} component={Search}/>
            <Stack.Screen name={"Leah"} component={Leah}/>

            <Stack.Screen name={"PaymentConfirmation"} component={PaymentConfirmation}/>
            <Stack.Screen name={"Popular"} component={Popular}/>
            <Stack.Screen name={"Notify"} component={Notify}/>






          </Stack.Navigator>
      </NavigationContainer>
</AuthProvider>
  )
}
export default Menu
