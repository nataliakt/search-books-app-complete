import React from 'react';
import Reactotron from 'reactotron-react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import { StatusBar } from 'react-native';

import Search from './src/screens/Search';

console.tron = Reactotron
  .configure()
  .useReactNative()
  .connect();

export default function App() {
  return (
    <SafeAreaProvider>
      <StatusBar barStyle="light-content" />
      <Search />
    </SafeAreaProvider>
  );
}
