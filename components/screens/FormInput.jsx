import React, {useState, useEffect} from 'react';
import { StyleSheet, 
    View, Text,
    
    TouchableOpacity, 
    ScrollView } from 'react-native';
    import { TextInput } from 'react-native-gesture-handler';

import Feather from 'react-native-vector-icons/Feather';
import Icon from 'react-native-vector-icons/MaterialIcons';
import COLORS from '../consts/colors';

const FormIput = ({
  containerStyle,
  inputContainerStyle,
  label,
  placeholder,
  inputStyle,
//   value = "",
  prependComponent,
  appendComponent,
  onChange,
  secureTextEntry,
//   keyboardType = "default",
//   autoCompleteType = 'off',
//   autoCapitalize = "none",      
     errorMsg,
    maxLength
}) =>{
    return (
        <View style={{...containerStyle}}>
            <View style={{
                flexDirection:'row',
                justifyContent:'space-between'
            }}>
                    <Text style={{color:COLORS.gray}}>
                        {label}
                    </Text>
                    <Text style={{color:'red'}}>
                        {errorMsg}
                    </Text>
            </View>

            <View style={{
                flexDirection:'row',
                height:70,
                paddingHorizontal:20,
                marginTop:20,
                borderRadius:10,
                backgroundColor:'#e6f2ff'
            }}>

                {
                    prependComponent
                }
                    <TextInput style={{flex:1,}}
                    placeholderTextColor={  COLORS.gray}
                    secureTextEntry={secureTextEntry}
                    />
                    {
                    appendComponent
                }
            </View>
        </View>
    )
}
export default FormIput