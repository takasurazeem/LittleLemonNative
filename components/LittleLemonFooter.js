import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

export default function LittleLemonFooter() {
    return (
        <View style={style.container}>
            <Text style={style.footer}>All rights reserved by Little Lemon, 2025{' '}</Text>
        </View>
    )
}

const style = StyleSheet.create({
    container: {
        backgroundColor: '#F4CE14',
        marginBottom: 10,
    },
    footer: {
        fontSize: 18,
        color: 'black',
        textAlign: 'center'
    }
});