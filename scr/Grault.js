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
// import { styles } from './styles';
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

const colors = [
  '#3182C8',
  '#00AAAF',
  '#00A65F',
  '#E2902B',
  '#D9644A',
  '#CF262F',
  '#8B1079',
  '#48217B',
];

export default class Grault extends React.Component {
  componentDidMount() {
    this.navigationEventListener = Navigation.events().bindComponent(this);

    // NOTE:
    // Need to be here, otherwise WILL NOT WORK if options are set in static
    Navigation.mergeOptions(this.props.componentId, {
      // animations: {
      //   push: {
      //     waitForRender: true,
      //   },
      //   showModal: {
      //     waitForRender: true,
      //   },
      // },
      topBar: {
        title: {
          text: 'INNER TOPBAR',
        },
        visible: true,
        drawBehind: true,
        animate: true,
        transparent: true,
        translucent: true,
        elevation: 0,
        // TODO: how to get nav border
        noBorder: false,
        // NOTE:
        // Need to be transparent (or same color?)
        background: { color: 'transparent' },
      },
    });
    alert('componentDidMount');
  }

  componentDidAppear() {
    // // NOTE:
    // // Need to be here, otherwise WILL NOT WORK if options are set in static
    // Navigation.mergeOptions(this.props.componentId, {
    //   animations: {
    //     push: {
    //       waitForRender: true,
    //     },
    //     showModal: {
    //       waitForRender: true,
    //     },
    //   },
    //   topBar: {
    //     title: {
    //       text: 'YOU MUM',
    //     },
    //     visible: true,
    //     drawBehind: true,
    //     animate: true,
    //     transparent: true,
    //     translucent: true,
    //     elevation: 0,
    //     // TODO: how to get nav border
    //     noBorder: false,
    //     // NOTE:
    //     // Need to be transparent (or same color?)
    //     background: { color: 'transparent' },
    //   },
    // });
    // Navigation.mergeOptions('MainStackId', {
    //   animations: {
    //     push: {
    //       waitForRender: true,
    //     },
    //     showModal: {
    //       waitForRender: true,
    //     },
    //   },
    //   topBar: {
    //     visible: false,
    //   },
    // });
  }

  toPushView = () => {
    // NOTE:
    // Sequence matters below:
    // 1. push on inner stack
    // 2. merge outer stack with visible to false
    // WILL NOT WORKS if order is wrong
    Navigation.push('FooStackId', {
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
            drawBehind: true,
          },
        },
      },
    });
    Navigation.mergeOptions('MainStackId', {
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

  handlerList = [
    this.hideTopBar,
    this.showTopBar,
    this.toModalView,
    this.toPushView,
    this.toPushViewBottomLess,
  ];

  // TODO: do something this is dumb
  nameList = [
    'hideTopBar',
    'showTopBar',
    'toModalView',
    'toPushView',
    'toPushViewBottomLess',
  ];

  colorHandlers = _.zip(colors, this.handlerList, this.nameList);

  renderRow = ([color, fn, name]) => (
    <TouchableOpacity onPress={fn} disabled={false}>
      <Text key={color} style={[styles.row, { backgroundColor: color }]}>
        {name}
        {'\n'}
        {color}
      </Text>
    </TouchableOpacity>
  );

  render() {
    console.log('--------------', this.colorHandlers);
    return (
      <View style={styles.root}>
        <View
          style={{
            alignSelf: 'center',
            flexDirection: 'row',
          }}
        >
          <ScrollView
            style={styles.scrollView}
            contentContainerStyle={styles.content}
          >
            {/* {colors.map(this.renderRow)} */}
            {this.colorHandlers.map(this.renderRow)}
          </ScrollView>
        </View>
      </View>
    );
  }

  // render() {
  //   return (
  //     <View style={styles.container}>
  //       <Text style={styles.h1}>
  //         {this.constructor.name}
  //         ::src/screens/
  //         {this.constructor.name}
  //         .js
  //       </Text>
  //
  //       <TouchableOpacity
  //         onPress={this.hideTopBarInDefaultOptions}
  //         disabled={false}
  //       >
  //         <Text style={styles.button}>Hide topBar in default</Text>
  //       </TouchableOpacity>
  //
  //       <TouchableOpacity onPress={this.hideTopBar} disabled={false}>
  //         <Text style={styles.button}>Hide Top Bar</Text>
  //       </TouchableOpacity>
  //
  //       <TouchableOpacity onPress={this.showTopBar} disabled={false}>
  //         <Text style={styles.button}>Show Top Bar</Text>
  //       </TouchableOpacity>
  //
  //       <TouchableOpacity onPress={this.toModalView} disabled={false}>
  //         <Text style={styles.button}>Modal</Text>
  //       </TouchableOpacity>
  //
  //       <TouchableOpacity onPress={this.toPushView}>
  //         <Text style={styles.button}>Push</Text>
  //       </TouchableOpacity>
  //
  //       <TouchableOpacity onPress={this.toPushViewBottomLess}>
  //         <Text style={styles.button}>Push Bottom Less</Text>
  //       </TouchableOpacity>
  //
  //       <TouchableOpacity
  //         onPress={this.modalViewNearyByScreen}
  //         disabled={false}
  //       >
  //         <Text style={styles.button}>SideMenu</Text>
  //       </TouchableOpacity>
  //     </View>
  //   );
  // }
}

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: 'blue',
  },
  root: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'flex-end',
  },
  row: {
    height: 80,
    textAlign: 'center',
    textAlignVertical: 'center',
    color: 'white',
    fontSize: 24,
  },
  content: {
    backgroundColor: 'blue',
  },
  h1: {
    fontSize: 24,
    textAlign: 'center',
    margin: 10,
  },
  h2: {
    fontSize: 12,
    textAlign: 'center',
    margin: 10,
  },
  footer: {
    fontSize: 10,
    color: '#888',
    marginTop: 10,
  },
});
