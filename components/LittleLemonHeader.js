import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

export default function LittleLemonHeader() {
    return (
        <View style={style.container}>
            <Text numberOfLines={0} style={style.header}>Little Lemon</Text>
        </View>
    )
}

const style = StyleSheet.create({
    container: {
        flex: 0.2,
        paddingTop: 65,
        backgroundColor: '#F4CE14'
    },
    header: {
        fontSize: 30,
        textAlign: 'center',
        color: 'black',
        fontWeight: 'bold'
    }
});