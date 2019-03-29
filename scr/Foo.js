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
        passProps: {
          text: 'Pushed screen',
        },
        options: {
          topBar: {
            drawBehind: true,
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
        passProps: {
          text: 'Pushed screen',
        },
        options: {
          topBar: TestStackTopBar,
        },
      },
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

        {/* <TouchableOpacity */}
        {/*   onPress={this.hideTopBarInDefaultOptions} */}
        {/*   disabled={true} */}
        {/* > */}
        {/*   <Text style={styles.button}>Hide topBar in default</Text> */}
        {/* </TouchableOpacity> */}
        {/*  */}
        {/* <TouchableOpacity onPress={this.hideTopBar} disabled={true}> */}
        {/*   <Text style={styles.button}>Hide Top Bar</Text> */}
        {/* </TouchableOpacity> */}
        {/*  */}
        {/* <TouchableOpacity onPress={this.showTopBar} disabled={true}> */}
        {/*   <Text style={styles.button}>Show Top Bar</Text> */}
        {/* </TouchableOpacity> */}
        {/*  */}
        {/* <TouchableOpacity onPress={this.toModalView} disabled={false}> */}
        {/*   <Text style={styles.button}>Modal</Text> */}
        {/* </TouchableOpacity> */}

        <TouchableOpacity onPress={this.toPushView}>
          <Text style={styles.button}>Push Under</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={this.toPushViewBottomLess}>
          <Text style={styles.button}>Push Over</Text>
        </TouchableOpacity>

        {/* <TouchableOpacity onPress={this.modalViewNearyByScreen} disabled={true}> */}
        {/*   <Text style={styles.button}>SideMenu</Text> */}
        {/* </TouchableOpacity> */}
      </View>
    );
  }
}
