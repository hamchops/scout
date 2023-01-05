import * as React from 'react'
import { View, Text } from 'react-native'

export default function Home({navigation}) {
    return (
        <View style={{flex:1, alignItems: 'center', justifyContent: 'center', backgroundColor: "aqua"}}>
            <Text style={{ fontsize: 24, fontWeight: 'bold', }}>Welcome to Scout. Lets find your next adventure!</Text>

        </View>
    )
}