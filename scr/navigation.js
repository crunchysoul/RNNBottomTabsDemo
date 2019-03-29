import { Navigation } from 'react-native-navigation';
import { registerScreens } from './screens';
import { initIcons } from './icons';
import {
  MainStackTopBar,
  TestStackTopBar,
  TestFooStackTopBar,
  TestBarStackTopBar,
  HideTopBar,
  ShowTopBar,
  InvisiableStackTopBar,
} from './MainStackTopBar';

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

export const toMain = () => {
  // NOTE:
  // Set global topBar default to hide
  // adjust if needed to show in loweset component level as possible
  // Navigation.setDefaultOptions({
  //   topBar: HideTopBar,
  // });

  Navigation.setRoot({
    root: {
      // NOTE XXX XXX XXX XXX XXX XXX
      // Stack Level 1, global level:
      // { bottomTabs || QuuxScreen }
      stack: {
        id: 'MainStackId',
        options: {
          topBar: {
            title: {
              text: 'MainStackId',
            },
            visible: false,
            drawBehind: true,
            animate: false,
            transparent: true,
            translucent: true,
            elevation: 0,
            noBorder: true,
            backButton: {
              visible: true,
            },
            background: { color: 'transparent' },
          },
        },
        children: [
          {
            bottomTabs: {
              id: 'BottomTabsId',
              children: [
                {
                  // NOTE XXX XXX XXX XXX XXX XXX
                  // Stack Level 2, local level:
                  // { FooScreen || ... }
                  stack: {
                    id: 'FooStackId',
                    topBar: {
                      visible: false,
                      title: {
                        text: 'FooStackId',
                      },
                    },
                    children: [
                      {
                        component: {
                          name: 'FooScreen',
                          options: {
                            bottomTab: {
                              fontSize: 12,
                              // text: 'Foo',
                              icon: visaIconFontAwesome,
                            },
                            topBar: {
                              visible: true,
                              title: {
                                text: 'FooScreen',
                              },
                            },
                            // NOTE XXX XXX XXX XXX XXX XXX
                            // Component Level TopBar:
                            // topBar: InvisiableStackTopBar,
                          },
                        },
                      },
                    ],
                  },
                },
                {
                  stack: {
                    id: 'BarStackId',
                    topBar: {
                      visible: false,
                    },
                    title: {
                      text: 'BarStackId',
                    },
                    children: [
                      {
                        component: {
                          name: 'BarScreen',
                          options: {
                            bottomTab: {
                              // text: 'Bar',
                              fontSize: 12,
                              icon: paypalIconFontAwesome,
                            },
                            topBar: {
                              visible: true,
                              title: {
                                text: 'BarScreen',
                              },
                            },
                            // topBar: MainStackTopBar,
                            // topBar: TestFooStackTopBar,
                          },
                        },
                      },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
  });
};
