import React from 'react'
import { View, Text, TouchableOpacity, ActivityIndicator, Button } from 'react-native'
import axios from 'axios'
import { useState, useEffect } from 'react'
// import {StatusBar} from 'expo-status-bar'
// import { StyleSheet } from 'react-native'



export default function Home({navigation}) {
    // const [place, setPlaces] = useState('')

    // useEffect(() => {
    //     const getDataFromPlaces = async () => {
    //         const response = await axios.get('http://localhost:3001/api/places')
    //             setPlaces(response.data)
    //             .catch(err => console.log("oh no!!"))
    //     }
    //     getDataFromPlaces()
    // })

    

        // if (error) {
        //     return <Text>(error)</Text>
        // }

    // const fetchApi = async () => {
    //     try {
    //         const res = await axios.get('http://localhost:3001/api/places')
    //         console.log(res.data)

    //     } catch (error) {
    //         console.log(error.message)
    //     }
    // }


// useEffect (() => {
//     fetchApi()
// }, [])

const [data, setData] = useState(null);

const fetchData = async () => {
    try {
        const response = await axios.get('http://localhost:3001/api/places');
        setData(response.data);
    } catch (error) {
        console.error(error);
    }
};

    return (
        // <View style={{flex:1, alignItems: 'center', justifyContent: 'center', backgroundColor: "aqua"}}>
        //     <Text style={{ fontsize: 24, fontWeight: 'bold', }}>Welcome to Scout. Lets find your next adventure!</Text>

        //     <TouchableOpacity >
        //     <Text>Places</Text>
        //     </TouchableOpacity>
        //     </View>

        <>
    {data ? (
        <Text>{data.message}</Text>
    ) : (
        <ActivityIndicator />
    )}
    <Button title="Fetch Data" onPress={fetchData} />
    </>
    )
}





