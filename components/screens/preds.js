import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Image,
  Text,
} from 'react-native';

export default class Preds extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={{ flex: 1, backgroundColor: 'rgb(255,184,28)' }}></View>
        <View style={styles.imgContainer}>
          <Text style={styles.text}>Smashville</Text>
          <Image style={styles.img} source={require('./components/imgs/preds.png')} />
          <Text style={styles.text}>Predators</Text>
        </View>
        <View style={{ flex: 1, backgroundColor: 'rgb(255,184,28)' }}></View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    padding: 17,
    flex: 1,
    backgroundColor: 'white',
  },
  img: {
    height: 125,
    width: 225,
    left: 10,
  },
  imgContainer: {
    flex: 5,
    backgroundColor: 'rgb(4,30,66)',
    justifyContent: 'center',
  },
  text: {
    color: 'white',
    fontSize: 50,
    textAlign: 'center',
    fontWeight: 'bold',
  }
});