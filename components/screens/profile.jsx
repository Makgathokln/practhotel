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

import * as yup from 'yup';
import { Formik } from 'formik';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import * as ImagePicker from 'expo-image-picker';

const profile = ({ navigation }) => {

    const [edituser, setEditUser] = useState([]);

    const [name, setName] = useState('');
    const [Phonenumber, setPhonenumber] = useState('');
    const [email, setEmail] = useState('');

    const [selectedImage, setSelectedImage] = useState(null);
    const [isPasswordShow, setPasswordShow] = useState(false)

    const ReviewSchem = yup.object({
        name: yup.string().required().max(7),
        phonenumber: yup.string().required().min(10).max(10),
        email: yup.string().required().min(6),
        password: yup.string().required().min(6),
        confirmpassword: yup.string().required().min(6).oneOf([yup.ref('password'), null], 'password does not match')
    })
    let openImagePickerAsync = async () => {
        let permissionResult = await ImagePicker.requestMediaLibraryPermissionsAsync();

        if (permissionResult.granted === false) {
            alert("Permission to access camera roll is required!");
            return;
        }

        let pickerResult = await ImagePicker.launchImageLibraryAsync();
        if (pickerResult.cancelled === true) {
            return;
        }

        setSelectedImage({ localUri: pickerResult.uri });
    }

    const uid = auth.currentUser.uid;
    console.log(uid)
    const updateUser = () => {
        db.ref('/user/' + uid).update({
            name: name,
            Phonenumber: Phonenumber,
            email: email,

        });
    };

    useEffect(() => {
        db.ref('/user/' + uid).on('value', value => {
            console.log(value, 'value')
            setName(value?.val().name)
            setPhonenumber(value?.val().Phonenumber)
            setEmail(value?.val().email)

        })
    }, [])
    // console.log(name);


    return (
        <>


            <View style={{
                flex: 1, backgroundColor: '#fff',
            }}>

                <View style={{
                    paddingTop: 40,
                    flexDirection: 'row', paddingHorizontal: 20
                }}>
                    <Icon name="arrow-back-ios" size={30} style={{ color: COLORS.secondary }}
                        onPress={navigation.goBack} />
                    <Text style={{ fontSize: 18, color: COLORS.primary, fontWeight: 'bold', left: 70, top: 30 }}>Update Profile</Text>

                </View>

                <View style={{ marginLeft: 120 }}>
                    {
                        selectedImage ? (<Image
                            source={{ uri: selectedImage.localUri }}
                            style={{ height: 120, width: 120, borderRadius: 60, }}
                        />
                        ) : (
                            <Image source={require('./images/profile.jpeg')}
                                style={{ height: 120, width: 120, borderRadius: 60, top: 30 }} />
                        )
                    }
                    {/* <Image source={{ uri: 'https://image.shutterstock.com/image-vector/male-avatar-profile-picture-use-600w-193292033.jpg'}}
                style={{height:120,width:120,borderRadius:60,}}/> */}
                    <TouchableOpacity style={{ marginLeft: 90, marginTop: -20 }}
                        mode="contained" onPress={openImagePickerAsync}>
                        <FontAwesome name='camera' size={29} color='grey' />
                    </TouchableOpacity>
                </View>

                <View>
                    <Formik
                        initialValues={{ name: '', phonenumber: '', email: '', password: '', confirmpassword: '' }}
                        validationSchema={ReviewSchem}
                    >
                        {(props) => (
                            <KeyboardAwareScrollView
                            >
                                {/* {edituser.map((user) => ( */}
                                    <View>
                                        <Text style={{ margin: 10, color: '#0b1674', fontWeight: 'bold', marginLeft: 15, marginTop:30 }}>Name</Text>

                                        <TextInput
                                            style={{ height: 50, width: '90%', borderColor: '#0b1674', borderWidth: 3,paddingHorizontal:20,
                                             borderRadius: 20, marginLeft: 15, color: '#0b1674', fontWeight: 'bold', padding:15 }}

                                            onChangeText={text => setName(text)}
                                            value={name}

                                            maxLength={7}

                                        />


                                        <Text style={{ margin: 10, color: '#0b1674', fontWeight: 'bold', marginLeft: 15 }}>Contact Number </Text>

                                        <TextInput
                                            style={{ height: 50, width: '90%', borderColor: '#0b1674',paddingHorizontal:20,
                                            borderWidth: 3, borderRadius: 20, marginLeft: 15, color: '#0b1674', fontWeight: 'bold', }}
                                            keyboardType='numeric'
                                            onChangeText={text => setPhonenumber(text)}
                                            value={Phonenumber}
                                            maxLength={10}


                                        />

                                        <View>
                                        <Text style={{ color: 'red', marginTop: -15 }}>{props.touched.phonenumber && props.errors.phonenumber}</Text>

                                        <Text style={{ margin: 10, color: '#0b1674', fontWeight: 'bold', marginLeft: 15 }}>Email Address </Text>
                                            
                                        <TextInput
                                            style={{ height: 50, width: '90%', borderColor: '#0b1674', borderWidth: 3,paddingHorizontal:20,
                                             borderRadius: 20, marginLeft: 15, color: '#0b1674', fontWeight: 'bold', marginRight:20 }}
                                            keyboardType='email-address'
                                            onChangeText={text => setEmail(text)}
                                            value={email}
                                            onBlur={props.handleBlur('email')}
                                            maxLength={16}

                                        />
                                       

                                        </View>
                                        <Text style={{ color: 'red', marginTop: -15 }}>{props.touched.email && props.errors.email}</Text>



                                        <TouchableOpacity
                                            style={{
                                                margin: 10, backgroundColor: '#0b1674', width: '80%', marginTop: 20,
                                                height: 50, borderRadius: 10,
                                                alignItems: 'center', marginBottom: 20, marginLeft: 35
                                            }}
                                            onPress={updateUser}>
                                            <Text style={{ marginTop: 7, color: '#fff', fontSize: 22 }}>
                                                Update
                                            </Text>
                                        </TouchableOpacity>

                                    </View>
{/* 
                                ))} */}
                            </KeyboardAwareScrollView>
                        )}</Formik>
                </View>

            </View>
        </>
    )
}

export default profile

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