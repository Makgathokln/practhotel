import React, { useState, useEffect } from 'react';
import {
    Text,
    ImageBackground,
    ScrollView,
    Dimensions,
    View,
    Image,
    Button,
    StyleSheet,
    Pressable,
    TouchableOpacity
} from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
//import CheckBox from 'react-native-check-box';
import Ionicons from 'react-native-vector-icons/Ionicons'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import Icon from 'react-native-vector-icons/MaterialIcons'
import COLORS from '../consts/colors';
import { auth, db } from "../backend/firebase";


const userDetails = ({ navigation }) => {

    const [name, setName] = useState('');
    const uid = auth.currentUser.uid;
    console.log(uid)
    const getUser = () => {
        db.ref('/user/' + uid).update({
            name: name,


        });
    };

    useEffect(() => {
        db.ref('/user/' + uid).on('value', value => {
            console.log(value, 'value')
            setName(value?.val().name)


        })
    }, [])


    return (
        <>


            <View style={{ flex: 1, backgroundColor: '#fff' }}>

                <View style={{
                    paddingTop: 40,
                    flexDirection: 'row', paddingHorizontal: 20
                }}>
                    <Icon name="arrow-back-ios" size={30} style={{ color: COLORS.secondary }}
                        onPress={navigation.goBack} />

                    {/* <Text style={{fontSize:20, fontWeight:'bold',color:COLORS.secondary, paddingLeft:"20%"}}>My Profile</Text> */}

                </View>

                <View style={{ flexDirection: 'row', paddingHorizontal: 20, paddingTop: 20, }}>
                    {/* 
    <Image source={require('./images/exec.jpg')} 
    style={{height:'20%',width:'20%'}}
 />   */}
                    <Image source={require('./images/profile.jpeg')}
                        style={{ width: 100, height: 100, marginLeft: 100, borderRadius: 20 }}></Image>
                    <View style={{ paddingTop: '20%' }}>
                        <TouchableOpacity onPress={() => navigation.navigate('Profile')}>
                            <Icon name="create" size={20} style={{ color: COLORS.secondary }} />

                        </TouchableOpacity>



                    </View>


                </View>
                <View>
                    <Text style={{
                        fontSize: 20, fontWeight: 'bold',
                        color: COLORS.primary, paddingLeft: "30%",
                        paddingTop: '5%'
                    }}>{name} Profile</Text>

                </View>

                <View style={{ paddingHorizontal: 20 }}>

                    <TouchableOpacity
                        style={{
                            flexDirection: 'row', justifyContent: 'flex-start', margin: 10, borderColor: COLORS.gray,
                            borderRadius: 10,
                            borderWidth: 1,
                            width: '95%',
                            height: 50
                        }}
                        onPress={() => navigation.navigate('Profile')}>

                        <Icon name="person" size={22} style={{ color: COLORS.secondary, marginTop: 10, marginLeft: 5 }} />

                        <Text style={{ padding: 10, color: '#0b1674', fontWeight: 'bold', textAlign: 'right', fontSize: 18, marginLeft: 5 }}>
                            My Account
                        </Text>

                        <Icon name="arrow-forward-ios" size={20} style={{ color: COLORS.gray, marginTop: 14, paddingLeft: 130 }} />

                    </TouchableOpacity>

                    <TouchableOpacity
                        style={{
                            flexDirection: 'row', justifyContent: 'flex-start', margin: 10, borderColor: COLORS.gray,
                            borderRadius: 10,
                            borderWidth: 1,
                            width: '95%',
                            height: 50
                        }}
                        onPress={() => navigation.navigate('HistoryScreen')}>

                        <Icon name="notifications" size={22} style={{ color: COLORS.secondary, marginTop: 10, marginLeft: 5 }} />

                        <Text style={{ padding: 10, color: '#0b1674', fontWeight: 'bold', textAlign: 'right', fontSize: 18, }}>
                            Notifications
                        </Text>

                        <Icon name="arrow-forward-ios" size={20} style={{ color: COLORS.gray, marginTop: 14, paddingLeft: 125, }} />

                    </TouchableOpacity>

                    <TouchableOpacity
                        style={{
                            flexDirection: 'row', justifyContent: 'flex-start', margin: 10, borderColor: COLORS.gray,
                            borderRadius: 10,
                            borderWidth: 1,
                            width: '95%',
                            shadowColor: '#171717',
                            shadowOffset: { width: -2, height: 4 },
                            shadowOpacity: 0.8,
                            shadowRadius: 3,
                            height: 50
                        }}
                        onPress={() => navigation.navigate('NotificationScreen')}>

                        <Icon name="history" size={22} style={{ color: COLORS.secondary, marginTop: 10, marginLeft: 5 }} />

                        <Text style={{ padding: 10, color: '#0b1674', fontWeight: 'bold', textAlign: 'right', fontSize: 18, }}>
                            History
                        </Text>

                        <Icon name="arrow-forward-ios" size={20} style={{ color: COLORS.gray, marginTop: 14, paddingLeft: 170, }} />

                    </TouchableOpacity>

                    <TouchableOpacity
                        style={{
                            flexDirection: 'row', justifyContent: 'flex-start', margin: 10, borderColor: COLORS.gray,
                            borderRadius: 10,
                            borderWidth: 1,
                            width: '95%',
                            shadowColor: '#171717',
                            shadowOffset: { width: -2, height: 4 },
                            shadowOpacity: 0.8,
                            shadowRadius: 3,
                            height: 50
                        }}
                        onPress={() => navigation.navigate('HistoryScreen')}>

                        <Icon name="history" size={22} style={{ color: COLORS.secondary, marginTop: 10, marginLeft: 5 }} />

                        <Text style={{ padding: 10, color: '#0b1674', fontWeight: 'bold', textAlign: 'right', fontSize: 18, }}>
                            My Bookings
                        </Text>

                        <Icon name="arrow-forward-ios" size={20} style={{ color: COLORS.gray, marginTop: 14, paddingLeft: 125, }} />

                    </TouchableOpacity>

                    {/* <TouchableOpacity
                        style={{
                            flexDirection: 'row', justifyContent: 'flex-start', margin: 10, borderColor: COLORS.gray,
                            borderRadius: 10,
                            borderWidth: 1,
                            width: '95%',
                            shadowColor: '#171717',
                            shadowOffset: { width: -2, height: 4 },
                            shadowOpacity: 0.8,
                            shadowRadius: 3,
                            height: 50
                        }}
                        onPress={() => navigation.navigate('HistoryScreen')}>

                        <Icon name="favorite" size={22} style={{ color: COLORS.secondary, marginTop: 10, marginLeft: 5 }} />

                        <Text style={{ padding: 10, color: '#0b1674', fontWeight: 'bold', textAlign: 'right', fontSize: 18, }}>
                            Favorites
                        </Text>

                        <Icon name="arrow-forward-ios" size={20} style={{ color: COLORS.gray, marginTop: 14, paddingLeft: 130, marginLeft: 25 }} />

                    </TouchableOpacity> */}

                </View>


            </View>
        </>
    )
}

export default userDetails

const { width, height } = Dimensions.get("screen");

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },

    innerBottom: {
        margin: 20,
    },


    bottomView: {
        flex: 1.5,
        backgroundColor: '#fff',
        bottom: 50,
        borderTopStartRadius: 40,
        borderTopEndRadius: 40,
    },

    input: {
        borderColor: '#0b1674',
        borderWidth: 3,
        width: width / 1.3,
        padding: 10,

    },

    inputContainer: {
        top: 20

    },

    textdes: {
        fontWeight: 'bold',
        paddingBottom: 10,
        color: '#0b1674',
    },


    button: {
        width: width / 1.3,
        height: height / 18.3,

        borderRadius: 10,
        alignItems: 'center',
        backgroundColor: '#fff',
        borderWidth: 2,
        borderColor: '#0b1674',
        top: 30,
    },

    buttonText: {
        fontSize: 20,
        color: '#ff6e1a',
        fontWeight: 'bold',
        top: 5,
    },

})