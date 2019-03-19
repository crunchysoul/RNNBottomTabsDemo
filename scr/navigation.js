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
      stack: {
        id: 'MainStackId',
        children: [
          {
            topBar: {
              visible: false,
            },
            bottomTabs: {
              id: 'BottomTabsId',
              children: [
                {
                  stack: {
                    id: 'FooStackId',
                    children: [
                      {
                        component: {
                          name: 'FooScreen',
                          options: {
                            // topBar: {
                            //   visible: true,
                            //   drawBehind: true,
                            //   animate: false,
                            //   transparent: true,
                            //   translucent: true,
                            //   elevation: 0,
                            //   noBorder: true,
                            //   backButton: {
                            //     visible: true,
                            //   },
                            //   background: { color: 'transparent' },
                            // },
                            bottomTab: {
                              fontSize: 12,
                              text: 'Foo',
                              icon: visaIconFontAwesome,
                            },
                          },
                        },
                      },
                    ],
                  },
                },
                {
                  component: {
                    name: 'BarScreen',
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
        ],
      },
    },
  });
