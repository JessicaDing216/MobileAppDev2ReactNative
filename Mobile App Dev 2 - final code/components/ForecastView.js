import { Text, SafeAreaView, StyleSheet, FlatList, Button } from 'react-native';
import WeatherListItem from './WeatherListItem';
import { useState } from 'react';
import ThemedView from './ThemedView';


const WeatherDataView = () => {
  const [weatherData, setWeatherData] = useState([]);
  const city = 'Tampere'; // Set the city to the desired location

  const API_ENDPOINT = 'https://api.openweathermap.org/data/2.5/forecast';
  const API_KEY = 'd213cb6747b9f0f6b320c3d78cfca46a';

  const fetchWeatherData = async (city) => {
    try {
      const response = await fetch(
        `${API_ENDPOINT}?q=${city}&units=metric&appid=${API_KEY}`
      );
      const data = await response.json();
      setWeatherData(data.list);
    } catch (error) {
      console.error('Error fetching weather data:', error);
    }
  };

  // Fetch weather data when the component renders
  fetchWeatherData(city);

  return (
    <ThemedView>
      <Text style={styles.headerStyle}>Flat List Forecast Data </Text>
      <Text style={styles.headerStyle}>Tampere</Text>
      <Button
        title="Fetch Weather Forecast"
        onPress={() => fetchWeatherData(city)}
      />
      <FlatList
        data={weatherData}
        keyExtractor={(item) => item.dt.toString()}
        renderItem={({ item }) => (
          <WeatherListItem
            time={item.dt_txt}
            description={item.weather[0].description}
            temperature={item.main.temp}
            icon={item.weather[0].icon}
          />
        )}></FlatList>
    </ThemedView>
  );
};

const styles = StyleSheet.create({
  headerStyle: {
    margin: 5,
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

const WeatherData = [
  {
    time: 'monday',
    description: 'sunny',
    temperature: -3,
    windSpeed: 2,
    icon: '01d',
  },
  {
    time: 'tuesday',
    description: 'snow',
    temperature: -5,
    windSpeed: 1,
    icon: '05d',
  },
  {
    time: 'wednesday',
    description: 'sunny',
    temperature: -8,
    windSpeed: 4,
    icon: '02d',
  },
  {
    time: 'thursday',
    description: 'sunny',
    temperature: -8,
    windSpeed: 4,
    icon: '07d',
  },
  {
    time: 'friday',
    description: 'sunny',
    temperature: -8,
    windSpeed: 4,
    icon: '07d',
  },
  {
    time: 'thursday',
    description: 'sunny',
    temperature: -8,
    windSpeed: 4,
    icon: '02d',
  },
  {
    time: 'friday',
    description: 'sunny',
    temperature: -8,
    windSpeed: 4,
    icon: '01d',
  },
];

export default WeatherDataView;
