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

export default class Foo extends React.Component {
  static options(passProps) {
    return {
      topBar: {
        drawBehind: true,
        visible: false,
        animate: false,
      },
    };
  }

  componentDidMount() {
    this.navigationEventListener = Navigation.events().bindComponent(this);
  }

  toPushView = () => {
    Navigation.push(this.props.componentId, {
      component: {
        // name: RouterConstants.SecondScreen,
        name: 'QuuzScreen',
        passProps: {
          text: 'Pushed screen',
        },
        options: {
          topBar: {
            drawBehind: true,
            visible: false,
            animate: false,
          },
          // topBar: {
          //   visible: true,
          //   drawBehind: true,
          //   animate: false,
          //   transparent: true,
          //   translucent: true,
          //   elevation: 0,
          //   noBorder: true,
          //   backButton: {
          //     visible: true,
          //   },
          //   background: { color: 'transparent' },
          // },
        },
      },
    });
  };

  toPushViewBottomLess = () => {
    Navigation.push('MainStackId', {
      component: {
        // name: RouterConstants.SecondScreen,
        name: 'QuuxScreen',
        passProps: {
          text: 'Pushed screen',
        },
        options: {
          topBar: {
            visible: true,
            drawBehind: true,
            animate: false,
            transparent: true,
            translucent: true,
            elevation: 0,
            noBorder: true,
            backButton: {
              visible: true,
            },
            background: { color: 'transparent' },
          },
        },
      },
    });
  };

  toModalView = () => {
    // wrapper for icons
    initIcons()
      .then(() => {
        // Start app only if all icons are loaded
        Navigation.showModal({
          stack: {
            children: [
              {
                component: {
                  name: 'QuuxScreen',
                  options: {
                    // modalPresentationStyle: 'formSheet',
                    topBar: {
                      rightButtons: [
                        {
                          id: 'BtnQuuxTopBarRight',
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
          <Text style={styles.button}>Push</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={this.toPushViewBottomLess}>
          <Text style={styles.button}>Push Bottom Less</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={this.modalViewNearyByScreen}
          disabled={false}
        >
          <Text style={styles.button}>SideMenu</Text>
        </TouchableOpacity>
      </View>
    );
  }
}
