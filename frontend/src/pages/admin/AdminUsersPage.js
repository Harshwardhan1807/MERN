import UsersPageComponent from "./components/UsersPageComponent";

import axios from "axios";

const fetchUsers = async () => {
  const { data } = await axios.get("/api/users");
  return data
}

const deleteUser = async (userid) => {
  const { data } = await axios.delete(`/api/users/${userid}`);
  return data
}

const AdminUsersPage = () => {
  return <UsersPageComponent fetchUsers={fetchUsers} deleteUser={deleteUser} />;
};

export default AdminUsersPage;

