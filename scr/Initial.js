import React from 'react';
import { View, Text, StyleSheet, AsyncStorage } from 'react-native';
import { toMain } from './navigation';

export default class Initialising extends React.Component {
  componentDidMount() {
    toMain();
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          {this.constructor.name}
          ::src/screens/
          {this.constructor.name}
          .js
        </Text>
      </View>
    );
  }
}
