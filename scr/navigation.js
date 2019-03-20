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
  Navigation.setDefaultOptions({
    topBar: HideTopBar,
  });
  Navigation.setRoot({
    root: {
      // NOTE XXX XXX XXX XXX XXX XXX
      // Stack Level 1, global level:
      // { bottomTabs || QuuxScreen }
      stack: {
        id: 'MainStackId',
        // options: {
        //   topBar: HideTopBar,
        // },
        children: [
          {
            bottomTabs: {
              id: 'BottomTabsId',
              // options: {
              //   topBar: TestFooStackTopBar,
              // },
              children: [
                {
                  // NOTE XXX XXX XXX XXX XXX XXX
                  // Stack Level 2, local level:
                  // { FooScreen || ... }
                  stack: {
                    id: 'FooStackId',
                    // options: {
                    //   topBar: TestBarStackTopBar,
                    // },
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
                            // NOTE XXX XXX XXX XXX XXX XXX
                            // Component Level TopBar:
                            // topBar: HideTopBar,
                            topBar: InvisiableStackTopBar,
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
                              // text: 'Bar',
                              fontSize: 12,
                              icon: mastercardIconFontAwesome,
                            },
                            // topBar: MainStackTopBar,
                            // topBar: TestFooStackTopBar,
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
                              // text: 'Baz',
                              fontSize: 12,
                              icon: amexIconFontAwesome,
                            },
                            // topBar: TestFooStackTopBar,
                            // topBar: MainStackTopBar,
                          },
                        },
                      },
                    ],
                  },
                },
                {
                  stack: {
                    id: 'CorgeStackId',
                    children: [
                      {
                        component: {
                          name: 'CorgeScreen',
                          options: {
                            bottomTab: {
                              // text: 'Corge',
                              fontSize: 12,
                              icon: paypalIconFontAwesome,
                            },
                            // topBar: TestFooStackTopBar,
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
};

// export const toMain = () => {
//   Navigation.setDefaultOptions({
//     topBar: {
//       visible: false,
//       title: {
//         text: 'Default Title',
//       },
//     },
//   });
//   Navigation.setRoot({
//     root: {
//       // NOTE XXX XXX XXX XXX XXX XXX
//       // Stack Level 1, global level:
//       // { bottomTabs || QuuxScreen }
//       stack: {
//         id: 'MainStackId',
//         options: {
//           topBar: HideTopBar,
//         },
//         children: [
//           {
//             bottomTabs: {
//               id: 'BottomTabsId',
//               options: {
//                 height: 75,
//               },
//               children: [
//                 {
//                   // NOTE XXX XXX XXX XXX XXX XXX
//                   // Stack Level 2, local level:
//                   // { FooScreen || ... }
//                   stack: {
//                     id: 'FooStackId',
//                     // options: {
//                     //   topBar: TestStackTopBar,
//                     // },
//                     children: [
//                       {
//                         component: {
//                           name: 'FooScreen',
//                           options: {
//                             bottomTab: {
//                               fontSize: 12,
//                               // text: 'Foo',
//                               icon: visaIconFontAwesome,
//                             },
//                             // NOTE XXX XXX XXX XXX XXX XXX
//                             // Component Level TopBar:
//                             topBar: HideTopBar,
//                           },
//                         },
//                       },
//                     ],
//                   },
//                 },
//                 {
//                   stack: {
//                     id: 'BarStackId',
//                     children: [
//                       {
//                         component: {
//                           name: 'BarScreen',
//                           options: {
//                             bottomTab: {
//                               // text: 'Bar',
//                               fontSize: 12,
//                               icon: mastercardIconFontAwesome,
//                             },
//                             // topBar: MainStackTopBar,
//                             // topBar: TestFooStackTopBar,
//                           },
//                         },
//                       },
//                     ],
//                   },
//                 },
//                 {
//                   stack: {
//                     id: 'BazStackId',
//                     children: [
//                       {
//                         component: {
//                           name: 'BazScreen',
//                           options: {
//                             bottomTab: {
//                               // text: 'Baz',
//                               fontSize: 12,
//                               icon: amexIconFontAwesome,
//                             },
//                             // topBar: TestFooStackTopBar,
//                             // topBar: MainStackTopBar,
//                           },
//                         },
//                       },
//                     ],
//                   },
//                 },
//                 {
//                   stack: {
//                     id: 'CorgeStackId',
//                     children: [
//                       {
//                         component: {
//                           name: 'CorgeScreen',
//                           options: {
//                             bottomTab: {
//                               // text: 'Corge',
//                               fontSize: 12,
//                               icon: paypalIconFontAwesome,
//                             },
//                             // topBar: TestFooStackTopBar,
//                             // topBar: MainStackTopBar,
//                           },
//                         },
//                       },
//                     ],
//                   },
//                 },
//               ],
//             },
//           },
//         ],
//       },
//     },
//   });
// };

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
