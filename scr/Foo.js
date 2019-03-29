import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  Button,
  TouchableOpacity,
  Platform,
} from 'react-native';
import { Navigation } from 'react-native-navigation';
import { styles } from './styles';
import { initIcons } from './icons';
import { toBottomLess } from './navigation';
import {
  MainStackTopBar,
  TestStackTopBar,
  TestFooStackTopBar,
  TestBarStackTopBar,
  HideTopBar,
  ShowTopBar,
  InvisiableStackTopBar,
} from './MainStackTopBar';

export default class Foo extends React.Component {
  componentDidMount() {
    this.navigationEventListener = Navigation.events().bindComponent(this);
  }

  toPushView = () => {
    Navigation.push(this.props.componentId, {
      component: {
        name: 'CorgeScreen',
        options: {
          largeTitle: {
            visible: true,
            fontSize: 30,
            color: 'red',
            fontFamily: 'Helvetica',
          },
          topBar: {
            drawBehind: false,
            animate: false,
            background: {
              color: 'white',
              blur: true,
            },
            title: {
              text: 'INNER TOPBAR',
            },
          },
        },
      },
    });
  };

  toPushViewBottomLess = () => {
    Navigation.push('MainStackId', {
      component: {
        name: 'CorgeScreen',
        options: {
          largeTitle: {
            visible: true,
            fontSize: 30,
            color: 'red',
            fontFamily: 'Helvetica',
          },
          topBar: {
            visible: true,
            drawBehind: false,
            animate: false,
            transparent: false,
            translucent: false,
            elevation: 0,
            noBorder: false,
            background: {
              color: 'white',
              blur: true,
            },
            title: {
              text: 'OVER TOPBAR',
            },
            backButton: {
              visible: true,
              title: 'FooScreen',
            },
          },
        },
      },
    });
    // Navigation.mergeOptions(this.props.componentId, {
    //   component: {
    //     name: 'CorgeScreen',
    //     options: {
    //       topBar: {
    //         visible: true,
    //         drawBehind: false,
    //         animate: false,
    //         background: {
    //           color: 'white',
    //           blur: true,
    //         },
    //         title: {
    //           text: 'OVER TOPBAR',
    //         },
    //         backButton: {
    //           visible: true,
    //           text: 'test',
    //         },
    //       },
    //     },
    //   },
    // });
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
          <Text style={styles.button}>Push Under</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={this.toPushViewBottomLess}>
          <Text style={styles.button}>Push Over</Text>
        </TouchableOpacity>
      </View>
    );
  }
}
