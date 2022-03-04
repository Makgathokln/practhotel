import React, {useState, useEffect} from 'react';
import { StyleSheet, 
    View, Text, 
    TouchableOpacity, 
    ScrollView,
    ImageBackground,
    Image } from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { TextInput } from 'react-native-gesture-handler';
import { Formik } from 'formik';
import {useAuth } from '../contexts/UserAuthContext'
import {db, auth} from '../backend/firebase';
import * as yup from 'yup'

import COLORS from '../consts/colors';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import FormInput from './FormInput';

const AddCard = ({navigation}) =>{

    const ReviewSchem=yup.object({
        CardName:yup.string().required().min(2),
        CardNumber:yup.string().required().min(16).max(16),
        ExpDate:yup.string().required().min(4).max(4),
        CVV:yup.string().required().min(4).max(4),
    })

    const [CardName, setCardName] = useState("");
    const [CardNumber, setCardNumber] = useState("");
    const [ExpDate, setExpDate] = useState("");
    const [CVV, setCVV] = useState("");

    const addCard=()=>{
        const userid=auth.currentUser.uid

        db.ref('addCard').push({
            CardName,CardNumber,
            ExpDate,CVV
        })
      }


    function renderCard(){
        return(
            <ImageBackground 
            source={require('./images/master.png')}
            style={{ width:350,
                height:200, 
                resizeMode: 'cover', paddingBottom:20, left:5,
                borderRadius:20, overflow:'hidden'}}>

                    {/* Logo */}

                    <Image
                    source={require('./images/visa.png')}
                    resizeMode='contain'
                    style={{
                        position:'absolute',
                        top:20,
                        right:20,
                        height:40,
                        width:80
                    }}
                    />

                    <View
                    style={{
                        position:'absolute',
                        bottom:10,
                        left:0,
                        right:0,
                    paddingHorizontal:20                    }}
                    >
                        <Text
                        style={{color:COLORS.secondary,
                        fontSize:20}}
                        >
                            Leah Makgatho
                        </Text>
                        <View style={{flexDirection:'row'
                    }}>
                        <Text style={{flex:1, color:COLORS.secondary,}}>
                            1234 1234 1234 1234
                        </Text>
                        <Text style={{color:COLORS.secondary}}>12/25</Text>
                        </View>
                    </View>
                        
                   
                </ImageBackground>
         
        )

    }

    

    return(
        

        <ScrollView style={{
            flex:1,
        }}>
        
        {/* Header */}
      {/* //  {renderHeader} */}

        <View style={{flexDirection:'row',
         
         paddingTop:20 }}>
        <Icon name="keyboard-arrow-left" size={38} color='#0b1674'
         style={{justifyContent:'flex-start',marginRight:'85%', marginTop:'5%'}} onPress={navigation.goBack}/>      
        </View>

        <View>
        <Text style={{fontWeight:'bold', fontSize:22, paddingTop:10, 
         color:COLORS.secondary, textAlign:'center'}}>
           My Cards</Text>

        </View>  

        {renderCard()}
        
        <View style={{paddingHorizontal:20, paddingTop:10}}>

        <Formik
        initialValues={{CardName:'',CardNumber:'',CVV:'',ExpDate:''}}
        validationSchema={ReviewSchem}
        onSubmit={(values,action)=>{
            action.resetForm()
         addUser(values)
        }}
       >
           {(props)=>(
         <KeyboardAwareScrollView
             style={styles.innerContainer}>
        
        <Text style={{margin: 10,color:'#0b1674', fontWeight:'bold' }}>Card Holder Name</Text>
        <Text style={{color:'red',marginTop:-10}}>{props.touched.CardName && props.errors.CardName}</Text>

    <TextInput
  style={{height: 50, width: '100%', paddingHorizontal:20,borderColor: '#0b1674', borderWidth: 3, borderRadius:10}}
 placeholder='Card Holder Name'
 onChange={(e) => setCardName(e.target.value)}
 value={CardName}
 onBlur={props.handleBlur('CardName')}
        />

<Text style={{margin: 10,color:'#0b1674', fontWeight:'bold' }}>Card Number</Text>
<Text style={{color:'red',marginTop:-10}}>{props.touched.CardNumber && props.errors.CardNumber}</Text>

    <TextInput
  style={{height: 50, width: '100%',paddingHorizontal:20, borderColor: '#0b1674', borderWidth: 3, borderRadius:10}}
  placeholder='Card Number'
  onChange={(e) => setCardNumber(e.target.value)}
  value={CardNumber}
  onBlur={props.handleBlur('CardNumber')}
/>

<View style={{flexDirection:'row', justifyContent:'space-between'}}>
<Text style={{margin: 10,color:'#0b1674', fontWeight:'bold' }}>Expiry Date</Text>
<Text style={{margin: 10,color:'#0b1674', fontWeight:'bold' }}>CVV Number</Text>
</View>

<View style={{flexDirection:'row', justifyContent:'space-between'}}>
<Text style={{color:'red',marginTop:-10}}>{props.touched.ExpDate && props.errors.ExpDate}</Text>

<TextInput
  style={{height: 50, width: '45%', paddingHorizontal:20, borderColor: '#0b1674', borderWidth: 3, borderRadius:10}}
  placeholder='DD/MM'
  onChange={(e) => setExpDate(e.target.value)}
  value={ExpDate}
  onBlur={props.handleBlur('ExpDate')}
/>
{/* <TextInput
  style={{height: 50, width: '25%', borderColor: '#0b1674', paddingHorizontal:20,borderWidth: 3, borderRadius:10}}
  placeholder='DD'

/> */}
        <Text style={{color:'red',marginTop:-10}}>{props.touched.CVV && props.errors.CVV}</Text>

<TextInput
  style={{height: 50, width: '40%', paddingHorizontal:20,borderColor: '#0b1674', borderWidth: 3, borderRadius:10}}
  placeholder='CVV'
  onChange={(e) => setCVV(e.target.value)}
  value={CVV}
  onBlur={props.handleBlur('CVV')}
/>
</View>
<View style={{paddingTop:20}}>
<TouchableOpacity
                 style={{backgroundColor:COLORS.secondary,width:'45%',height:55,borderRadius:10,
                alignItems:'center'}}
                onPress={addCard}>
                <Text style={{color:'#fff',fontSize: 16, marginTop:15, fontWeight:'bold'}}>
                    Add Card
                </Text>
            </TouchableOpacity>
</View>
</KeyboardAwareScrollView>
            )}</Formik>  
                  </View>
        
        </ScrollView>     
    )
}
export default AddCard;

const styles = StyleSheet.create({
    container: {
        flex:1,
        alignItems: 'center',
        justifyContent: 'center',
    },


 
 
innerContainer:{
  marginTop:20
},
 
})