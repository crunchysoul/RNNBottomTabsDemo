import { Navigation } from 'react-native-navigation';
import { registerScreens } from './screens';
import { initIcons } from './icons';

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
                  icon: settingsIconIon,
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
                  icon: cogIconIon,
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
                  icon: peopleIconIon,
                },
              },
            },
          },
          {
            component: {
              name: 'QuxScreen',
              options: {
                bottomTab: {
                  text: 'Qux',
                  fontSize: 12,
                  icon: userIconAnt,
                },
              },
            },
          },
        ],
      },
    },
  });
