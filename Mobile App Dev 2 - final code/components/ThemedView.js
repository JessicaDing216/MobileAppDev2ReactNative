// ThemedView.js
import { View, StyleSheet,Text } from 'react-native';
import { useTheme } from './ThemeContext';

const ThemedView = ({ children }) => {
  const { container, text } = useTheme();
  return <View style={[container, styles.container]}> <Text style={text}>{children}</Text>
</View>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default ThemedView;
