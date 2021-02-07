import React from 'react'
import{createStore,applyMiddleware} from 'redux';
import Thunk from 'redux-thunk'
import {rootReducer} from '../redux/reducer/rootReducer'
const store=createStore(rootReducer,applyMiddleware(Thunk));
export default store;

 