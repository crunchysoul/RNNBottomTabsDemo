import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  Button,
  TouchableOpacity,
  Platform,
  ScrollView,
} from 'react-native';
import { Navigation } from 'react-native-navigation';
import { styles } from './styles';
import { initIcons } from './icons';
import { RNN } from './screens';
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
        name: RNN.screen.Baz,
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
    Navigation.push(RNN.stack.App, {
      component: {
        name: RNN.screen.Baz,
        options: {
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
  };

  toModalView = () => {
    // wrapper for icons
    initIcons()
      .then(() => {
        Navigation.showModal({
          stack: {
            children: [
              {
                component: {
                  name: RNN.screen.Baz,
                  options: {
                    topBar: {
                      visible: true,
                      rightButtons: [
                        {
                          id: RNN.btn.TopBar.right.Baz,
                          icon: closeIconAnt,
                        },
                      ],
                      title: {
                        text: 'Modal',
                      },
                    },
                  },
                },
              },
            ],
          },
        });
      })
      .catch((error) => {
        console.error(error);
      });
  };

  toOverlay = () => {
    Navigation.showOverlay({
      component: {
        name: RNN.screen.Qux,
        options: {
          overlay: {
            interceptTouchOutside: true,
            handleKeyboardEvents: true,
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

        <TouchableOpacity onPress={this.toModalView} disabled={false}>
          <Text style={styles.button}>Modal</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={this.toPushView}>
          <Text style={styles.button}>Push Under</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={this.toPushViewBottomLess}>
          <Text style={styles.button}>Push Over</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={this.toOverlay}>
          <Text style={styles.button}>Show Overlay</Text>
        </TouchableOpacity>
      </View>
    );
  }
}
