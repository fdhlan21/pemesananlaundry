// In App.js in a new project

import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SplashScreen from '../../pages/splash';
import LoginScreen from '../../pages/login';
import SignupScreen from '../../pages/signup';
import LoginPageScreen from '../../pages/loginpage';
import HomeScreen from '../../pages/home';
import InformasiLaundry from '../../pages/infomrasilaundry';
import AmbilTanpaRibet from '../../pages/ambiltanparibet';
import AmbilTanpaRibet2 from '../../pages/ambiltanparibet/index2';
import AmbilTanpaRibet3 from '../../pages/ambiltanparibet/index3';
import AmbilTanpaRibet4 from '../../pages/ambiltanparibet/index4';
import PilihSendiri1 from '../../pages/pilihsendiri';
import PilihSendiri2 from '../../pages/pilihsendiri/index2';
import PilihSendiri3 from '../../pages/pilihsendiri/index3';
import PilihSendiri4 from '../../pages/pilihsendiri/index4';
import PilihSendiri5 from '../../pages/pilihsendiri/index5';
import CancelPilihSendiri1 from '../../pages/pilihsendiri/cancel1';
import CancelPilihSendiri2 from '../../pages/pilihsendiri/cancel2';
import QrisPilihSendiri1 from '../../pages/pilihsendiri/qris1';
import QrisPilihSendiri2 from '../../pages/pilihsendiri/qris2';
import Profile1 from '../../pages/profile/profile1';


const Stack = createNativeStackNavigator();

function MyStack() {
  return (
      <Stack.Navigator initialRouteName='HomeScreen'>
        <Stack.Screen name="SplashScreen" component={SplashScreen} options={{headerShown:false}}/>
        <Stack.Screen name="LoginScreen" component={LoginScreen} options={{headerShown:false}}/>
        <Stack.Screen name="SignupScreen" component={SignupScreen} options={{headerShown:false}}/>
        <Stack.Screen name="loginPageScreen" component={LoginPageScreen} options={{headerShown:false}}/>
        <Stack.Screen name="HomeScreen" component={HomeScreen} options={{headerShown:false}}/>
        <Stack.Screen name="InformasiLaudnryScreen" component={InformasiLaundry} options={{headerShown:false}}/>
        <Stack.Screen name="AmbilTanpaRibet" component={AmbilTanpaRibet} options={{headerShown:false}}/>
        <Stack.Screen name="AmbilTanpaRibet2" component={AmbilTanpaRibet2} options={{headerShown:false}}/>
        <Stack.Screen name="AmbilTanpaRibet3" component={AmbilTanpaRibet3} options={{headerShown:false}}/>
        <Stack.Screen name="AmbilTanpaRibet4" component={AmbilTanpaRibet4} options={{headerShown:false}}/>
        <Stack.Screen name="PilihSendiri1" component={PilihSendiri1} options={{headerShown:false}}/>
        <Stack.Screen name="PilihSendiri2" component={PilihSendiri2} options={{headerShown:false}}/>
        <Stack.Screen name="PilihSendiri3" component={PilihSendiri3} options={{headerShown:false}}/>
        <Stack.Screen name="PilihSendiri4" component={PilihSendiri4} options={{headerShown:false}}/>
        <Stack.Screen name="PilihSendiri5" component={PilihSendiri5} options={{headerShown:false}}/>
        <Stack.Screen name="CancelPilihSendiri1" component={CancelPilihSendiri1} options={{headerShown:false}}/>
        <Stack.Screen name="CancelPilihSendiri2" component={CancelPilihSendiri2} options={{headerShown:false}}/>
        <Stack.Screen name="QrisPilihSendiri1" component={QrisPilihSendiri1} options={{headerShown:false}}/>
        <Stack.Screen name="QrisPilihSendiri2" component={QrisPilihSendiri2} options={{headerShown:false}}/>
        <Stack.Screen name="Profile1" component={Profile1} options={{headerShown:false}}/>


      </Stack.Navigator>
  );
}

export default MyStack;