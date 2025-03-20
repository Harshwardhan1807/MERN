import { combineReducers, createStore, applyMiddleware, compose } from 'redux';
import { counterReducer } from './reducers/cartReducers';
import thunk from 'redux-thunk';

const reducer = combineReducers({
    cart: counterReducer
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
    reducer,
    {cart: {value: 0}},
    composeEnhancers(applyMiddleware(thunk))
);

export default store;
