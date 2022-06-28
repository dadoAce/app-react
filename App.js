import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from './screen/login/login';
import Dashboard from './screen/dashboard/dashboard';
import Signup from './screen/signup/signup';
import Getstarted from './screen/getstarted/Getstarted';
import Registro from './screen/registro/Registro';
import Signup_complet from './screen/signup_complet/Signup_complet';
import enter_code from './screen/enter_code/enter_code';

const Stack = createNativeStackNavigator();

export default function App() {
  return (

    <NavigationContainer>

      <Stack.Navigator initialRouteName='Signup' screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Enter_code" component={enter_code} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Signup" component={Signup} />
        <Stack.Screen name="Dashboard" component={Dashboard} />
        <Stack.Screen name="Registro" component={Registro} />
        <Stack.Screen name="Getstarted" component={Getstarted} />
      </Stack.Navigator>
    </NavigationContainer>

  );
}

