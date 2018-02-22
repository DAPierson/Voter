import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Image,
  Text,
} from 'react-native';
import {Button} from 'react-native-elements';



export default class PredScreen extends Component {
  static navigationOptions = { headerStyle:{ position: 'absolute', backgroundColor: 'transparent', zIndex: 100, top: 0, left: 0, right: 0 } };
  constructor(props) {
    super(props)
    this.state = {}
  }

  navigate(e) {
    this.props.navigation.navigate('Projects');
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={{ flex: 1, backgroundColor: 'rgb(255,184,28)' }}></View>
        <View style={styles.imgContainer}>
          <Text style={styles.text}>Smashville</Text>
          <Image style={styles.img} source={require('../imgs/preds.png')} />
          <Text style={styles.text}>Predators</Text>
          <Button title="See Projects" color="rgb(255,184,28)" buttonStyle={{backgroundColor:'rgb(4,30,66)',}}
   onPress={(e) => { this.navigate(e) }} />
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