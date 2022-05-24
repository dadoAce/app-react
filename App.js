import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from './screen/login/login';
import Dashboard from './screen/dashboard/dashboard';
import signup from './screen/signup/signup';


const Stack = createNativeStackNavigator();

export default function App() {
  return (

    <NavigationContainer>

      <Stack.Navigator initialRouteName='signup' screenOptions={{ headerShown: false }}>
        <Stack.Screen name="signup" component={signup}  />
        <Stack.Screen name="Dashboard" component={Dashboard}  />
      </Stack.Navigator>
    </NavigationContainer>

  );
}
 
