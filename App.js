import React, { useState, Component } from 'react';
import { Platform, StyleSheet, Text, TouchableHighlight, TouchableOpacity, TouchableNativeFeedback, TouchableWithoutFeedback, View } from 'react-native';
import { Table, TableWrapper, Row, Rows, Col, Cols, Cell} from 'react-native-table-component';
import * as Font from 'expo-font';

export default class Touchables extends Component {
  // Event function for onPress event
  constructor(props) {
    super(props);
    this.state = {
      fontLoaded: false,
      text: 'hi',
      nextLoading: [0, 0, 0],
      robotLocation: "",
      robotMode: "",
      deliverySchedule: 
        [['101', 0, 0, 0], 
        ['102', 0, 0, 0], 
        ['103', 0, 0, 0], 
        ['203', 0, 0, 0], 
        ['202', 0, 0, 0], 
        ['201', 0, 0, 0]],
      nextDeliverySchedule: 
        [['101', 0, 0, 0], 
        ['102', 0, 0, 0], 
        ['103', 0, 0, 0], 
        ['203', 0, 0, 0], 
        ['202', 0, 0, 0], 
        ['201', 0, 0, 0]]
    };
  }

  componentDidMount = async () => {
    await Font.loadAsync({
      'Pacifico': require('./assets/fonts/Pacifico.ttf'),
    });
    this.setState({ fontLoaded: true})
    this.ws = new WebSocket('ws://172.26.226.86:3000/inventory_manager/');

    this.ws.onopen = () => {
      this.ws.send('hello2');
    }

    this.ws.onmessage = (event) => {
      var parsedMessage = JSON.parse(event.data);
      console.log(parsedMessage);
      this.setState((state, props) => {
        return parsedMessage;
      });
      // console.log(this.state);
    }
  }

  onPressLoad = () => {
    this.ws.send('load');
  }
  onPressUnload = () => {
    this.ws.send('unload')
  }
  onPressMaintenance = () => {

    this.ws.send('maintenance') 
  }
  onPressOperating = () => {
    this.ws.send('operating')
  }
  onPressReplenishment = () => {
    this.ws.send('replenishment')
  }
  _setText = (newText) => {
    this.setState((state, props) => {
      return {text: newText};
  });}

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.titleView}>
          {
            this.state.fontLoaded ? (
              <Text style={styles.titleAfter}>Roberto Clemente</Text>
            ) : (
              <Text style={styles.titleBefore}>Roberto Clemente</Text>
            )
          }
        </View>
        <View style={styles.statusView}>
          <View style={styles.childStatusView}>
            <Text style={styles.statusLabel}>Location</Text>
            <Text style={styles.statusText}>{this.state.robotLocation.toUpperCase()}</Text>
          </View>
          <View style={styles.childStatusView}>
            <Text style={styles.statusLabel}>Mode</Text>
            <Text style={styles.statusText}>{this.state.robotMode.toUpperCase()}</Text>
          </View>
        </View>
        <View style={styles.nextLoadingView}>
          <View style={styles.halfTextView}>
            <Text style={styles.nextLoadingText}>Next Loading</Text>
          </View>
            <View style={styles.HalfScheduleTable}>
              <View style={styles.childScheduleTable}>
                <View style={styles.cell}><Text style={styles.blackCell}>STOP</Text></View>
                <View style={styles.cell}><Text style={styles.redCell}>{this.state.nextLoading[0]}</Text></View>
                <View style={styles.cell}><Text style={styles.greenCell}>{this.state.nextLoading[1]}</Text></View>
                <View style={styles.cell}><Text style={styles.blueCell}>{this.state.nextLoading[2]}</Text></View>
              </View>
          </View>
        </View>
        <View style={styles.ScheduleTable}>
          <View style={styles.HalfScheduleTable}>
            <View style={styles.scheduleTextView}>
              <Text style={styles.nextLoadingText}>Current Schedule</Text>
            </View>
            <View style={styles.childScheduleTable}>
              <View style={styles.cell}><Text style={styles.blackCell}>{this.state.deliverySchedule[0][0]}</Text></View>
              <View style={styles.cell}><Text style={styles.redCell}>{this.state.deliverySchedule[0][1]}</Text></View>
              <View style={styles.cell}><Text style={styles.greenCell}>{this.state.deliverySchedule[0][2]}</Text></View>
              <View style={styles.cell}><Text style={styles.blueCell}>{this.state.deliverySchedule[0][3]}</Text></View>
            </View>
            <View style={styles.childScheduleTable}>
              <View style={styles.cell}><Text style={styles.blackCell}>{this.state.deliverySchedule[1][0]}</Text></View>
              <View style={styles.cell}><Text style={styles.redCell}>{this.state.deliverySchedule[1][1]}</Text></View>
              <View style={styles.cell}><Text style={styles.greenCell}>{this.state.deliverySchedule[1][2]}</Text></View>
              <View style={styles.cell}><Text style={styles.blueCell}>{this.state.deliverySchedule[1][3]}</Text></View>
            </View>
            <View style={styles.childScheduleTable}>
              <View style={styles.cell}><Text style={styles.blackCell}>{this.state.deliverySchedule[2][0]}</Text></View>
              <View style={styles.cell}><Text style={styles.redCell}>{this.state.deliverySchedule[2][1]}</Text></View>
              <View style={styles.cell}><Text style={styles.greenCell}>{this.state.deliverySchedule[2][2]}</Text></View>
              <View style={styles.cell}><Text style={styles.blueCell}>{this.state.deliverySchedule[2][3]}</Text></View>
            </View>
            <View style={styles.childScheduleTable}>
              <View style={styles.cell}><Text style={styles.blackCell}>{this.state.deliverySchedule[3][0]}</Text></View>
              <View style={styles.cell}><Text style={styles.redCell}>{this.state.deliverySchedule[3][1]}</Text></View>
              <View style={styles.cell}><Text style={styles.greenCell}>{this.state.deliverySchedule[3][2]}</Text></View>
              <View style={styles.cell}><Text style={styles.blueCell}>{this.state.deliverySchedule[3][3]}</Text></View>
            </View>
            <View style={styles.childScheduleTable}>
              <View style={styles.cell}><Text style={styles.blackCell}>{this.state.deliverySchedule[4][0]}</Text></View>
              <View style={styles.cell}><Text style={styles.redCell}>{this.state.deliverySchedule[4][1]}</Text></View>
              <View style={styles.cell}><Text style={styles.greenCell}>{this.state.deliverySchedule[4][2]}</Text></View>
              <View style={styles.cell}><Text style={styles.blueCell}>{this.state.deliverySchedule[4][3]}</Text></View>
            </View>
            <View style={styles.childScheduleTable}>
              <View style={styles.cell}><Text style={styles.blackCell}>{this.state.deliverySchedule[5][0]}</Text></View>
              <View style={styles.cell}><Text style={styles.redCell}>{this.state.deliverySchedule[5][1]}</Text></View>
              <View style={styles.cell}><Text style={styles.greenCell}>{this.state.deliverySchedule[5][2]}</Text></View>
              <View style={styles.cell}><Text style={styles.blueCell}>{this.state.deliverySchedule[5][3]}</Text></View>
            </View>
          </View>
          <View style={styles.HalfScheduleTable}>
            <View style={styles.scheduleTextView}>
              <Text style={styles.nextLoadingText}>Next Schedule</Text>
            </View>
            <View style={styles.childScheduleTable}>
              <View style={styles.cell}><Text style={styles.blackCell}>{this.state.nextDeliverySchedule[0][0]}</Text></View>
              <View style={styles.cell}><Text style={styles.redCell}>{this.state.nextDeliverySchedule[0][1]}</Text></View>
              <View style={styles.cell}><Text style={styles.greenCell}>{this.state.nextDeliverySchedule[0][2]}</Text></View>
              <View style={styles.cell}><Text style={styles.blueCell}>{this.state.nextDeliverySchedule[0][3]}</Text></View>
            </View>
            <View style={styles.childScheduleTable}>
              <View style={styles.cell}><Text style={styles.blackCell}>{this.state.nextDeliverySchedule[1][0]}</Text></View>
              <View style={styles.cell}><Text style={styles.redCell}>{this.state.nextDeliverySchedule[1][1]}</Text></View>
              <View style={styles.cell}><Text style={styles.greenCell}>{this.state.nextDeliverySchedule[1][2]}</Text></View>
              <View style={styles.cell}><Text style={styles.blueCell}>{this.state.nextDeliverySchedule[1][3]}</Text></View>
            </View>
            <View style={styles.childScheduleTable}>
              <View style={styles.cell}><Text style={styles.blackCell}>{this.state.nextDeliverySchedule[2][0]}</Text></View>
              <View style={styles.cell}><Text style={styles.redCell}>{this.state.nextDeliverySchedule[2][1]}</Text></View>
              <View style={styles.cell}><Text style={styles.greenCell}>{this.state.nextDeliverySchedule[2][2]}</Text></View>
              <View style={styles.cell}><Text style={styles.blueCell}>{this.state.nextDeliverySchedule[2][3]}</Text></View>
            </View>
            <View style={styles.childScheduleTable}>
              <View style={styles.cell}><Text style={styles.blackCell}>{this.state.nextDeliverySchedule[3][0]}</Text></View>
              <View style={styles.cell}><Text style={styles.redCell}>{this.state.nextDeliverySchedule[3][1]}</Text></View>
              <View style={styles.cell}><Text style={styles.greenCell}>{this.state.nextDeliverySchedule[3][2]}</Text></View>
              <View style={styles.cell}><Text style={styles.blueCell}>{this.state.nextDeliverySchedule[3][3]}</Text></View>
            </View>
            <View style={styles.childScheduleTable}>
              <View style={styles.cell}><Text style={styles.blackCell}>{this.state.nextDeliverySchedule[4][0]}</Text></View>
              <View style={styles.cell}><Text style={styles.redCell}>{this.state.nextDeliverySchedule[4][1]}</Text></View>
              <View style={styles.cell}><Text style={styles.greenCell}>{this.state.nextDeliverySchedule[4][2]}</Text></View>
              <View style={styles.cell}><Text style={styles.blueCell}>{this.state.nextDeliverySchedule[4][3]}</Text></View>
            </View>
            <View style={styles.childScheduleTable}>
              <View style={styles.cell}><Text style={styles.blackCell}>{this.state.nextDeliverySchedule[5][0]}</Text></View>
              <View style={styles.cell}><Text style={styles.redCell}>{this.state.nextDeliverySchedule[5][1]}</Text></View>
              <View style={styles.cell}><Text style={styles.greenCell}>{this.state.nextDeliverySchedule[5][2]}</Text></View>
              <View style={styles.cell}><Text style={styles.blueCell}>{this.state.nextDeliverySchedule[5][3]}</Text></View>
            </View>
          </View>
        </View>
        <View style={styles.buttonView}>
          <View style={styles.childButtonView}><TouchableHighlight onPress={this.onPressLoad} underlayColor="white">
            <View style={styles.button}>
              <Text style={styles.buttonText}>Load</Text>
            </View>
          </TouchableHighlight></View>
          <View style={styles.childButtonView}><TouchableHighlight onPress={this.onPressUnload} underlayColor="white">
            <View style={styles.button}>
              <Text style={styles.buttonText}>Unload</Text>
            </View>
          </TouchableHighlight></View>
          <View style={styles.childButtonView}><TouchableHighlight onPress={this.onPressOperating} underlayColor="white">
            <View style={styles.button}>
              <Text style={styles.buttonText}>Unload Fail</Text>
            </View>
          </TouchableHighlight></View>
          <View style={styles.childButtonView}><TouchableHighlight onPress={this.onPressReplenishment} underlayColor="white">
            <View style={styles.button}>
              <Text style={styles.buttonText}>Replenish</Text>
            </View>
          </TouchableHighlight></View>
          <View style={styles.childButtonView}><TouchableHighlight onPress={this.onPressOperating} underlayColor="white">
            <View style={styles.button}>
              <Text style={styles.buttonText}>Operating</Text>
            </View>
          </TouchableHighlight></View>
          <View style={styles.childButtonView}><TouchableHighlight onPress={this.onPressMaintenance} underlayColor="white">
            <View style={styles.button}>
              <Text style={styles.buttonText}>Maintenance</Text>
            </View>
          </TouchableHighlight></View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'stretch'
  },
  titleView: {
    paddingTop: 15,
    paddingBottom: 5,
    flex: 0.08,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#00462A',
  },
  titleBefore: {
    fontSize: 35,
    color: 'white'
  },
  titleAfter: {
    fontSize: 35,
    fontFamily:'Pacifico',
    color: 'white'
  },
  statusView: {
    flex: 0.08,
    marginTop: 10,
    paddingHorizontal: 10,
    flexDirection: 'row'
  },
  childStatusView: {
    flex: 0.5,
    flexDirection: 'row'
  },
  statusLabel: {
    fontSize: 28,
    flex: 0.5
  },
  statusText: {
    fontSize: 28,
    flex: 0.5,
    color: 'blue',
    textAlign: 'center'
  },
  nextLoadingView: {
    flex: 0.08,
    flexDirection: 'row',
    width: '100%',
  },
  halfTextView: {
    flex: 0.5,
    alignItems: 'center',
    justifyContent: 'center'
  },
  nextLoadingText: {
    fontSize: 28,
    alignSelf: 'center'
  },
  blackCell: {
    textAlign:'center',
    fontSize: 26,
    color: 'black'
  },
  redCell: {
    textAlign:'center',
    fontSize: 34,
    color: 'red',
    fontWeight: 'bold'
  },
  greenCell: {
    textAlign:'center',
    fontSize: 34,
    color: 'green',
    fontWeight: 'bold'
  },
  blueCell: {
    textAlign:'center',
    fontSize: 34,
    color: 'blue',
    fontWeight: 'bold'
  },
  cell:{
    width: '25%',
    height: 50,
    borderWidth:2,
    margin: 5,
    alignItems: 'stretch',
    justifyContent: 'center',
  },
  loadingTable:{
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 30,
    flex: 0.5,
    flexDirection:'row',
  },
  ScheduleTable:{
    alignSelf: 'center',
    flex: 0.60,
    width: '98%',
    flexDirection: 'row',
    alignItems: 'stretch',
  },
  HalfScheduleTable:{
    alignSelf: 'center',
    flex: 0.50,
    flexDirection: 'column',
    alignItems: 'stretch',
  },
  scheduleTextView: {
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    paddingHorizontal: 30,
    flexDirection:'row',
    marginBottom: 10
  },
  childScheduleTable: {
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    paddingHorizontal: 30,
    flexDirection:'row',
  },
  buttonView: {
    marginTop: 10,
    flex: 0.08,
    flexDirection: 'row',
    justifyContent: 'space-around'
  },
  childButtonView: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center'
  },
  button: {
    width: 115,
    height: '100%',
    marginHorizontal: 5,
    alignItems: 'center',
    justifyContent: 'center',
    // backgroundColor: '#2196F3'
    backgroundColor: '#00462A',
  },
  buttonText: {
    textAlign: 'center',
    color: 'white',
    fontSize: 15
  }
});
