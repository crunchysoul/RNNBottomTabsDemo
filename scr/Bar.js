import React from 'react';
import { StyleSheet, View, Text, Button, TouchableOpacity } from 'react-native';
import { Navigation } from 'react-native-navigation';
import { styles } from './styles';

export default class Bar extends React.Component {
  componentDidMount() {
    this.navigationEventListener = Navigation.events().bindComponent(this);
  }

  toPushView = () => {
    Navigation.push(this.props.componentId, {
      component: {
        // name: RouterConstants.SecondScreen,
        name: 'FooScreen',
        passProps: {
          text: 'Pushed screen',
        },
        options: {
          topBar: {
            title: {
              text: 'Pushed screen title',
            },
          },
        },
      },
    });
  };

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.h1}>
          {this.constructor.name}
          ::src/screens/
          {this.constructor.name}
          .js
        </Text>

        <TouchableOpacity onPress={this.toPushView}>
          <Text style={styles.button}>Push</Text>
        </TouchableOpacity>
      </View>
    );
  }
}
