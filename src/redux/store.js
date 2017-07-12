import { createStore } from 'redux';

const defaultState = { isAuthendicated: false };

const reducer = (state = defaultState, action) => {
    if (action.type === 'SIGN_IN') return { isAuthendicated: true };
    if (action.type === 'SIGN_OUT') return { isAuthendicated: false };
    return state;
};

const store = createStore(reducer);
export default store;
