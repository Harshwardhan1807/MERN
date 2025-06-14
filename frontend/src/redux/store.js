import { combineReducers, createStore, applyMiddleware, compose } from 'redux';
import { cartReducer } from './reducers/cartReducers';
import { userRegisterLoginReducer } from './reducers/userReducers';
import thunk from 'redux-thunk';

const reducer = combineReducers({
    cart: cartReducer,
    userRegisterLogin: userRegisterLoginReducer
});
const cartItemsLocalStorage = localStorage.getItem('cart') ? JSON.parse(localStorage.getItem('cart')) : [];
const userInfoInLocalStorage = localStorage.getItem('userInfo') ? JSON.parse(localStorage.getItem('userInfo'))
    : sessionStorage.getItem('userInfo') ? JSON.parse(sessionStorage.getItem('userInfo')) : {};

const initialState = {
    cart: {
        cartItems: cartItemsLocalStorage,
        itemsCount: cartItemsLocalStorage ? cartItemsLocalStorage.reduce((quantity, item) =>
            quantity + Number(item.quantity), 0) : 0,
        cartSubtotal: cartItemsLocalStorage ? cartItemsLocalStorage.reduce((total, item) =>
            total + Number(item.price) * Number(item.quantity), 0) : 0
    },
    userRegisterLogin: { userInfo: userInfoInLocalStorage }
};
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
    reducer,
    initialState,
    composeEnhancers(applyMiddleware(thunk))
);

export default store;
