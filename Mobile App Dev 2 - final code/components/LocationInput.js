import { Text, View, Button, TextInput, StyleSheet, SafeAreaView } from 'react-native';
import { useState } from 'react';
import ThemedView from './ThemedView';

const LocationInput = ({ onCityChange }) => {

  const [input, setInput] = useState('');

// Pass the updated city back to the parent component
  const handleLocation = () => {
    onCityChange(input); 
    setInput(''); // Clear the input field after submitting
  };

  return (
    <SafeAreaView>
    <ThemedView>
      <Text style={styles.paragraph}>Search City:</Text>
      <TextInput style={styles.paragraph} value={input} onChangeText={(text) => setInput(text)}
        placeholder="Enter city name"></TextInput>
      <Button title="Go!" onPress={handleLocation}></Button>
    </ThemedView>
        </SafeAreaView>

  );
};

const styles = StyleSheet.create({
  paragraph: {
    margin: 10,
    fontSize: 18,
    textAlign: 'center',
  },
});

export default LocationInput;
