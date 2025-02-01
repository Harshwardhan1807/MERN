import { Button, Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import Form from 'react-bootstrap/Form';
import { useState } from "react";

const AdminEditUserPage = () => {
  const [validated, setValidated] = useState(false);
  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);
  };
  return (
    <Container>
      <Row className="justify-content-md-center mt-5">
        <Col md={1}>
          <Link to="/admin/users" className="btn btn-primary my-2">
            Go back
          </Link>
        </Col>
        <Col md={6}>
          <h1>Edit User</h1>
          <Form noValidate validated={validated} onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="BasicFirstName">
              <Form.Label>First Name</Form.Label>
              <Form.Control
                required
                type="text"
                name="name"
                defaultValue="John"
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="BasicLastName">
              <Form.Label>Last Name</Form.Label>
              <Form.Control
                required
                type="text" 
                name="lastname"
                defaultValue={"Doe"}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicCount">
              <Form.Label>Email</Form.Label>
              <Form.Control
                required
                type="email"
                name="email"
                defaultValue={"john@gmail.com"}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicCheckbox">
              <Form.Check name="isAdmin" type="checkbox" label="Is Admin" />
            </Form.Group>
            <Button variant="primary" type="submit">Update</Button>
          </Form>
        </Col>
      </Row>
    </Container>
  )
};

export default AdminEditUserPage;

