import React from 'react';
import { StyleSheet, View, Text, Button, TouchableOpacity } from 'react-native';
import { Navigation } from 'react-native-navigation';
import { styles } from './styles';
import { initIcons } from './icons';

export default class Foo extends React.Component {
  componentDidMount() {
    this.navigationEventListener = Navigation.events().bindComponent(this);
  }

  toPushView = () => {
    console.log('goToPushedView CLICKED');
    Navigation.push(this.props.componentId, {
      component: {
        name: 'QuuxScreen',
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
                  passProps: {
                    text: 'stack with one child',
                  },
                  options: {
                    topBar: {
                      rightButtons: [
                        {
                          id: 'BtnQuuxTopBarRight',
                          icon: cogIconIon,
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
