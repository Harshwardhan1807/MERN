import { Row, Col, Table, Button } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import AdminLinksComponent from "../../../components/admin/AdminLinksComponent";

import { useState, useEffect } from "react";
import { logout } from "../../../redux/actions/userActions";
import { useDispatch } from "react-redux";


const UsersPageComponent = ({ fetchUsers, deleteUser }) => {
  const [users, setUsers] = useState([]);
  const [userDelete, setUserDelete] = useState(false);
  const dispatch = useDispatch();
  const deleteHandler = async(userid) => {
    if (window.confirm("Are you sure?")){
      const data = await deleteUser(userid);
      if (data==="user removed") {
        setUserDelete(!userDelete);
      }
    }
  };

  useEffect(() => {
    const abortController = new AbortController();
    fetchUsers(abortController)
      .then(res => setUsers(res))
      .catch((err) => dispatch(logout()));
    return () => abortController.abort();
  }, [userDelete]);
  return (
    <Row className="m-5">
      <Col md={2}>
        <AdminLinksComponent />
      </Col>
      <Col md={10}>
        <h1>User List</h1>
        {console.log(users)}
        <Table striped bordered hover responsive>
          <thead>
            <tr>
              <th>#</th>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Email</th>
              <th>Is Admin</th>
              <th>Edit/Delete</th>
            </tr>
          </thead>
          <tbody>
            {users.map(
              (user, idx) => (
                <tr key={idx}>
                  <td>{idx + 1}</td>
                  <td>{user.name}</td>
                  <td>{user.lastName}</td>
                  <td>{user.email}</td>
                  <td>
                    {user.isAdmin ? (
                      <i className="bi bi-check-lg text-success"></i>
                    ) : (
                      <i className="bi bi-x-lg text-danger"></i>
                    )}
                  </td>
                  <td>
                    <LinkContainer to={`/admin/edit-user/${user._id}`}>
                      <Button className="btn-sm">
                        <i className="bi bi-pencil-square"></i>
                      </Button>
                    </LinkContainer>
                    {" / "}
                    <Button variant="danger" className="btn-sm" onClick={() => deleteHandler(user._id)}>
                      <i className="bi bi-x-circle"></i>
                    </Button>
                  </td>
                </tr>
              )
            )}
          </tbody>
        </Table>
      </Col>
    </Row>
  );
};

export default UsersPageComponent;

