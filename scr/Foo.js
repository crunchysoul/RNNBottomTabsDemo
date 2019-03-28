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

    // // NOTE:
    // // Need to be here, otherwise WILL NOT WORK if options are set in static
    // Navigation.mergeOptions(this.props.componentId, {
    //   topBar: {
    //     title: {
    //       text: 'INNER NAVBAR',
    //     },
    //     visible: false,
    //     // drawBehind: true,
    //     animate: false,
    //     // transparent: true,
    //     // translucent: true,
    //     // elevation: 0,
    //     // noBorder: true,
    //     // NOTE:
    //     // Need to be transparent (or same color?)
    //     // background: { color: 'transparent' },
    //     // background: { color: 'yellow' },
    //   },
    // });
  }

  // DOING
  componentDidAppear() {
    Navigation.mergeOptions('FooScreenId', {
      topBar: {
        visible: true,
        animate: false,
        title: {
          text: 'Foo2',
        },
      },
    });

    Navigation.mergeOptions('MainStackId', {
      topBar: {
        visible: false,
        animate: false,
      },
    });
  }

  toPushView = () => {
    // NOTE:
    // Sequence matters below:
    // 1. push on inner stack
    // 2. merge outer stack with visible to false
    // WILL NOT WORKS if order is wrong
    // Navigation.push('FooScreenId', {
    //   component: {
    //     // name: RouterConstants.SecondScreen,
    //     // name: 'QuuxScreen',
    //     name: 'CorgeScreen',
    //     passProps: {
    //       text: 'Pushed screen',
    //     },
    //     options: {
    //       topBar: {
    //         visible: true,
    //         drawBehind: true,
    //         title: {
    //           text: 'INNER NAVBAR 2',
    //         },
    //       },
    //     },
    //   },
    // });

    Navigation.mergeOptions('FooScreenId', {
      topBar: {
        visible: false,
        animate: false,
        title: {
          text: 'Foo2',
        },
      },
    });
    Navigation.mergeOptions('MainStackId', {
      topBar: {
        // title: {
        //   text: 'INNER NAVBAR',
        // },
        visible: false,
        // drawBehind: true,
        animate: false,
        // transparent: true,
        // translucent: true,
        // elevation: 0,
        // noBorder: true,
        // backButton: {
        //   visible: true,
        // },
        // background: { color: 'transparent' },
      },
    });
    // Navigation.mergeOptions(this.props.componentId, {
    // Navigation.mergeOptions('FooScreenId', {
    //   topBar: {
    //     visible: true,
    //     animate: false,
    //   },
    // });
    // Navigation.push(this.props.componentId, {
    Navigation.push('FooScreenId', {
      component: {
        // name: RouterConstants.SecondScreen,
        // name: 'QuuxScreen',
        name: 'CorgeScreen',
        passProps: {
          text: 'Pushed screen',
        },
        options: {
          topBar: {
            visible: true,
            // drawBehind: true,
            title: {
              text: 'INNER NAVBAR 2',
            },
          },
        },
      },
    });
  };

  toPushViewBottomLess = () => {
    Navigation.push('MainStackId', {
      component: {
        // name: RouterConstants.SecondScreen,
        name: 'CorgeScreen',
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
                  name: 'QuuxScreen',
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
