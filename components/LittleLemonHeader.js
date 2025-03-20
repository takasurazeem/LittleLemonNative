import { View, Text } from 'react-native'
import React from 'react'

export default function LittleLemonHeader() {
    return (
        <View style={{
            flex: 0.2,
            paddingTop: 65,
            backgroundColor: '#F4CE14'
        }}>
            <Text numberOfLines={0} style={{
                fontSize: 30,
                textAlign: 'center',
                color: 'black',
                fontWeight: 'bold'
            }}>Little Lemon</Text>
        </View>
    )
}