import { createStore } from 'redux';

const defaultState = { isAuthendicated: true };

const reducer = (state = defaultState, action) => {
    return state;
};

const store = createStore(reducer);
export default store;
