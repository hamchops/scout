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

        const getData = async () => {
            const response = await axios.get(`https://localhost:3001/api/skateparks`)
                setMarker(response.data)
                .catch(err => console.log("Something went wrong"))
    
        }
        getData()
    }, [])

    const [mapRegion, setmapRegion] = useState({
        latitude: 38.5816,
        longitude: -121.4944,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
        });

    return (
        <View style={styles.container}>
            <MapView
            style={{ alignSelf: 'stretch', height: '100%' }}
            region={mapRegion}>
            {/* { marker.map((geolocation) =>(
                    <Marker 
                    
                    />
                ))} */}

        {

                marker && locations.map((location, index) => {
                    const {
                        coords: { latitude, longitude }
                } = location;
                    return (
                        <MapView.Marker
                            key={index}
                            coordinate={{ latitude, longitude }}
                            title={"title"}
                            description={"address"}
                            onPress={this.onMarkerPress(location)}
                        />
                )
            })
        }

            </MapView>
        </View>

    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});





