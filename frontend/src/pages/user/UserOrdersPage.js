import UserOrdersPageComponent from "./components/UserOrdersPageComponent";
import axios from "axios";

const fetchOrders = async () => {
  const { data } = await axios.get("/api/orders");
  return data;
};

const UserOrdersPage = () => {
  return <UserOrdersPageComponent getOrders={fetchOrders}/>;
};  

export default UserOrdersPage;