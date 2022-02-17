import React from 'react';
import {View, Text, TouchableOpacity,Image} from 'react-native'

export default function SearchUserItem( {item}) {
    return (
        <TouchableOpacity>
            <Text>{item.name}</Text>
            <Image uri={{uri:item.images}}/>
        </TouchableOpacity>
    )
}