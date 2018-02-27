import React from 'react';
import { StackNavigator } from 'react-navigation';
import Home from './home';
import People from './people';
const App = StackNavigator({
  Home: { screen: Home },
  People: { screen: People },
});
export default App;