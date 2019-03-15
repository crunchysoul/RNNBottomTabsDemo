import { Navigation } from 'react-native-navigation';
import Icon from 'react-native-vector-icons/Ionicons';
import { registerScreens } from './screens';

// setup use react-native-vector-icons
const initIcons = () => {
  return new Promise((resolve, reject) => {
    Promise.all([
      Icon.getImageSource('ios-settings', 30),
      Icon.getImageSource('ios-settings-outline', 30),
      Icon.getImageSource('ios-people', 30),
      Icon.getImageSource('ios-navigate-outline', 30),
      Icon.getImageSource('ios-navigate', 30),
    ])
      .then((values) => {
        settingsIcon = values[0];
        settingsOutlineIcon = values[1];
        peopleIcon = values[2];
        iosNavigateOutline = values[3];
        iosNavigate = values[4];
        resolve(true);
      })
      .catch((error) => {
        console.log(error);
        reject(error);
      })
      .done();
  });
};

export const startTabs = () => {
  registerScreens();

  initIcons()
    .then(() => {
      // Start app only if all icons are loaded
      toMain();
    })
    .catch((error) => {
      console.error(error);
    });
};

export const toMain = () =>
  Navigation.setRoot({
    root: {
      bottomTabs: {
        id: 'BottomTabsId',
        children: [
          {
            component: {
              name: 'FooScreen',
              options: {
                bottomTab: {
                  fontSize: 12,
                  text: 'Foo',
                  icon: peopleIcon,
                },
              },
            },
          },
          {
            component: {
              name: 'BarScreen',
              options: {
                bottomTab: {
                  text: 'Bar',
                  fontSize: 12,
                  icon: peopleIcon,
                },
              },
            },
          },
          {
            component: {
              name: 'BazScreen',
              options: {
                bottomTab: {
                  text: 'Baz',
                  fontSize: 12,
                  icon: peopleIcon,
                },
              },
            },
          },
        ],
      },
    },
  });
