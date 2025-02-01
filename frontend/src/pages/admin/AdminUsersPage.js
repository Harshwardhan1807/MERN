import { Col, Container, Row } from "react-bootstrap";
import Table from 'react-bootstrap/Table';
import AdminLinksComponent from "../../components/admin/AdminLinksComponent";
import { LinkContainer } from "react-router-bootstrap";
import {Button} from "react-bootstrap";

const deleteHandler = () => {
  if(window.confirm("Are you sure?")) {
    
  }
}
const AdminUsersPage = () => {
  return (
    <Container>
      <Row className="m-5">
        <Col md={2}>
          <AdminLinksComponent />
        </Col>
        <Col md={10}>
          <h1>User list</h1>
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
              {["bi bi-check-lg text-success", "bi bi-x-lg text-danger"].map((item, idx) => (
                <tr key={idx}>
                  <td>{idx + 1}</td>
                  <td>Mark </td>
                  <td>Otto</td>
                  <td>mark@gmail.com</td>
                  <td><i className={item}></i></td>
                  <td>
                    <LinkContainer to="/admin/edit-user">
                      <Button className="btn-sm"><i className="bi bi-pencil-square"></i></Button>
                    </LinkContainer>
                    {" / "}
                    <Button variant="danger" className="btn-sm" onClick={deleteHandler}><i className="bi bi-trash"></i></Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </Col>
      </Row>
    </Container>
  );
};

export default AdminUsersPage;