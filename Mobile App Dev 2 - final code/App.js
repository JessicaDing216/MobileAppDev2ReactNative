
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';

import CurrentWeatherView from './components/CurrentWeatherVeiw';
import SettingView from './components/SettingView';
import ForecastView from './components/ForecastView';
import TakePhoto from './components/TakePhoto';

import { ThemeProvider } from './components/ThemeContext';

const Tab = createBottomTabNavigator();

function MyTabs() {

  return (
    <Tab.Navigator useLegacyImplementation>
      <Tab.Screen name="Current Weather" component={CurrentWeatherView} />
      <Tab.Screen name="Forecast" component={ForecastView} />
      <Tab.Screen name="Take Photo" component={TakePhoto} />
      <Tab.Screen name="Settings" component={SettingView} />
    </Tab.Navigator>
  );
}
const MyWeatherApp = () => {

  return (
    
    <ThemeProvider>
      <NavigationContainer>
        <MyTabs />
      </NavigationContainer>
    </ThemeProvider>

  );
};

export default MyWeatherApp;
