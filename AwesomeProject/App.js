// import { StatusBar } from 'expo-status-bar';
// import { StyleSheet, Text, View, Pressable } from 'react-native';
// import React, { useState, useEffect } from 'react'
// import MapView from 'react-native-maps'
// import * as Location from 'expo-location'
// import { PROVIDER_GOOGLE } from 'react-native-maps'
// import Button from './components/GoToUser'

import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import MapView from 'react-native-maps';
const App = () => {
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
        region={mapRegion}
      />
    </View>
  );
};
export default App;
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
