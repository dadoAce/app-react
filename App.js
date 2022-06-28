import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from './screen/login/login';
import Dashboard from './screen/dashboard/dashboard';
import signup from './screen/signup/signup';
import getstarted from './screen/getstarted/getstarted';
import Registro from './screen/registro/Registro'; 
import Signup_complet from './screen/signup_complet/Signup_complet';
import enter_code from './screen/enter_code/enter_code';

const Stack = createNativeStackNavigator();

export default function App() {
  return (

    <NavigationContainer>

      <Stack.Navigator initialRouteName='Login' screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Enter_code" component={enter_code}  />
        <Stack.Screen name="Login" component={Login}  />
        <Stack.Screen name="Signup" component={signup}  />
        <Stack.Screen name="Dashboard" component={Dashboard}  />
        <Stack.Screen name="Registro" component={Registro}  />
      </Stack.Navigator>
    </NavigationContainer>

  );
}
 
