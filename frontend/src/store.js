import { applyMiddleware, compose, createStore } from 'redux';
import data from './data';
import { thunk } from 'redux-thunk';

//creating redux store 
const initialState = {};
const reducer = (state, action) => {
    return { products: data.products };
};
const composeEnhancer =
    window.__REDUX_DEVTOOLS_EXTENSION__||compose; 
    
const store = createStore(reducer, initialState, composeEnhancer(applyMiddleware(thunk)));
export default store;
