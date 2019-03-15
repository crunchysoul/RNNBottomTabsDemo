import { Navigation } from 'react-native-navigation';

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
                },
              },
            },
          },
        ],
      },
    },
  });
