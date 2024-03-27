import {StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';
import {OnboardFlow} from 'react-native-onboard';
import HomeScreen from './src/screens/HomeScreen';

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import CalenderScreen from './src/screens/CalenderScreen';
import MessageScreen from './src/screens/MessageScreen';
import ProfileScreen from './src/screens/ProfileScreen';
import OnBoard from './src/screens/OnBoard/OnBoard';
import SearchScreen from './src/screens/SearchScreen';
import DetScreen from './src/screens/DetScreen';

import {GestureHandlerRootView} from 'react-native-gesture-handler';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Home"
            component={HomeScreen}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="Detail"
            component={DetScreen}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="Calender"
            component={CalenderScreen}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="Search"
            component={SearchScreen}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="Message"
            component={MessageScreen}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="Profile"
            component={ProfileScreen}
            options={{headerShown: false}}
          />
        </Stack.Navigator>
      </NavigationContainer>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
