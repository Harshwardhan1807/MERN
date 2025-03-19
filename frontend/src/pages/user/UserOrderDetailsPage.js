import { Alert, Col, Container, Form, ListGroup, Row, Button } from "react-bootstrap";
import CartItemComponent from "../../components/CartItemComponent";
const UserOrderDetailsPage = () => {
  return (
    <Container fluid>
      <Row className="mt-4">
        <h1>Order Details</h1>
        <Col md={8}>
          <br></br>
          <Row>
            <Col md={6}>
              <h2>Shipping</h2>
              <b>Name</b>: Mark Otto<br></br>
              <b>Address</b>: 795 Folsom Ave, Suite 600<br></br>
              <b>Phone</b>: (555) 555-5555<br></br>
            </Col>
            <Col md={6}>
              <h2>Payment methods</h2>
              <Form.Select disabled={false}>
                <option value="pp">PayPal</option>
                <option value="cod">Cash on Delivery</option>
              </Form.Select>
            </Col>
            <Row>
              <Col>
                <Alert className="mt-3" variant="danger">
                  Not Delivered
                </Alert>
              </Col>
              <Col>
                <Alert className="mt-3" variant="success">
                  Paid on 1/1/2022
                </Alert>
              </Col>
            </Row>
          </Row>
          <br></br>
          <h2>Order Items</h2>
          <ListGroup variant="flush">
            {Array.from({ length: 3 }).map((item, idx) => (
              <CartItemComponent item={{ image: { path: "/images/monitors-category.png" }, name: "Monitor", price: 100, count: 10, quantity: 10 }} key={idx} />
            ))}
          </ListGroup>
        </Col>
        <Col md={4}>
          <ListGroup>
            <ListGroup.Item><h3>Order Summary</h3></ListGroup.Item>
            <ListGroup.Item><h3>Items price: <span className="fw-bold">$100</span></h3></ListGroup.Item>
            <ListGroup.Item><h3>Shipping: <span className="fw-bold">included</span></h3></ListGroup.Item>
            <ListGroup.Item><h3>Tax: <span className="fw-bold">included</span></h3></ListGroup.Item>
            <ListGroup.Item className="text-danger"><h3>Total :<span className="fw-bold">$100</span></h3></ListGroup.Item>
            <ListGroup.Item>
              <div className="d-grid gap-2">
                <Button variant="danger" type="button">Pay Now</Button>
              </div>
            </ListGroup.Item>
          </ListGroup>

        </Col>
      </Row>
    </Container>
  );
};

export default UserOrderDetailsPage;

