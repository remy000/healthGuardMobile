import { StyleSheet, Text, View } from 'react-native';
import Login from './screens/Login';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import SignUp from './screens/SignUp';
import Home from './screens/Home';
import UserTab from './screens/UserTab';

const Stack = createStackNavigator();
export default function App() {
  return (
   <NavigationContainer>
    <Stack.Navigator>
    <Stack.Screen name='Login' component={Login}  options={{ headerShown: false }}/>
    <Stack.Screen  name='SignUp' component={SignUp} options={{headerShown:false}}/>
    <Stack.Screen  name='Home' component={UserTab} options={{headerShown:false}}/>
    </Stack.Navigator>
   </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
