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
      tableHead: ['1', '1', '1', '1', '1'],
      tableData: [
        ['101', '1', '2', '3'], 
        ['102', '1', '2', '3'],
        ['103', '0', '0', '0'],
        ['203', '1', '2', '3'],
        ['202', '1', '2', '3'],
        ['201', '1', '2', '3']]
    };
  }

  componentDidMount = async () => {
    await Font.loadAsync({
      'Pacifico': require('./assets/fonts/Pacifico.ttf'),
    });
    this.setState({ fontLoaded: true})
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
    const data = [1,2,3,4,5];
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
        <Text style={styles.subtitle}>Next Loading</Text>
        <View style={styles.loadingTable}>
          <View style={styles.cell}><Text style={styles.blackCell}>STOP</Text></View>
          <View style={styles.cell}><Text style={styles.redCell}>{this.state.tableHead[0]}</Text></View>
          <View style={styles.cell}><Text style={styles.greenCell}>{this.state.tableHead[1]}</Text></View>
          <View style={styles.cell}><Text style={styles.blueCell}>{this.state.tableHead[2]}</Text></View>
        </View>
        <Text style={styles.subtitle}>Delivery Schedule</Text>
        <View style={styles.ScheduleTable}>
          <View style={styles.childScheduleTable}>
            <View style={styles.cell}><Text style={styles.blackCell}>{this.state.tableData[0][0]}</Text></View>
            <View style={styles.cell}><Text style={styles.redCell}>{this.state.tableData[0][1]}</Text></View>
            <View style={styles.cell}><Text style={styles.greenCell}>{this.state.tableData[0][2]}</Text></View>
            <View style={styles.cell}><Text style={styles.blueCell}>{this.state.tableData[0][3]}</Text></View>
          </View>
          <View style={styles.childScheduleTable}>
            <View style={styles.cell}><Text style={styles.blackCell}>{this.state.tableData[1][0]}</Text></View>
            <View style={styles.cell}><Text style={styles.redCell}>{this.state.tableData[1][1]}</Text></View>
            <View style={styles.cell}><Text style={styles.greenCell}>{this.state.tableData[1][2]}</Text></View>
            <View style={styles.cell}><Text style={styles.blueCell}>{this.state.tableData[1][3]}</Text></View>
          </View>
          <View style={styles.childScheduleTable}>
            <View style={styles.cell}><Text style={styles.blackCell}>{this.state.tableData[2][0]}</Text></View>
            <View style={styles.cell}><Text style={styles.redCell}>{this.state.tableData[2][1]}</Text></View>
            <View style={styles.cell}><Text style={styles.greenCell}>{this.state.tableData[2][2]}</Text></View>
            <View style={styles.cell}><Text style={styles.blueCell}>{this.state.tableData[2][3]}</Text></View>
          </View>
          <View style={styles.childScheduleTable}>
            <View style={styles.cell}><Text style={styles.blackCell}>{this.state.tableData[3][0]}</Text></View>
            <View style={styles.cell}><Text style={styles.redCell}>{this.state.tableData[3][1]}</Text></View>
            <View style={styles.cell}><Text style={styles.greenCell}>{this.state.tableData[3][2]}</Text></View>
            <View style={styles.cell}><Text style={styles.blueCell}>{this.state.tableData[3][3]}</Text></View>
          </View>
          <View style={styles.childScheduleTable}>
            <View style={styles.cell}><Text style={styles.blackCell}>{this.state.tableData[4][0]}</Text></View>
            <View style={styles.cell}><Text style={styles.redCell}>{this.state.tableData[4][1]}</Text></View>
            <View style={styles.cell}><Text style={styles.greenCell}>{this.state.tableData[4][2]}</Text></View>
            <View style={styles.cell}><Text style={styles.blueCell}>{this.state.tableData[4][3]}</Text></View>
          </View>
          <View style={styles.childScheduleTable}>
            <View style={styles.cell}><Text style={styles.blackCell}>{this.state.tableData[5][0]}</Text></View>
            <View style={styles.cell}><Text style={styles.redCell}>{this.state.tableData[5][1]}</Text></View>
            <View style={styles.cell}><Text style={styles.greenCell}>{this.state.tableData[5][2]}</Text></View>
            <View style={styles.cell}><Text style={styles.blueCell}>{this.state.tableData[5][3]}</Text></View>
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
    paddingTop: 30,
    flex: 0.10,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#00462A',
    marginBottom: 10
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
  subtitle: {
    marginTop: 5,
    flex: 0.08,
    fontSize: 33,
    alignSelf: 'center',
  },
  buttonView: {
    flex: 0.2,
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
    height: 60,
    marginHorizontal: 5,
    marginBottom: 10,
    alignItems: 'center',
    justifyContent: 'center',
    // backgroundColor: '#2196F3'
    backgroundColor: '#00462A',
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
  },
  blackCell: {
    textAlign:'center',
    fontSize: 30,
    color: 'black'
  },
  redCell: {
    textAlign:'center',
    fontSize: 30,
    color: 'red'
  },
  greenCell: {
    textAlign:'center',
    fontSize: 30,
    color: 'green'
  },
  blueCell: {
    textAlign:'center',
    fontSize: 30,
    color: 'blue'
  },
  cell:{
    width: '25%',
    height: 60,
    borderWidth:2,
    margin: 5,
    alignItems: 'stretch',
    justifyContent: 'center',
  },
  loadingTable:{
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    width: '75%',
    paddingHorizontal: 30,
    flex: 0.12,
    flexDirection:'row',
  },
  ScheduleTable:{
    alignSelf: 'center',
    flex: 0.65,
    width: '75%',
    flexDirection: 'column',
    alignItems: 'stretch',
  },
  childScheduleTable: {
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    paddingHorizontal: 30,
    flexDirection:'row',
  },

});
