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

export default class Quux extends React.Component {
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

  navigationButtonPressed = ({ buttonId }) => {
    switch (buttonId) {
      case 'BtnQuuxTopBarRight':
        Navigation.dismissModal(this.props.componentId);
        break;
    }
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
      </View>
    );
  }
}
