import { Navigation } from 'react-native-navigation';
import { registerScreens } from './screens';
import { initIcons } from './icons';
import {
  MainStackTopBar,
  TestStackTopBar,
  TestFooStackTopBar,
  NoTopBar,
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

export const toMain = () =>
  Navigation.setRoot({
    root: {
      stack: {
        id: 'MainStackId',
        options: {
          topBar: MainStackTopBar,
        },
        children: [
          {
            bottomTabs: {
              id: 'BottomTabsId',
              children: [
                {
                  stack: {
                    id: 'FooStackId',
                    options: {
                      topBar: TestStackTopBar,
                    },
                    children: [
                      {
                        component: {
                          name: 'FooScreen',
                          options: {
                            bottomTab: {
                              fontSize: 12,
                              text: 'Foo',
                              icon: visaIconFontAwesome,
                            },
                            topBar: TestFooStackTopBar,
                          },
                        },
                      },
                    ],
                  },
                },
                {
                  stack: {
                    id: 'BarStackId',
                    children: [
                      {
                        component: {
                          name: 'BarScreen',
                          options: {
                            bottomTab: {
                              text: 'Bar',
                              fontSize: 12,
                              icon: mastercardIconFontAwesome,
                            },
                            // topBar: MainStackTopBar,
                          },
                        },
                      },
                    ],
                  },
                },
                {
                  stack: {
                    id: 'BazStackId',
                    children: [
                      {
                        component: {
                          name: 'BazScreen',
                          options: {
                            bottomTab: {
                              text: 'Baz',
                              fontSize: 12,
                              icon: amexIconFontAwesome,
                            },
                            // topBar: MainStackTopBar,
                          },
                        },
                      },
                    ],
                  },
                },
                {
                  stack: {
                    id: 'QuxStackId',
                    children: [
                      {
                        component: {
                          name: 'QuxScreen',
                          options: {
                            bottomTab: {
                              text: 'Qux',
                              fontSize: 12,
                              icon: paypalIconFontAwesome,
                            },
                            // topBar: MainStackTopBar,
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

// const stackOf = (id, children) => ({
//   stack: {
//     id,
//     children,
//   },
// });
//
// const componentOf = (name, options) => ({
//   component: {
//     name,
//     options,
//   },
// });
//
// const Foo = componentOf('FooScreen', {
//   bottomTab: {
//     fontSize: 12,
//     text: 'Foo',
//     icon: visaIconFontAwesome,
//   },
// });
// const Bar = componentOf('BarScreen', {
//   bottomTab: {
//     fontSize: 12,
//     text: 'Bar',
//     icon: mastercardIconFontAwesome,
//   },
// });
// const Baz = componentOf('BazScreen', {
//   bottomTab: {
//     fontSize: 12,
//     text: 'Baz',
//     icon: amexIconFontAwesome,
//   },
// });
// const Qux = componentOf('QuxScreen', {
//   bottomTab: {
//     fontSize: 12,
//     text: 'Qux',
//     icon: paypalIconFontAwesome,
//   },
// });
//
// const FooStack = stackOf('FooStackId', Foo);
//
// export const toMain = () => {
//   Navigation.setRoot({
//     root: stackOf('MainStackId', [Foo, Bar, Baz, Qux]),
//   });
// };
