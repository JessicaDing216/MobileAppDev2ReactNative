import { Text, Button, StyleSheet, SafeAreaView, View, Linking, Platform, Appearance, useColorScheme } from 'react-native';

import React, { useState, useRef } from 'react';
import * as Location from 'expo-location';

import { useTheme } from './ThemeContext';
import ThemedView from './ThemedView';


const SettingView = () => {
  //Location request
  const [currentLocation, setCurrentLocation] = useState({
    currentLatitude: 'Unknown',
    currentLongtitude: 'Unknown',
  });

  const getCurrentPosition = async () => {
    const result = await Location.requestForegroundPermissionsAsync();

    console.log(result);

    console.log('getting info');

    const location = await Location.getCurrentPositionAsync({});
    setCurrentLocation({
      currentLatitude: location.coords.latitude,
      currentLongtitude: location.coords.longitude,
    });
    console.log(location);
  };

  //open map request
  const showMapWithCurrentLocation = () => {
    const url = Platform.select({
      android: `geo:$(currentLocation.currentLatitude),$(currentLocation.currentLongtitude)`,
      ios: `maps:$(currentLocation.currentLatitude),$(currentLocation.currentLongtitude)`,
    });
    Linking.openURL(url);
  };


  const { toggleTheme } = useTheme();



  return (    
    <ThemedView>
      <View style={styles.container}>
        <Text style={styles.paragraph}>
          {'Latitude: ' + currentLocation.currentLatitude}
        </Text>
        <Text style={styles.paragraph}>
          {'Longtitude: ' + currentLocation.currentLongtitude}
        </Text>
        <Text> </Text>
        <Button
          title="Get Current Position"
          onPress={getCurrentPosition}
          style={styles.buttons}
        />
        <Text> </Text>
        <Button
          title="Checkout Map!"
          onPress={showMapWithCurrentLocation}
          style={styles.buttons}
        />
        <Text> </Text>

        <Button title="Toggle Theme" onPress={toggleTheme} />

      </View>
    </ThemedView>

  );
};

const styles = StyleSheet.create({
  headerBackground: {
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ecf0f1',
    padding: 4,
  },
  paragraph: {
    margin: 10,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default SettingView;
