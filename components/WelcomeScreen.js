import { View, Text, ScrollView } from 'react-native'
import React from 'react'

export default function WelcomeScreen() {
    return (
        <View style={{ flex: 1, }}>
            <ScrollView indicatorStyle='white'>
                <Text style={{
                    padding: 40,
                    color: "#EDEFEE",
                    fontSize: 30,
                    textAlign: 'center'
                }}>Welcome to Little Lemon
                </Text>
                <Text style={{
                    padding: 20,
                    fontSize: 54,
                    marginVertical: 8,
                    color: '#EDEFEE',
                    textAlign: 'center'
                }}>Little Lemon is a charming neighborhood bistro that serves simple food and classic cocktails in a lively but casual environment. We would love to hear more about your experience with us!</Text>
            </ScrollView>
        </View>
    )
}