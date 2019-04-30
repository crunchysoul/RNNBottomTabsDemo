const React = require('react');
const { PureComponent } = require('react');
const {
  Alert,
  Animated,
  View,
  Text,
  ScrollView,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
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

    this.state = { headerBgColor: 'yellow', scrollY: 1 };
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

  onScroll = () => {
    Animated.event([
      { nativeEvent: { contentOffset: { y: this.state.scrollY } } },
    ]);
  };

  // onScroll = (event) => {
  //   console.log(event.nativeEvent.contentOffset.y);
  //
  //   // NOTE: for graduate changing background opacity
  //   event.nativeEvent.contentOffset.y <= 0
  //     ? this.setState({
  //         headerBgColor: 'rgba(0, 0, 0, 1)',
  //       })
  //     : null;
  //
  //   0 < event.nativeEvent.contentOffset.y &&
  //   event.nativeEvent.contentOffset.y <= 5
  //     ? this.setState({
  //         headerBgColor: 'rgba(0, 0, 0, 0.99)',
  //       })
  //     : null;
  //
  //   5 < event.nativeEvent.contentOffset.y &&
  //   event.nativeEvent.contentOffset.y <= 10
  //     ? this.setState({
  //         headerBgColor: 'rgba(0, 0, 0, 0.98)',
  //       })
  //     : null;
  //
  //   10 < event.nativeEvent.contentOffset.y &&
  //   event.nativeEvent.contentOffset.y <= 20
  //     ? this.setState({
  //         headerBgColor: 'rgba(0, 0, 0, 0.97)',
  //       })
  //     : null;
  //
  //   20 < event.nativeEvent.contentOffset.y &&
  //   event.nativeEvent.contentOffset.y <= 30
  //     ? this.setState({
  //         headerBgColor: 'rgba(0, 0, 0, 0.96)',
  //       })
  //     : null;
  //
  //   30 < event.nativeEvent.contentOffset.y &&
  //   event.nativeEvent.contentOffset.y <= 40
  //     ? this.setState({
  //         headerBgColor: 'rgba(0, 0, 0, 0.95)',
  //       })
  //     : null;
  //
  //   40 < event.nativeEvent.contentOffset.y &&
  //   event.nativeEvent.contentOffset.y <= 50
  //     ? this.setState({
  //         headerBgColor: 'rgba(0, 0, 0, 0.94)',
  //       })
  //     : null;
  //
  //   50 < event.nativeEvent.contentOffset.y &&
  //   event.nativeEvent.contentOffset.y <= 60
  //     ? this.setState({
  //         headerBgColor: 'rgba(0, 0, 0, 0.93)',
  //       })
  //     : null;
  //
  //   60 < event.nativeEvent.contentOffset.y &&
  //   event.nativeEvent.contentOffset.y <= 70
  //     ? this.setState({
  //         headerBgColor: 'rgba(0, 0, 0, 0.92)',
  //       })
  //     : null;
  //
  //   70 < event.nativeEvent.contentOffset.y &&
  //   event.nativeEvent.contentOffset.y <= 80
  //     ? this.setState({
  //         headerBgColor: 'rgba(0, 0, 0, 0.91)',
  //       })
  //     : null;
  //
  //   80 < event.nativeEvent.contentOffset.y &&
  //   event.nativeEvent.contentOffset.y <= 90
  //     ? this.setState({
  //         headerBgColor: 'rgba(0, 0, 0, 0.90)',
  //       })
  //     : null;
  //   // this.state.headerBgColor === 'yellow'
  //   //   ? this.setState({
  //   //       // headerBgColor: 'rgba(255, 255, 0, 0.3)',
  //   //       headerBgColor: 'pink',
  //   //     })
  //   //   : null;
  // };

  // onScrollBeginDrag = () => {
  //   this.state.headerBgColor === 'yellow'
  //     ? this.setState({
  //         // headerBgColor: 'rgba(255, 255, 0, 0.3)',
  //         headerBgColor: 'pink',
  //       })
  //     : null;
  // };

  render() {
    return (
      <View style={styles.root}>
        <View style={styles.container}>
          <View
            style={{
              ...styles.header,
              backgroundColor: this.state.headerBgColor,
            }}
          >
            <Text>Lorem</Text>
          </View>
          <Text>Place holder</Text>
          <ScrollView
            style={styles.scrollView}
            contentContainerStyle={styles.content}
            onScroll={this.onScroll}
            scrollEventThrottle={1}
          >
            {colors.map(this.renderRow)}
            {colors.map(this.renderRow)}
            {colors.map(this.renderRow)}
          </ScrollView>
          <TouchableOpacity
            onPress={this.onPress}
            style={styles.buttonContainer}
          >
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
  buttonContainer: {
    width: Dimensions.get('window').width - 28,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    bottom: 0,
    borderRadius: 16,
  },
  button: {
    backgroundColor: 'black',
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
    width: Dimensions.get('window').width - 28,
    // width: Dimensions.get('window').width * 0.9,
    marginVertical: 168,
    borderRadius: 16,
  },
  scrollView: {
    // backgroundColor: 'blue',
    backgroundColor: 'white',
    borderBottomLeftRadius: 16,
    borderBottomRightRadius: 16,
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
  header: {
    height: 62,
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
    justifyContent: 'center',
  },
  footer: {
    fontSize: 10,
    color: '#888',
    marginTop: 10,
    borderRadius: 16,
  },
});

module.exports = Qux;
