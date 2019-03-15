import React from 'react';
import { StyleSheet, View, Text, Button, TouchableOpacity } from 'react-native';
import { Navigation } from 'react-native-navigation';
import { styles } from './styles';

export default class Foo extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          {this.constructor.name}
          ::src/screens/
          {this.constructor.name}
          .js
        </Text>

        <TouchableOpacity
          onPress={this.modalViewOnBoardingScreen}
          disabled={false}
        >
          <Text style={styles.button}>Modal OnBoardingScreen</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={this.modalViewNearyByScreen}
          disabled={false}
        >
          <Text style={styles.button}>Modal NearbyScreen</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={this.goToPushedView}>
          <Text style={styles.button}>Push QuaScreen</Text>
        </TouchableOpacity>
      </View>
    );
  }
}
