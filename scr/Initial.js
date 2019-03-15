import React from 'react';
import { View, Text, StyleSheet, AsyncStorage } from 'react-native';
import { toMain, startTabs } from './navigation';
import { styles } from './styles';

export default class Initialising extends React.Component {
  componentDidMount() {
    startTabs();
    // toMain();
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
