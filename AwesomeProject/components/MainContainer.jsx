import * as React from 'react'
// import { View, Text } from 'react-native'

import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Ionicons from 'react-native-vector-icons/Ionicons'


//routes
import Home from './Home'
import SkateParks from './SkateParks'

//tab names
const homeName = 'Home'
const skateParksName = 'SkateParks'

const Tab = createBottomTabNavigator()

export default function MainContainer (){
    return(
        <NavigationContainer>
            <Tab.Navigator
            initialRouteName={homeName}
            screenOptions={({route}) => ({
                tabBarIcon: ({focused, color, size}) => {
                    let iconName;
                    let rn= route.name

                    if (rn === homeName) {
                        iconName = focused ? 'home' : 'home-outline'
                    } 
                    // else if (routeName === detailsName) {
                    //     iconeName = focused ? 'list' : 'list-outline'
                    // }

                    return <Ionicons name={iconName} size={size} color={color}/>
                },
            })}>
                <Tab.Screen name = {homeName} component={Home}/>

            </Tab.Navigator>
        </NavigationContainer>
    )
}