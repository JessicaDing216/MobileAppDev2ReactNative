import { View, Text, Image, StyleSheet } from 'react-native';
import ThemedView from './ThemedView';

const WeatherListItem = ({ time, description, temperature, icon }) => {
  const WeaatherIconUrl = 'https://openweathermap.org/img/w/' + icon + '.png';

  return (
    <ThemedView>
      <Text style={styles.paragraph}> {time}</Text>
      <Text style={styles.paragraph}> {description}</Text>
      <Text style={styles.paragraph}> {temperature}</Text>
      <Text style={styles.paragraph}> {icon}</Text>
      <Image style={styles.icon} source={WeaatherIconUrl}></Image>
    </ThemedView>
  );
};

const styles = StyleSheet.create({
  paragraph: {
    margin: 5,
    fontSize: 15,
    padding: 3,
  },
  icon: {
    width: 40,
    height: 40,
  },
});

export default WeatherListItem;
