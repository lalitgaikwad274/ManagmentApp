import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Toast from 'react-native-toast-message';

import DetailsScreen from './src/Componets/DetailsScreen';
import Dashboard from './src/Componets/Dashboard';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Dashboard">
        <Stack.Screen name="Dashboard" component={Dashboard} />
        <Stack.Screen name="Details" component={DetailsScreen} />
      </Stack.Navigator>
      <Toast/>
    </NavigationContainer>
  );
};

export default App;