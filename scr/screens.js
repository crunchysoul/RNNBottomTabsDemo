import React from 'react';
import { Navigation } from 'react-native-navigation';

import Initial from './Initial';
import Foo from './Foo';
import Bar from './Bar';
import Baz from './Baz';
import Qux from './Qux';
// import Quux from './Quux';
// import Quuz from './Quuz';
// import Corge from './Corge';

// TODO: reasoning about the format, capital vs other?
export const RNN = {
  screen: {
    Initial: 'screen.Inital',
    Foo: 'screen.Foo',
    Bar: 'screen.Bar',
    Baz: 'screen.Baz',
    Qux: 'screen.Qux',
    // Quux: 'screen.Quux',
    // Quuz: 'screen.Quuz',
    // Corge: 'screen.Corge',
  },
  stack: {
    App: 'stack.App',
    BottomTabs: 'stack.BottomTabs',
    Foo: 'stack.Foo',
    Bar: 'stack.Bar',
    // Baz: 'stack.Baz',
  },
  btn: {
    TopBar: {
      left: {
        Baz: 'btn.TopBar.left.Baz',
      },
      right: {
        Baz: 'btn.TopBar.right.Baz',
      },
    },
  },
};

export const registerScreens = () => {
  Navigation.registerComponent(RNN.screen.Initial, () => Initial);
  Navigation.registerComponent(RNN.screen.Foo, () => Foo);
  Navigation.registerComponent(RNN.screen.Bar, () => Bar);
  Navigation.registerComponent(RNN.screen.Baz, () => Baz);
  Navigation.registerComponent(RNN.screen.Qux, () => Qux);
};
