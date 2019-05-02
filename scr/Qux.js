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
import ActionSheet from 'react-native-actionsheet';
import IconAnt from 'react-native-vector-icons/AntDesign';
import IconIon from 'react-native-vector-icons/Ionicons';
import IconEntypo from 'react-native-vector-icons/Entypo';
import { RNN } from './screens';

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

    this.state = {
      headerBgColor: 'rgba(0, 0, 0, 0.5)',
      scrollY: 1,
      fadeAnimRoot: new Animated.Value(0), // Initial value for opacity: 0
      fadeAnim: new Animated.Value(0), // Initial value for opacity: 0
    };
  }

  componentDidMount() {
    Animated.timing(
      // Animate over time
      this.state.fadeAnimRoot, // The animated value to drive
      {
        toValue: 1, // Animate to opacity: 1 (opaque)
        duration: 1, // Make it take a while
        useNativeDriver: true, // Send everything about the animation to native before starting
      },
    ).start(); // Starts the animation

    Animated.timing(
      // Animate over time
      this.state.fadeAnim, // The animated value to drive
      {
        toValue: 1, // Animate to opacity: 1 (opaque)
        duration: 1000, // Make it take a while
        useNativeDriver: true, // Send everything about the animation to native before starting
      },
    ).start(); // Starts the animation
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

  showActionSheet = () => {
    this.ActionSheet.show();
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
    let { fadeAnimRoot, fadeAnim } = this.state;

    return (
      // <View style={styles.root}>
      <Animated.View // Special animatable View
        style={{
          ...styles.root,
          opacity: fadeAnimRoot, // Bind opacity to animated value
        }}
      >
        <Animated.View // Special animatable View
          style={[
            styles.container,
            {
              opacity: fadeAnim, // Bind opacity to animated value
            },
          ]}
        >
          {/* <View style={styles.container}> */}
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
          <View
            style={{
              ...styles.header,
              backgroundColor: this.state.headerBgColor,
            }}
          >
            <TouchableOpacity
              onPress={this.onPress}
              style={{
                width: 16 * 2 + 30,
                borderTopLeftRadius: 16,
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              <IconAnt name="close" size={30} color="#fff" />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={this.showActionSheet}
              style={{
                width: 16 * 2 + 30,
                borderRightRadius: 16,
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              <IconEntypo name="dots-three-horizontal" size={30} color="#fff" />
              <ActionSheet
                ref={(o) => (this.ActionSheet = o)}
                title={'Which one do you like ?'}
                options={['Apple', 'Banana', 'cancel']}
                cancelButtonIndex={2}
                destructiveButtonIndex={1}
                onPress={(index) => {
                  /* do something */
                }}
              />
            </TouchableOpacity>
          </View>
          <TouchableOpacity
            onPress={this.onPress}
            style={styles.buttonContainer}
          >
            <Text style={styles.button}>Close Overlay</Text>
          </TouchableOpacity>
        </Animated.View>
      </Animated.View>
      // </View>
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
    borderRadius: 16,
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
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: Dimensions.get('window').width - 28,
    position: 'absolute',
    top: 0,
  },
  footer: {
    fontSize: 10,
    color: '#888',
    marginTop: 10,
    borderRadius: 16,
  },
});

module.exports = Qux;
