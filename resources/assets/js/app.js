/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

require('./bootstrap');
require('../../../node_modules/superfish/dist/js/superfish.min');

import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import store from './store/index'
import Routes from './routes/index'
import { authCheck } from './modules/frontend/auth/store/actions'

store.dispatch(authCheck());
const jsx = (
    <Provider store={store} >
        <Routes />
    </Provider>
);


const appRoot = document.getElementById('app');

render(jsx, appRoot);