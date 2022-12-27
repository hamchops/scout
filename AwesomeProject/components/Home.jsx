import * as React from 'react'
import { View, Text } from 'react-native'

export default function Home({navigation}) {
    return (
        <View style={{flex:1, alignItems: 'center', justifyContent: 'center'}}>
            <Text onPress={() => alert("this is homescreen")}
                style={{ fontsize: 24, fontWeight: 'bold'}}>Home Screen</Text>

        </View>
    )
}