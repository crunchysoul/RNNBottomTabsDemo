import React from 'react';
import { Navigation } from 'react-native-navigation';

import Initial from './Initial';
import Foo from './Foo';
import Bar from './Bar';
import Baz from './Baz';
import Qux from './Qux';

export const registerScreens = () => {
  Navigation.registerComponent(`InitialScreen`, () => Initial);
  Navigation.registerComponent(`FooScreen`, () => Foo);
  Navigation.registerComponent(`BarScreen`, () => Bar);
  Navigation.registerComponent(`BazScreen`, () => Baz);
  Navigation.registerComponent(`QuxScreen`, () => Baz);
};
