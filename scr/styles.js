import { StyleSheet, Dimensions } from 'react-native';
export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  button: {
    backgroundColor: '#F83459',
    borderRadius: 8,
    color: 'white',
    width: Dimensions.get('window').width * 0.9,
    fontSize: 16,
    fontWeight: 'bold',
    overflow: 'hidden',
    padding: 15,
    margin: 5,
    paddingHorizontal: 80,
    textAlign: 'center',
  },
});
