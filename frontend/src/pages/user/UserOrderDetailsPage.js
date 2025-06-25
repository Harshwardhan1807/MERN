import UserOrderDetailsPageComponent from "./components/UserOrderDetailsPageComponent";
import { useSelector } from "react-redux";
import axios from "axios";
import { loadScript } from '@paypal/paypal-js'

const getOrder = async (id) => {
  const { data } = await axios.get("/api/orders/user/" + id);
  return data
}

const loadPayPalScript = (cartSubtotal, cartItems, orderID, updateStateAfterOrder) => {
  loadScript({ "client-id": "AYdKVgx112WtuIBjJp66m9rQzlelwwngludzVm8Ci00OfKxsSO60LQMcZLMioZzf1ZRl0ZZ4idwkC-vw" })
    .then(paypal => {
      paypal.Buttons(buttons(cartSubtotal, cartItems, orderID, updateStateAfterOrder)).render("#paypal-container-element");
    })
    .catch((err) => console.log("Failed to load the script for paypal ", err));
}

const buttons = (cartSubtotal, cartItems, orderID, updateStateAfterOrder) => {
  return {
    createOrder: function (data, actions) {
      return actions.order.create({
        purchase_units: [
          {
            amount: {
              value: cartSubtotal,
              breakdown: {
                item_total: {
                  currency_code: "USD",
                  value: cartSubtotal,
                }
              }
            },
            items: cartItems.map(item => {
              return {
                name: item.name,
                description: item.description,
                quantity: item.quantity,
                unit_amount: {
                  currency_code: "USD",
                  value: item.price,
                },
              }
            })
          },
        ],
      });
    },
    onCancel: onCancelHandler,
    onApprove: function (data, actions) {
      return actions.order.capture().then(function (details) {
        var transaction = details.purchase_units[0].payments.captures[0];
        if (transaction.status === "COMPLETED" && Number(transaction.amount.value) === Number(cartSubtotal)) {
          updateOrder(orderID).then(data => {
            if(data.isPaid){
              updateStateAfterOrder(data.paidAt);
            }
          }).catch((err) => console.log(err));
        }
      });
    },
    onError: onErrorHandler
  }
}

const onCancelHandler = function () {

}

const onErrorHandler = function () {

}

const updateOrder = async (orderID) => {
  const { data } = await axios.put("/api/orders/paid/" + orderID);
  return data;
}
const UserOrderDetailsPage = () => {
  const userInfo = useSelector((state) => state.userRegisterLogin.userInfo);
  const getUser = async () => {
    const { data } = await axios.get("/api/users/profile/" + userInfo._id);
    return data;
  }
  return <UserOrderDetailsPageComponent userInfo={userInfo} getUser={getUser} getOrder={getOrder} loadPayPalScript={loadPayPalScript} />;
};

export default UserOrderDetailsPage;

