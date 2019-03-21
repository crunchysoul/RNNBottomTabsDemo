import { Navigation } from 'react-native-navigation';
import { registerScreens, RNN } from './scr/screens';

registerScreens();
Navigation.events().registerAppLaunchedListener(() => {
  Navigation.setRoot({
    root: {
      component: {
        name: RNN.screen.Initial,
      },
    },
  });
});
