import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import SignedInNavigator from './src/navigators/SignedInNavigator';
import SignedOutNavigator from './src/navigators/SignedOutNavigator';
import Splash from './src/screens/Splash';
import Toast from './src/widgets/Toast';
import Loader from './src/widgets/Loader';
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
      <Toast
        ref={ref => {
          global.toast = ref;
        }}
      />
      <Loader
        ref={ref => {
          global.loader = ref;
        }}
      />
    </NavigationContainer>
    // </PaperProvider>
  );
};

export default App;
