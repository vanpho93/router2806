import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './redux/store';
import Screen from './components/Screen';

ReactDOM.render(
    <Provider store={store}>
        <Screen />
    </Provider>,
    document.getElementById('root') // eslint-disable-line
);
