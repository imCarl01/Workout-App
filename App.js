import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import OnboardingScreen from './StackScreen/OnboardingScreen';
import Login from './StackScreen/Login';
import Register from './StackScreen/Register';
import ProfileStack from './StackScreen/ProfileStack';
import Home from './TaBScreen/Home';
import Profile from './TaBScreen/Profile';
import Workout from './TaBScreen/Workout';
import Splash from './StackScreen/Splash';
import Activities from './TaBScreen/Activities';
import Progress from './TaBScreen/Progress';
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
import AntDesign from '@expo/vector-icons/AntDesign';
import Ionicons from '@expo/vector-icons/Ionicons';
import Abs from './WorkoutScreen/Abs';
import Chest from './WorkoutScreen/Chest';
import Arms from './WorkoutScreen/Arms';
import Legs from './WorkoutScreen/Legs';
import Back from './WorkoutScreen/Back';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

function TabNav(){
  return(
    <Tab.Navigator screenOptions={{tabBarActiveTintColor:"#F21B14",}}>
        <Tab.Screen name='Home' component={Home} 
        options={{headerShown:false,tabBarIcon:({color})=><FontAwesome5 name="home" size={24} color={color} />}}/>

        <Tab.Screen name='Workout' component={Workout} 
        options={{headerShown:false,tabBarIcon:({color})=><FontAwesome6 name="dumbbell" size={24} color={color} />}}/>

        <Tab.Screen name='Activities' component={Activities} 
        options={{tabBarIcon:({color})=><FontAwesome5 name="running" size={24} color={color} />}}/>

        <Tab.Screen name='Progress' component={Progress} 
        options={{tabBarIcon:({color})=><AntDesign name="areachart" size={24} color={color} />}}/>

        <Tab.Screen name='Profile' component={Profile} 
        options={{tabBarIcon:({color})=><Ionicons name="person-sharp" size={24} color={color} />}} />
    </Tab.Navigator>
  )
}


export default function App() {
  return ( 
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown:false}}>
        <Stack.Screen name='Splash' component={Splash}/>
        <Stack.Screen name='OnboardingScreen' component={OnboardingScreen}/>
        <Stack.Screen name='Login' component={Login}/>
        <Stack.Screen name='Register' component={Register}/>
        <Stack.Screen name='ProfileStack' component={ProfileStack}/>
        <Stack.Screen name='HomeT' component={TabNav}/>
        <Stack.Screen name='Abs' component={Abs}/>
        <Stack.Screen name='Chest' component={Chest}/>
        <Stack.Screen name='Arms' component={Arms}/>
        <Stack.Screen name='Legs' component={Legs}/>
        <Stack.Screen name='Back' component={Back}/>
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
