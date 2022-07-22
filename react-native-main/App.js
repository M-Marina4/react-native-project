import './App.css';
import MyTabs from './Components/Tab/Tab';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
// import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
// const Tab = createMaterialTopTabNavigator();

export default function App() {
  return (
    <NavigationContainer className = "Container">
      <MyTabs />
    </NavigationContainer>
  );
}

