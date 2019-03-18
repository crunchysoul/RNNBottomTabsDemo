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
            stack: {
              children: [
                {
                  component: {
                    name: 'FooScreen',
                    id: 'FooScreenId',
                    options: {
                      bottomTab: {
                        fontSize: 12,
                        text: 'Foo',
                        icon: visaIconFontAwesome,
                      },
                    },
                  },
                },
                // {
                //   component: {
                //     name: 'QuuxScreen',
                //     id: 'QuuxScreenId',
                //   },
                // },
              ],
            },
          },
          {
            component: {
              name: 'BarScreen',
              id: 'BarScreenId',
              options: {
                bottomTab: {
                  text: 'Bar',
                  fontSize: 12,
                  icon: mastercardIconFontAwesome,
                },
              },
            },
          },
          {
            component: {
              name: 'BazScreen',
              id: 'BazScreenId',
              options: {
                bottomTab: {
                  text: 'Baz',
                  fontSize: 12,
                  icon: amexIconFontAwesome,
                },
              },
            },
          },
          {
            component: {
              name: 'QuxScreen',
              id: 'QuxScreenId',
              options: {
                bottomTab: {
                  text: 'Qux',
                  fontSize: 12,
                  icon: paypalIconFontAwesome,
                },
              },
            },
          },
        ],
      },
    },
  });
