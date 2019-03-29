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

const FooBottomTab = {
  stack: {
    id: 'FooStackId',
    children: [
      {
        component: {
          name: 'FooScreen',
          options: {
            bottomTab: {
              fontSize: 12,
              icon: visaIconFontAwesome,
            },
            topBar: {
              visible: true,
              animate: false,
              title: {
                text: 'FooScreen',
              },
            },
          },
        },
      },
    ],
  },
};

const BarBottomTab = {
  stack: {
    id: 'BarStackId',
    children: [
      {
        component: {
          name: 'BarScreen',
          options: {
            bottomTab: {
              fontSize: 12,
              icon: paypalIconFontAwesome,
            },
            topBar: {
              visible: true,
              title: {
                text: 'BarScreen',
              },
            },
          },
        },
      },
    ],
  },
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
        children: [FooBottomTab, BarBottomTab],
        // children: [
        //   {
        //     bottomTabs: {
        //       id: 'BottomTabsId',
        //       children: [
        //         {
        //           // NOTE XXX XXX XXX XXX XXX XXX
        //           // Stack Level 2, local level:
        //           // { FooScreen || ... }
        //           stack: {
        //             id: 'FooStackId',
        //             children: [
        //               {
        //                 component: {
        //                   name: 'FooScreen',
        //                   options: {
        //                     bottomTab: {
        //                       fontSize: 12,
        //                       icon: visaIconFontAwesome,
        //                     },
        //                     topBar: {
        //                       visible: true,
        //                       animate: false,
        //                       title: {
        //                         text: 'FooScreen',
        //                       },
        //                     },
        //                   },
        //                 },
        //               },
        //             ],
        //           },
        //         },
        //         {
        //           stack: {
        //             id: 'BarStackId',
        //             children: [
        //               {
        //                 component: {
        //                   name: 'BarScreen',
        //                   options: {
        //                     bottomTab: {
        //                       fontSize: 12,
        //                       icon: paypalIconFontAwesome,
        //                     },
        //                     topBar: {
        //                       visible: true,
        //                       title: {
        //                         text: 'BarScreen',
        //                       },
        //                     },
        //                   },
        //                 },
        //               },
        //             ],
        //           },
        //         },
        //       ],
        //     },
        //   },
        // ],
      },
    },
  });
};
