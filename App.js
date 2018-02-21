

import React, { Component } from 'react';
import {
  ScrollView,
  StyleSheet,
  View,
  Image,
  Text,
} from 'react-native';
import {StackNavigator} from 'react-navigation';
import HomeScreen from './components/screens/HomeScreen';
import ProjectDetailScreen from './components/screens/ProjectDetailScreen'

const RootNavigator= StackNavigator({
  Home: {screen: HomeScreen},
  ProjectDetail: {screen: ProjectDetailScreen}
},{ initialRouteName: 'Home'
});

export default class App extends Component {
  render() {
    return (
     <RootNavigator  />
    );
  }
}


