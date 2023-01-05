// import * as Location from 'expo-location'

// // import Button from './components/GoToUser'


// import { View, StyleSheet } from 'react-native';


// const App = () => {

//   //hardcoded Sacramento,CA regionView
// const [mapRegion, setmapRegion] = useState({
//     latitude: 38.5816,
//     longitude: -121.4944,
//     latitudeDelta: 0.0922,
//     longitudeDelta: 0.0421,
//     });
// return (
//     <View style={styles.container}>
//     <MapView
//         style={{ alignSelf: 'stretch', height: '100%' }}
//         region={mapRegion}
//     />
//     </View>
//     );
// };
// export default App;
// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//     },
// });

import * as React from 'react'
import { View, Text, StyleSheet, Dimensions } from 'react-native'
import MapView from 'react-native-maps'
// import { PROVIDER_GOOGLE } from 'react-native-maps'
import { useState, useEffect } from 'react'
import { Marker } from 'react-native-maps'
import axios from "axios"



export default function SkateParks({navigation}) {
    const [marker, setMarker] = useState(null)
    
    useEffect(() => {
        axios({
            method: "GET",
            url: "http:localhost3001/api/skateparks"
        })
        .then((response) => {
            setMarker(response.data.results)
        })
        .catch((error) => {
            console.log(error)
        })

    }, [])

    



    const [mapRegion, setmapRegion] = useState({
        latitude: 38.5816,
        longitude: -121.4944,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
        });

    return (
        // <View style={{flex:1, alignItems: 'center', justifyContent: 'center'}}>
        //     <Text onPress={() => alert("this is skateparks")}
        //         style={{ fontsize: 24, fontWeight: 'bold'}}>skateparks Screen</Text>

        // </View>

        <View style={styles.container}>
            <MapView
            style={{ alignSelf: 'stretch', height: '100%' }}
            region={mapRegion}>
            {marker &&
                markers.map((marker: any, index: number) =>(
                    <Marker 
                    key={index}
                    coordinate={{
                        latitude: marker.location[1],
                        longitude: marker.location[0],
                    }}
                    tittle={marker.title}
                    />
                ))}

            </MapView>
        </View>

    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});