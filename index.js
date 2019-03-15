import { Navigation } from 'react-native-navigation';
import { registerScreens } from './scr/screens';

registerScreens();
Navigation.events().registerAppLaunchedListener(() => {
  Navigation.setRoot({
    root: {
      component: {
        name: 'InitialScreen',
      },
    },
  });
});
