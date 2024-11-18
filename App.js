import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from './screens/HomeScreen';
import ProfileScreen from './screens/ProfileScreen';
import SajatMenu from './screens/SajatMenu';
import DetailsScreen from './screens/DetailsScreen';
import Entypo from '@expo/vector-icons/Entypo';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import SajatMenu2 from './screens/SajatMenu2';

const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

function HomeTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="HomeScreen" component={HomeScreen} 
      options={{ title: 'Home' ,
                headerShown: false,
                tabBarIcon: () => (
                  <Entypo name="home" size={24} color="black" />
                )
      }} />
      <Tab.Screen name="Profile" component={ProfileScreen} />
      <Tab.Screen name="SajatMenu" component={SajatMenu} 
      options={{ title: 'Sajat' ,
                headerShown: false,
                tabBarIcon: () => (
                  <MaterialCommunityIcons name="home-group" size={24} color="black" />
                )
      }} />
    </Tab.Navigator>
  );
}

function HomeStack() {
  return (
    <Stack.Navigator options={{ headerShown: false}}>
      <Stack.Screen name="HomeTabs" component={HomeTabs} options={{ title: 'Home', headerShown: false, }} />
      <Stack.Screen name="Details" component={DetailsScreen} />
    </Stack.Navigator>
  );
}
function SajatStack() {
  return (
    <Stack.Navigator options={{ headerShown: false}}>
      <Stack.Screen name="SajatMenu" component={SajatMenu} options={{ title: 'Saját', headerShown: false }} />
      <Stack.Screen name="SajatMenu2" component={SajatMenu2} options={{ title: 'Saját 2' }} />
       
    </Stack.Navigator>
  );
}
export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="HomeStack" >
        <Drawer.Screen name="HomeStack" component={HomeStack} options={{ title: 'Home' }} />
        <Drawer.Screen name="Profile" component={ProfileScreen} />
        <Drawer.Screen name="SajatStack" component={SajatStack} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
