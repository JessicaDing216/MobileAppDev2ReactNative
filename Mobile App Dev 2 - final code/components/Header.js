import { Text, View, Button, TextInput, StyleSheet, SafeAreaView } from 'react-native';
import ThemedView from './ThemedView';

const Header = ({ cityName }) => {
  return (
    <ThemedView>
      <Text style={styles.headerStyle}>{cityName}</Text>
    </ThemedView>
  );
};

const styles = StyleSheet.create({
  headerStyle: {
    margin: 10,
    fontSize: 40,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default Header;
