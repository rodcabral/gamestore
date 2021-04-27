import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'react-native';

import AppLoading from 'expo-app-loading';

import {
  useFonts,
  Inter_400Regular,
  Inter_500Medium,
  Inter_600SemiBold,
} from '@expo-google-fonts/inter';
import Tabs from './src/routes/tabs';

export default function App() {

  const [fontsLoaded] = useFonts({
    Inter_400Regular,
    Inter_500Medium,
    Inter_600SemiBold,
  });

  if (!fontsLoaded)
    return <AppLoading />

  return (
    <NavigationContainer>
      <StatusBar backgroundColor="#35343D" />
      <Tabs />
    </NavigationContainer>
  );
}