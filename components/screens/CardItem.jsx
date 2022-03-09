import React, {useState, useEffect} from 'react';
import { StyleSheet, 
    View, Dimensions , 
    TouchableOpacity, 
    ScrollView } from 'react-native';
    import MapView from 'react-native-maps';

import Feather from 'react-native-vector-icons/Feather';
import Icon from 'react-native-vector-icons/MaterialIcons';
import COLORS from '../consts/colors';

const CardItem = ({navigation,route}) =>{
    const item = route.params;
    console.log(item);
    return (
        <View style={styles.container}>
          {/* <MapView style={styles.map} /> */}
          
          <MapView style={styles.map}
    initialRegion={{
      latitude: {latitude},
      longitude: {longitude},
      latitudeDelta: 0.0922,
      longitudeDelta: 0.0421,
    }}
  />
        </View>
      );
    }
    
    const styles = StyleSheet.create({
      container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
      },
      map: {
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height,
      },
    });
export default CardItem;