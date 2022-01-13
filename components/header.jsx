import * as React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons'

export default function header({navigation}) {
    return(

        <View style={{ flex:1}}>

        <View style={styles.header} >
        <Icon name="bookmark-border" size={26}/>      

        </View>

        </View>
    )
}

const styles = StyleSheet.create({
    header: {
    width:'100%',
    height:'40%',
    paddingVertical: 30,
    borderRadius:10,
    alignItems:'center',
    backgroundColor: '#0b1674',
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    },
})