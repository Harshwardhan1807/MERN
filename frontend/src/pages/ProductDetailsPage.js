import ProductDetailsPageComponent from "./components/ProductDetailsPageComponent";
import { useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";


import { addToCart } from "../redux/actions/cartActions";
import axios from 'axios'

const getProductDetails = async (id) => {
  const { data } = await axios.get(`/api/products/get-one/${id}`);
  return data
}

const writeReviewApiRequest = async (productId, formInputs) => {
  const { data } = await axios.post(`/api/users/review/${productId}`, { ...formInputs });
  return data;
}

const ProductDetailsPage = () => {

  const dispatch = useDispatch()

  const userInfo = useSelector((state) => state.userRegisterLogin.userInfo);


  return <ProductDetailsPageComponent addToCartReduxAction={addToCart} reduxDispatch={dispatch} getProductDetails={getProductDetails} userInfo={userInfo} writeReviewApiRequest={writeReviewApiRequest} />;
};

export default ProductDetailsPage;

