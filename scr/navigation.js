import { Navigation } from 'react-native-navigation';
import { registerScreens, RNN } from './screens';
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
      stack: {
        id: RNN.stack.App,
        options: {
          topBar: {
            visible: false,
            drawBehind: true,
            animate: false,
            transparent: true,
            translucent: true,
            elevation: 0,
            background: {
              color: 'transparent',
            },
          },
        },
        children: [
          {
            bottomTabs: {
              id: RNN.stack.BottomTabs,
              children: [
                {
                  stack: {
                    id: RNN.stack.Foo,
                    children: [
                      {
                        component: {
                          // XXX: should component name and id be set to the
                          // same?
                          name: RNN.screen.Foo,
                          id: RNN.screen.Foo,
                          options: {
                            bottomTab: {
                              fontSize: 12,
                              icon: visaIconFontAwesome,
                            },
                            topBar: {
                              visible: true,
                              animate: false,
                              title: {
                                text: RNN.screen.Foo,
                              },
                            },
                          },
                        },
                      },
                    ],
                  },
                },
                {
                  stack: {
                    id: RNN.stack.Bar,
                    children: [
                      {
                        component: {
                          name: RNN.screen.Bar,
                          id: RNN.screen.Bar,
                          options: {
                            bottomTab: {
                              fontSize: 12,
                              icon: paypalIconFontAwesome,
                            },
                            topBar: {
                              visible: true,
                              title: {
                                text: RNN.screen.Bar,
                              },
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
        ],
      },
    },
  });
};
