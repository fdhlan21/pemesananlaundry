// In App.js in a new project

import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MyStack from './routes/stack';
import FlashMessage from 'react-native-flash-message';

function App() {
  return (
    <>
    <NavigationContainer>
   <MyStack/>
    </NavigationContainer>
    <FlashMessage position='top'/>
    </>
  );
}

export default App;