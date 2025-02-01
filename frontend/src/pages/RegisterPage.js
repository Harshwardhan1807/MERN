import { Alert, Col, Container, Row } from "react-bootstrap";
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link } from "react-router-dom";
import Spinner from 'react-bootstrap/Spinner';

const RegisterPage = () => {
  const [validated, setValidated] = useState(false);
  const onChange = () => {
    const password=document.querySelector("input[name=password]");
    const confirmPassword=document.querySelector("input[name=confirmpassword]");
    if(password.value!==confirmPassword.value){
      confirmPassword.setCustomValidity("Passwords don't match");
    }else{
      confirmPassword.setCustomValidity("");
    }
  }
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
          <h1>Register</h1>
          <Form noValidate validated={validated} onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="validationCustom01">
              <Form.Label>Your first name</Form.Label>
              <Form.Control
                required
                type="text"
                placeholder="Enter your first name"
                name="name"
              />
              <Form.Control.Feedback type="invalid">Please enter a first name</Form.Control.Feedback>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicLastName">
              <Form.Label>Your last name</Form.Label>
              <Form.Control
                required
                type="text"
                placeholder="Enter your last name"
                name="lastName"
              />
              <Form.Control.Feedback type="invalid">Please enter a last name</Form.Control.Feedback>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Your email address</Form.Label>
              <Form.Control
                required
                type="email"
                placeholder="Enter your email id"
                name="email"
              />
              <Form.Control.Feedback type="invalid">Please enter a valid email id</Form.Control.Feedback>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                required
                type="password"
                placeholder="Password"
                name="password"
                minLength={6}
                onChange={onChange}
              />
              <Form.Control.Feedback type="invalid">Please enter a valid password</Form.Control.Feedback>
              <Form.Text className="text-muted">
                Password should have at least 6 characters
              </Form.Text>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPasswordRepeat">
              <Form.Label>Password</Form.Label>
              <Form.Control
                required
                type="password"
                placeholder="Repeat Password"
                name="confirmpassword"
                minLength={6}
                onChange={onChange}
              />
              <Form.Control.Feedback type="invalid">Both passwords must match</Form.Control.Feedback>
            </Form.Group>
            <Row className="pb-2">
              <Col>Do you already have an account?
                <Link to="/login"> Login</Link>
              </Col>
            </Row>
            <Button type="submit">
              <Spinner
                as="span"
                animation="border"
                size="sm"
                role="status"
                aria-hidden="true"
              />
              Submit form
            </Button>
            <Alert show={true} variant="danger">User with this email id already exists</Alert>
            <Alert show={true} variant="info">User registered successfully</Alert>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default RegisterPage;

