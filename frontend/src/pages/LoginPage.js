import { Alert, Col, Container, Row } from "react-bootstrap";
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link } from "react-router-dom";
import Spinner from 'react-bootstrap/Spinner';

const LoginPage  = () => {
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
      <Row className="mt-5 justify-content-center">
        <Col md={6}>
          <h1>Login</h1>
          <Form noValidate validated={validated} onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Your email address</Form.Label>
              <Form.Control
                required
                type="email"
                placeholder="Enter your email id"
                name="email"
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                required
                type="password"
                placeholder="Password"
                name="password"
                minLength={6}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicCheckbox">
              <Form.Check name="donotlogout" type="checkbox" label="Do not logout"></Form.Check>
            </Form.Group>
            <Row className="pb-2">
              <Col>Don't have an account?
                <Link to="/register"> Register</Link>
              </Col>
            </Row>
            <Button variant="primary" type="submit">
              <Spinner
                as="span"
                animation="border"
                size="sm"
                role="status"
                aria-hidden="true"
              />
              Login
            </Button>
            <Alert show={true} variant="danger">Wrong credentials</Alert>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default LoginPage;

