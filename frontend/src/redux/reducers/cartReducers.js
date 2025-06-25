import * as actionTypes from "../constants/cartConstants";

const CART_INITIAL_STATE = {
    cartItems: [],
    itemsCount: 0,
    cartSubtotal: 0,
}

export const cartReducer = (state = CART_INITIAL_STATE, action) => {
    switch (action.type) {
        case actionTypes.ADD_TO_CART:
            const productBeingAdded = action.payload;
            const productInCart = state.cartItems.find(item => item.productID === productBeingAdded.productID);
            const currentState = { ...state };
            if (productInCart) {
                currentState.itemsCount = 0;
                currentState.cartSubtotal = 0;
                currentState.cartItems = state.cartItems.map(item => {
                    if (item.productID === productInCart.productID) {
                        currentState.itemsCount += Number(productBeingAdded.quantity);
                        const sum = Number(productBeingAdded.quantity) * Number(productBeingAdded.price);
                        currentState.cartSubtotal += sum;
                    } else {
                        currentState.itemsCount += Number(item.quantity);
                        currentState.cartSubtotal += Number(item.price) * Number(item.quantity);
                    }
                    return item.productID === productInCart.productID ? productBeingAdded : item;
                });
            } else {
                currentState.itemsCount += Number(productBeingAdded.quantity);
                currentState.cartSubtotal += Number(productBeingAdded.price) * Number(productBeingAdded.quantity);
                currentState.cartItems = [...state.cartItems, productBeingAdded];
            }
            return currentState;
        case actionTypes.REMOVE_FROM_CART:
            return {
                ...state,
                cartItems: state.cartItems.filter(item => item.productID !== action.payload.productID),
                itemsCount: state.itemsCount - action.payload.quantity,
                cartSubtotal: state.cartSubtotal - action.payload.price * action.payload.quantity,
            }
        default:
            return state
    }
}