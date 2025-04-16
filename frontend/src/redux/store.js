import { combineReducers, createStore, applyMiddleware, compose } from 'redux';
import { counterReducer } from './reducers/cartReducers';
import { userRegisterLoginReducer } from './reducers/userReducers';
import thunk from 'redux-thunk';

const reducer = combineReducers({
    cart: counterReducer,
    userRegisterLogin: userRegisterLoginReducer
});
const userInfoInLocalStorage = localStorage.getItem('userInfo') ? JSON.parse(localStorage.getItem('userInfo'))
    : sessionStorage.getItem('userInfo') ? JSON.parse(sessionStorage.getItem('userInfo')) : {};
const initialState = {
    cart: { value: 0 },
    userRegisterLogin: { userInfo: userInfoInLocalStorage }
};
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
    reducer,
    initialState,
    composeEnhancers(applyMiddleware(thunk))
);

export default store;
