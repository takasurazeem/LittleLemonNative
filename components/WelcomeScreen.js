import { View, Text, ScrollView, StyleSheet } from 'react-native'
import React from 'react'

export default function WelcomeScreen() {
    return (
        <View style={{ flex: 1, }}>
            <ScrollView indicatorStyle='white'>
                <Text style={welcomeScreenStyle.container}>Welcome to Little Lemon
                </Text>
                <Text style={welcomeScreenStyle.body}>Little Lemon is a charming neighborhood bistro that serves simple food and classic cocktails in a lively but casual environment. We would love to hear more about your experience with us!</Text>
            </ScrollView>
        </View>
    )
}

const welcomeScreenStyle = StyleSheet.create({
    container: {
        padding: 40,
        color: "#EDEFEE",
        fontSize: 30,
        textAlign: 'center'
    },
    body: {
        padding: 20,
        fontSize: 54,
        marginVertical: 8,
        color: '#EDEFEE',
        textAlign: 'center'
    }
});