import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {createAppContainer} from 'react-navigation';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import FacebookScreen from './Screens/fb';
import InstagramScreen from './Screens/in';

export default class App extends React.Component {
  render(){
    return (
      <AppContainer/>
    );
  }
}

const TabNavigator = createBottomTabNavigator({
  FB:FacebookScreen,
  IN:InstagramScreen
})

const AppContainer = createAppContainer(TabNavigator);
