import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import SignedInNavigator from './src/navigators/SignedInNavigator';
import SignedOutNavigator from './src/navigators/SignedOutNavigator';
import Splash from './src/screens/Splash';
// import { Provider as PaperProvider } from 'react-native-paper';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
      // <PaperProvider>
        <NavigationContainer>
          <Stack.Navigator
            screenOptions={{ headerShown: false }}
            initialRouteName="Splash">
            <Stack.Screen name="Splash" component={Splash} />
            <Stack.Screen
              name="SignedOutNavigator"
              component={SignedOutNavigator}
            />
            <Stack.Screen
              name="SignedInNavigator"
              component={SignedInNavigator}
            />
          </Stack.Navigator>
        </NavigationContainer>
      // </PaperProvider>
  );
};

export default App;
