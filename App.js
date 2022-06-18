import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from './screen/login/login';
import Dashboard from './screen/dashboard/dashboard';
import signup from './screen/signup/signup';
import getstarted from './screen/getstarted/getstarted';
import companyname from './screen/companyname/companyname'; 
import signup_complet from './screen/signup_complet/signup_complet';
import enter_code from './screen/enter_code/enter_code';

const Stack = createNativeStackNavigator();

export default function App() {
  return (

    <NavigationContainer>

      <Stack.Navigator initialRouteName='enter_code' screenOptions={{ headerShown: false }}>
        <Stack.Screen name="enter_code" component={enter_code}  />
        <Stack.Screen name="Dashboard" component={Dashboard}  />
      </Stack.Navigator>
    </NavigationContainer>

  );
}
 
