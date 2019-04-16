const React = require('react');
const { PureComponent } = require('react');
const {
  View,
  Text,
  ScrollView,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
  Animated,
} = require('react-native');
import { Navigation } from 'react-native-navigation';
import { RNN } from './screens';
import {
  MainStackTopBar,
  TestStackTopBar,
  TestFooStackTopBar,
  HideBar,
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

class Qux extends PureComponent {
  constructor(props) {
    super(props);
    Navigation.events().bindComponent(this); // <== Will be automatically unregistered when unmounted
  }

  navigationButtonPressed = ({ buttonId }) => {
    switch (buttonId) {
      case RNN.btn.TopBar.left.Baz:
        Navigation.pop(this.props.componentId);
        break;
      case RNN.btn.TopBar.right.Baz:
        Navigation.dismissModal(this.props.componentId);
        break;
    }
  };

  onPress = () => {
    Navigation.dismissOverlay(this.props.componentId);
  };

  render() {
    return (
      <View style={styles.root}>
        <View style={styles.container}>
          <TouchableOpacity onPress={this.onPress}>
            <Text style={styles.button}>Close Overlay</Text>
          </TouchableOpacity>
          <Text>Place holder</Text>
          <ScrollView
            style={styles.scrollView}
            contentContainerStyle={styles.content}
          >
            {colors.map(this.renderRow)}
            {colors.map(this.renderRow)}
            {colors.map(this.renderRow)}
          </ScrollView>
          <TouchableOpacity onPress={this.onPress}>
            <Text style={styles.button}>Close Overlay</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }

  renderRow = (color) => (
    <Text key={color} style={[styles.row, { backgroundColor: color }]}>
      {color}
    </Text>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#F83459',
    borderRadius: 7,
    color: 'white',
    width: Dimensions.get('window').width * 0.8,
    fontSize: 16,
    fontWeight: 'bold',
    overflow: 'hidden',
    padding: 15,
    margin: 15,
    textAlign: 'center',
    alignSelf: 'center',
  },
  root: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
  },
  container: {
    alignSelf: 'center',
    width: Dimensions.get('window').width * 0.9,
    marginVertical: 168,
    borderRadius: 20,
    // backgroundColor: 'blue',
    backgroundColor: 'white',
  },
  scrollView: {
    // backgroundColor: 'blue',
    backgroundColor: 'white',
  },
  row: {
    height: 80,
    textAlign: 'center',
    textAlignVertical: 'center',
    color: 'white',
  },
  content: {
    // backgroundColor: 'blue',
    backgroundColor: 'white',
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
    borderRadius: 20,
  },
});

module.exports = Qux;
