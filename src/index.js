import React, {Component} from 'react';
import {Provider} from 'react-redux';
import Store from './redux/Store';
import HomeScreen from './container/HomeScreen';

export default class App extends Component {
  render() {
    return (
      <Provider store={Store}>
        <HomeScreen />
      </Provider>
    );
  }
}
