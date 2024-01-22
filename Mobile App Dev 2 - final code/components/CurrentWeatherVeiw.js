import { useState } from 'react';
import { StyleSheet } from 'react-native';

import Header from '../components/Header';
import WeatherInfo from './WeatherInfo';
import LocationInput from './LocationInput';
import ThemedView from './ThemedView';


const CurrentWeatherView = () => {
  const [locationName, setLocationName] = useState('Tampere');
  const handleCityChange = (newCity) => {
    setLocationName(newCity); // Update the city name
  };

  return (
    <ThemedView>
      <Header cityName={locationName}></Header>
      <WeatherInfo cityName={locationName}></WeatherInfo>
      <LocationInput onCityChange={handleCityChange} />
    </ThemedView>

  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 30,

    flex: 1,
    justifyContent: 'center',
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

export default CurrentWeatherView;
