import React from 'react';
import { StyleSheet, View, Text, Button, TouchableOpacity } from 'react-native';
import { Navigation } from 'react-native-navigation';
import { styles } from './styles';

export default class Bar extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.h1}>
          {this.constructor.name}
          ::src/screens/
          {this.constructor.name}
          .js
        </Text>
      </View>
    );
  }
}
