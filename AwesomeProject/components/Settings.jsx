import * as React from 'react'
import { View, Text } from 'react-native'

export default function Settings({navigation}) {
    return (
        <View style={{flex:1, alignItems: 'center', justifyContent: 'center'}}>
            <Text onPress={() => alert("this is settings")}
                style={{ fontsize: 24, fontWeight: 'bold'}}>Settings</Text>

        </View>
    )
}