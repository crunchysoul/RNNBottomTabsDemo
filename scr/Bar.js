import React from 'react';
import { StyleSheet, View, Text, Button, TouchableOpacity } from 'react-native';
import { Navigation } from 'react-native-navigation';
import { styles } from './styles';

export default class Bar extends React.Component {
  componentDidMount() {
    this.navigationEventListener = Navigation.events().bindComponent(this);
  }

  // toPushView = () => {
  //   Navigation.push(this.props.componentId, {
  //     component: {
  //       // name: RouterConstants.SecondScreen,
  //       name: 'FooScreen',
  //       passProps: {
  //         text: 'Pushed screen',
  //       },
  //       options: {
  //         topBar: {
  //           title: {
  //             text: 'Pushed screen title',
  //           },
  //         },
  //       },
  //     },
  //   });
  // };

  toPushView = (name) => {
    Navigation.push(this.props.componentId, {
      component: {
        // name: RouterConstants.SecondScreen,
        name,
        passProps: {
          text: 'Pushed screen',
        },
        options: {
          topBar: {
            title: {
              text: `Pushed to ${name}`,
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

        {/* <TouchableOpacity onPress={this.toPushView('FooScreen')}> */}
        {/*   <Text style={styles.button}>FooScreen</Text> */}
        {/* </TouchableOpacity> */}
        {/*  */}
        {/* <TouchableOpacity onPress={this.toPushView('FooScreen')}> */}
        {/*   <Text style={styles.button}>BarScreen</Text> */}
        {/* </TouchableOpacity> */}
        {/*  */}
        {/* <TouchableOpacity onPress={this.toPushView('FooScreen')}> */}
        {/*   <Text style={styles.button}>BazScreen</Text> */}
        {/* </TouchableOpacity> */}
        {/*  */}
        {/* <TouchableOpacity onPress={this.toPushView('FooScreen')}> */}
        {/*   <Text style={styles.button}>QuxScreen</Text> */}
        {/* </TouchableOpacity> */}

        {/* <TouchableOpacity onPress={this.toPushView('QuuxScreen')}> */}
        {/*   <Text style={styles.button}>QuuxScreen</Text> */}
        {/* </TouchableOpacity> */}
        {/*  */}
        {/* <TouchableOpacity onPress={this.toPushView('QuuzScreen')}> */}
        {/*   <Text style={styles.button}>QuuzScreen</Text> */}
        {/* </TouchableOpacity> */}
      </View>
    );
  }
}
