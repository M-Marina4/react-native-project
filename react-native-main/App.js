// import './App.css';
import MyTabs from './Components/Tab/Tab';
import Home from "./Pages/Home";
import Profile from "./Pages/Profile";
import Following from "./Pages/Following";
import Discover from "./Pages/Discover";
import NoPage from "./Pages/NoPage";
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';

export default function App() {
  return (
    <NavigationContainer>
      <MyTabs />
    </NavigationContainer>
  );
}

