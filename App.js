import { StyleSheet, Text, View } from 'react-native';
import Login from './screens/Login';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import SignUp from './screens/SignUp';
import Home from './screens/Home';
import UserTab from './screens/UserTab';
import PatientProfile from './screens/PatientProfile';
import MedicalPlan from './screens/MedicalPlan';
import Personalised from './screens/Personalised';
import Exercise from './screens/Exercise';
import Dietary from './screens/Dietary';
import Appointment from './screens/Appointment';
import Report from './screens/Report';

const Stack = createStackNavigator();
export default function App() {
  return (
   <NavigationContainer>
    <Stack.Navigator>
    <Stack.Screen name='Login' component={Login}  options={{ headerShown: false }}/>
    <Stack.Screen  name='SignUp' component={SignUp} options={{headerShown:false}}/>
    <Stack.Screen  name='Home' component={UserTab} options={{headerShown:false}}/>
    <Stack.Screen  name='profile' component={PatientProfile} options={{headerShown:false}}/>
    <Stack.Screen  name='medical' component={MedicalPlan} options={{headerShown:false}}/>
    <Stack.Screen  name='personal' component={Personalised} options={{headerShown:false}}/>
    <Stack.Screen  name='exercise' component={Exercise} options={{headerShown:false}}/>
    <Stack.Screen  name='dietary' component={Dietary} options={{headerShown:false}}/>
    <Stack.Screen  name='appointment' component={Appointment} options={{headerShown:false}}/>
    <Stack.Screen  name='report' component={Report} options={{headerShown:false}}/>
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
