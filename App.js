import React, {Component} from 'react';
import Style from './Style';
import {
    StyleSheet,
    Text,
    View,
    AppRegistry} from 'react-native';

export default class ReactCalculator extends React.Component {
  render() {
    return (
        <View style={{flex: 1}}>
            <View style={Style.displayContainer}></View>
            <View style={Style.inputContainer}></View>
        </View>


    );
  }
}

AppRegistry.registerComponent('ReactCalculator', () => ReactCalculator);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

