import { View, Text } from 'react-native'
import React from 'react'

export default function WelcomeScreen() {
    return (
        <View style={{
            marginTop: 40,
            marginLeft: 40
        }}>
            <Text style={{
                color: "#EDEFEE",
                fontSize: 30,
                textAlign: 'center'
            }}>Welcome to Little Lemon
            </Text>
            <Text style={{
                padding: 20,
                fontSize: 24,
                marginVertical: 8,
                color: '#EDEFEE',
                textAlign: 'center'
            }}>Little Lemon is a charming neighborhood bistro that serves simple food and classic cocktails in a lively but casual environment. We would love to hear more about your experience with us!</Text>
        </View>
    )
}