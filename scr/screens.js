import React from 'react';
import { Navigation } from 'react-native-navigation';

import Initial from './Initial';
import Foo from './Foo';
import Bar from './Bar';
import Baz from './Baz';
import Qux from './Qux';
import Quux from './Quux';
import Quuz from './Quuz';
import Corge from './Corge';
import Grault from './Grault';

// TODO: reasoning about the format, capital vs other?
export const RNN = {
  screen: {
    Initial: 'screen.Inital',
    Foo: 'screen.Foo',
    Bar: 'screen.Bar',
    Baz: 'screen.Baz',
    Qux: 'screen.Qux',
    Quux: 'screen.Quux',
    Quuz: 'screen.Quuz',
    Corge: 'screen.Corge',
    Grault: 'screen.Grault',
  },
  stack: {
    Main: 'stack.Main',
    BottomTabs: 'stack.BottomTabs',
    Foo: 'stack.Foo',
    Bar: 'stack.Bar',
    Baz: 'stack.Baz',
  },
};

export const registerScreens = () => {
  Navigation.registerComponent(RNN.screen.Initial, () => Initial);
  Navigation.registerComponent(RNN.screen.Foo, () => Foo);
  Navigation.registerComponent(RNN.screen.Bar, () => Bar);
  Navigation.registerComponent(RNN.screen.Baz, () => Baz);
  Navigation.registerComponent(RNN.screen.Qux, () => Qux);
  Navigation.registerComponent(RNN.screen.Quux, () => Quux);
  Navigation.registerComponent(RNN.screen.Quuz, () => Quuz);
  Navigation.registerComponent(RNN.screen.Corge, () => Corge);
  Navigation.registerComponent(RNN.screen.Grault, () => Grault);
};
