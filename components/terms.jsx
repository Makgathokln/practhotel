import * as React from 'react';
import {View, Text,StyleSheet, ImageBackground} from 'react-native';
import { FlatList,
    ScrollView,
     TextInput 
   } from 'react-native-gesture-handler';


const  terms = ({navigation, route}) => {
    return(

        <View>
            <Text>Hi</Text>
        </View>

        );
    };

    const style = StyleSheet.create ({
        headerImage:{
            height:400,
            borderBottomRightRadius:10,
            borderBottomLeftRadius:40,
            overflow:'hidden',
        }
    })
export default terms 
