import EditUserPageComponent from "./components/EditUserPageComponent";
import axios from "axios";


const fetchUser = async (userId) => {
  const { data } = await axios.get(`/api/users/${userId}`);
  return data
}
const updateUserApiRequest = async (userId,name, lastname, email, isAdmin) => {
  const { data } = await axios.put(`/api/users/${userId}`, { name, lastname, email, isAdmin });
  return data;
}


const AdminEditUserPage = () => {
  return <EditUserPageComponent updateUserApiRequest={updateUserApiRequest} fetchUser={fetchUser} />;
};

export default AdminEditUserPage;