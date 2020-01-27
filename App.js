import React, { Component } from 'react';
import { Platform, StyleSheet, Text, TouchableHighlight, TouchableOpacity, TouchableNativeFeedback, TouchableWithoutFeedback, View } from 'react-native';

export default class Touchables extends Component {
  // Event function for onPress event
  constructor(props) {
    super(props);
    this.state = {text: 'hi'};
  }

  componentDidMount = () => {
    this.ws = new WebSocket('ws://172.26.226.69:3000/inventory_manager/');

    this.ws.onopen = () => {
      this.ws.send('hello2');
    }

    this.ws.onmessage = (event) => {
      var parsedMessage = JSON.parse(event.data);
      console.log(parsedMessage);
      // var stringShow = "";
      // for (var key in parsedMessage) {
      //   if (key == 'deliverySchedule') {
      //     stringShow += "" + key + ": ";
      //     for (var address in key) {
      //       stringShow += "" +address + parsedMessage[key][address] + "\n";
      //     }
      //   }
      //   stringShow += "" + key + ": " + parsedMessage[key] + "\n";
      // }
      // this._setText(stringShow);
      this._setText(event.data);
    }
  }

  _onPressLoad = () => {
    this.ws.send('load');
  }
  _onPressUnload = () => {
    this.ws.send('unload')
  }
  _onPressMaintenance = () => {

    this.ws.send('maintenance') 
  }
  _onPressOperating = () => {
    this.ws.send('operating')
  }
  _onPressReplenishment = () => {
    this.ws.send('replenishment')
  }
  _setText = (newText) => {
    this.setState((state, props) => {
      return {text: newText};
  });}


  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.textField}>
          {this.state.text}
        </Text>
        <TouchableHighlight onPress={this._onPressLoad} underlayColor="white">
          <View style={styles.button}>
            <Text style={styles.buttonText}>Load</Text>
          </View>
        </TouchableHighlight>
        <TouchableHighlight onPress={this._onPressUnload} underlayColor="white">
          <View style={styles.button}>
            <Text style={styles.buttonText}>Unload</Text>
          </View>
        </TouchableHighlight>
        <TouchableHighlight onPress={this._onPressMaintenance} underlayColor="white">
          <View style={styles.button}>
            <Text style={styles.buttonText}>Maintenance</Text>
          </View>
        </TouchableHighlight>
        <TouchableHighlight onPress={this._onPressOperating} underlayColor="white">
          <View style={styles.button}>
            <Text style={styles.buttonText}>Operating</Text>
          </View>
        </TouchableHighlight>
        <TouchableHighlight onPress={this._onPressReplenishment} underlayColor="white">
          <View style={styles.button}>
            <Text style={styles.buttonText}>Replenishment</Text>
          </View>
        </TouchableHighlight>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 60,
    alignItems: 'center'
  },
  button: {
    marginBottom: 10,
    width: 150,
    height: 45,
    alignItems: 'center',
    backgroundColor: '#2196F3'
  },
  buttonText: {
    textAlign: 'center',
    padding: 10,
    color: 'white',
    fontSize: 15
  },
  textField: {
    textAlign: 'center',
    fontSize: 20,
    marginBottom: 50
  }
});
