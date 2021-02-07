
import React from 'react';
import {
  View,
  Text,
} from 'react-native';
import { Provider } from 'react-redux'
import store from './redux/store'
import Navigation from './router/Navigation'
const App  = () => {
  return (
    <>
      <Provider store={store}>
      <Navigation />     
    </Provider> 
    </>
  );
};


export default App;