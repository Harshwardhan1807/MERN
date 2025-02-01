import { Col, Container, Row } from "react-bootstrap";
import Table from 'react-bootstrap/Table';
import { Link } from "react-router-dom";
const UserOrdersPage = () => {
  return (
    <Container>
      <Row className="mt-5">
        <Col md={12}>
          <h1>My Orders</h1>
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>#</th>
                <th>User</th>
                <th>Date</th>
                <th>Total</th>
                <th>Delivered</th>
                <th>Order Details</th>
              </tr>
            </thead>
            <tbody>
              {["bi bi-check-lg text-success","bi bi-x-lg text-danger"].map((item, idx) => (
                <tr key={idx}>
                <td>{idx+1}</td>
                <td>Mark Otto</td>
                <td>2022-01-01</td>
                <td>%125</td>
                <td><i className={item}></i></td>
                <td><Link to="/user/order-details">Go to order  </Link></td>
              </tr>
              ))}
            </tbody>
          </Table>
        </Col>
      </Row>
    </Container>
  );
};

export default UserOrdersPage;