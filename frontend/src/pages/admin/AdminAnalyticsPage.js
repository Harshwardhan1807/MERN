import AnalyticsPageComponent from "./components/AnalyticsPageComponent";
import axios from "axios";
import socketIOClient from "socket.io-client";

const fetchOrdersForFirstDate = async (abctrl, firstDateToCompare) => {
  console.log(firstDateToCompare,"000000000000000000000000000000000000000000")
  const { data } = await axios.get(`/api/orders/analysis/${firstDateToCompare}`, {
    signal: abctrl.signal,
  })
  return data
}

const fetchOrdersForSecondDate = async (abctrl, secondDateToCompare) => {
  const { data } = await axios.get(`/api/orders/analysis/${secondDateToCompare}`, {
    signal: abctrl.signal,
  })
  return data
}
const AdminAnalyticsPage = () => {
  return <AnalyticsPageComponent fetchOrdersForFirstDate={fetchOrdersForFirstDate} 
  fetchOrdersForSecondDate={fetchOrdersForSecondDate} socketIOClient={socketIOClient}/>;
};

export default AdminAnalyticsPage;