

import React, { Component } from 'react';
import {
  ScrollView,
  StyleSheet,
  View,
  Image,
  Text,
} from 'react-native';
import {StackNavigator} from 'react-navigation';
import ProjectScreen from './components/screens/ProjectScreen';
import ProjectTabScreen from './components/screens/ProjectTabScreen';
import PredScreen from './components/screens/PredScreen';

const RootNavigator= StackNavigator({
  Home: {screen: PredScreen},
  Projects: {screen: ProjectScreen},
  ProjectTab: {screen: ProjectTabScreen}
},{ initialRouteName: 'Home'
});

export default class App extends Component {
  render() {
    return (
     <RootNavigator  />
    );
  }
}


