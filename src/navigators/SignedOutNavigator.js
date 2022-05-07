import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from '../screens/auth/Login';
import Verification from '../screens/auth/Verification';
import { Text, View } from 'react-native';
const Stack = createNativeStackNavigator();

export default function SignedOutNavigator() {
  return (
    <Stack.Navigator
      initialRouteName="Login"
      screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Verification" component={Verification} />
    </Stack.Navigator>
  );
}
