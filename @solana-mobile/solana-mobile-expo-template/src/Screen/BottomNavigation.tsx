import React, { useState } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from './Home';
import { HomeNavigator } from '../navigators/HomeNavigator';
import ProfileScreen from './Profile';
import MaterialCommunityIcon from "@expo/vector-icons/MaterialCommunityIcons";
const Tab = createBottomTabNavigator();

const BottomNavigation = () => {
   

  return (
    <Tab.Navigator
    screenOptions={({ route }) => ({
    
      tabBarIcon: ({ focused, color, size }) => {
        switch (route.name) {
          case "Home":
              return (
                <MaterialCommunityIcon
                  name={focused ? "home" : "home-outline"}
                  size={size}
                  color={color}
                />
              );
            case "Profile":
              return (
                <MaterialCommunityIcon
                  name={
                    focused ? "application-edit" : "application-edit-outline"
                  }
                  size={size}
                  color={color}
                />
              );
          }
        },
      })}
    >
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Profile" component={ProfileScreen}>
       
      </Tab.Screen>
      <Tab.Screen name="HomeNav" component={HomeNavigator}/>
    </Tab.Navigator>
  );
};

export default BottomNavigation;
