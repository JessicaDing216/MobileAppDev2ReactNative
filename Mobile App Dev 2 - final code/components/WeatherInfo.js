import { Image, Text, View, StyleSheet, SafeAreaView } from 'react-native';
import { useState } from 'react';
import ThemedView from './ThemedView';

const WeatherInfo = ({ cityName }) => {
  const [weatherData, setWeatherData] = useState(null);
  const API_KEY = 'd213cb6747b9f0f6b320c3d78cfca46a';
  const API_ENDPOINT = 'https://api.openweathermap.org/data/2.5/weather';

  const fetchWeatherData = async (city) => {
    try {
      const response = await fetch(
        `${API_ENDPOINT}?q=${city}&units=metric&appid=${API_KEY}`
      );
      const data = await response.json();
      setWeatherData(data);
    } catch (error) {
      console.error('Error fetching weather data:', error);
    }
  };
  const handleCityChange = (newCity) => {
    fetchWeatherData(newCity);
  };

  // Fetch data when the cityName changes
  if (cityName) {
    handleCityChange(cityName);
  }

  //using the provided icon from the openweather api
  const getWeatherIcon = () => {
    if (weatherData) {
      const weatherIcon = weatherData.weather[0].icon;
      return `http://openweathermap.org/img/w/${weatherIcon}.png`;
    } else {
      return require('../assets/snack-icon.png');
    }
  };

  return (
    <ThemedView>
      <Text style={styles.headerStyle}>Weather Info</Text>
      <Image style={styles.logo} source={{ uri: getWeatherIcon() }} />
      {weatherData && (
        <View>
          <Text style={styles.paragraph}>
            Temperature: {weatherData.main.temp} °C
          </Text>
          <Text style={styles.paragraph}>
            Weather Condition: {weatherData.weather[0].main}
          </Text>
          <Text style={styles.paragraph}>
            Wind Speed: {weatherData.wind.speed} m/s
          </Text>
        </View>
      )}
    </ThemedView>
  );
};

const styles = StyleSheet.create({
  headerStyle: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  logo: {
    width: 150,
    height: 150,
  },
  paragraph: {
    margin: 5,
    fontSize: 15,
    textAlign: 'center',
    padding: 3,
  },
});

export default WeatherInfo;
