import React, {Component} from 'react';
import { StyleSheet, Text, View, AppRegistry} from 'react-native';

export default class ReactCalculator extends React.Component {
  render() {
    return (
        <View style={{flex: 1}}> 
            <View style={{flex: 2, backgroundColor: '#193441'}}></View>
            <View style={{flex: 8, backgroundColor: '#3E606F'}}></View>
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

