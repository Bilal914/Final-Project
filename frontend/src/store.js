import { applyMiddleware, combineReducers, compose, createStore } from 'redux';
import thunk from 'redux-thunk';
import { cartReducer } from './reducers/cartReducers';
import productListReducer from './reducers/productReducers';
import productDetailsReducer from './reducers/productReducers';


//creating redux store 
const initialState = {};
const reducer = combineReducers({
productList:productListReducer,
productDetails:productDetailsReducer,
cart:cartReducer,
});
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(reducer, initialState, composeEnhancer(applyMiddleware(thunk)));
export default store;
