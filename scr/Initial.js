import React from 'react';
import { View, Text, StyleSheet, AsyncStorage } from 'react-native';
import { toMain, startTabs } from './navigation';
import { RNN } from './screens.js';
import { styles } from './styles';

export default class Initial extends React.Component {
  componentDidMount() {
    startTabs();
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
