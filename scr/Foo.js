const _ = require('lodash');
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
import { toBottomLess } from './navigation';
import { RNN } from './screens';
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
  static options(passProps) {
    return {
      topBar: {
        title: {
          text: 'INNER TOPBAR',
        },
        drawBehind: true,
        visible: true,
      },
    };
  }

  constructor(props) {
    super(props);
    Navigation.events().bindComponent(this); // <== Will be automatically unregistered when unmounted
  }

  componentDidDisappear() {
    alert('componentDidDisAppear');
    // Navigation.mergeOptions('MainStackId', {
    //   topBar: {
    //     visible: false,
    //     drawBehind: true,
    //   },
    // });
  }

  toPushView = () => {
    // NOTE:
    // Sequence matters below:
    // 1. push on inner stack
    // 2. merge outer stack with visible to false
    // WILL NOT WORKS if order is wrong
    // Navigation.push('FooStackId', {
    Navigation.push(this.props.componentId, {
      component: {
        // name: RouterConstants.SecondScreen,
        name: RNN.screen.Quux,
        passProps: {
          text: 'Pushed screen',
        },
        options: {
          topBar: {
            title: {
              text: 'MERGE INNER TOPBAR',
            },
            visible: true,
            drawBehind: true,
          },
        },
      },
    });
    Navigation.mergeOptions(RNN.stack.Main, {
      topBar: {
        title: {
          text: 'OUTER TOPBAR',
        },
        visible: false,
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
    });
  };

  toPushViewBottomLess = () => {
    Navigation.push(RNN.stack.Main, {
      component: {
        // name: RouterConstants.SecondScreen,
        name: RNN.screen.Corge,
        passProps: {
          text: 'Pushed screen',
        },
        options: {
          topBar: TestStackTopBar,
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
                  name: RNN.screen.Quux,
                  options: {
                    topBar: {
                      visible: true,
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

  hideTopBar = () => {
    Navigation.mergeOptions(this.props.componentId, {
      topBar: {
        visible: false,
      },
    });
  };

  showTopBar = () => {
    Navigation.mergeOptions(this.props.componentId, {
      topBar: {
        visible: true,
      },
    });
  };

  push = () => Navigation.push(this, Screens.Pushed);

  hideTopBarInDefaultOptions = () => {
    Navigation.setDefaultOptions({
      topBar: {
        visible: false,
        title: {
          text: 'Default Title',
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

        <TouchableOpacity
          onPress={this.hideTopBarInDefaultOptions}
          disabled={false}
        >
          <Text style={styles.button}>Hide topBar in default</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={this.hideTopBar} disabled={false}>
          <Text style={styles.button}>Hide Top Bar</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={this.showTopBar} disabled={false}>
          <Text style={styles.button}>Show Top Bar</Text>
        </TouchableOpacity>

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
