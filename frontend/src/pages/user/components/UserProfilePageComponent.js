import { Container, Row, Col, Form, Button, Alert } from "react-bootstrap";
import { useState, useEffect } from "react";

const UserProfilePageComponent = ({ updateUserApiRequest, fetchUser, userInfo, 
  setReduxUserState, reduxDispatch, localStorage, sessionStorage }) => {
  const [validated, setValidated] = useState(false);
  const [updateUserState, setUpdateUserState] = useState({ success: "", error: "" });
  const [passwordsMatchState, setPasswordsMatchState] = useState(true);
  const [user, setUser] = useState({});
  useEffect(() => {
    fetchUser(userInfo._id).then(user => setUser(user)).catch((er) => console.log(er));
  }, [userInfo._id])
  const onChange = () => {
    const password = document.querySelector("input[name=password]");
    const confirmPassword = document.querySelector("input[name=confirmPassword]");
    if (confirmPassword.value === password.value) {
      setPasswordsMatchState(true);
    } else {
      setPasswordsMatchState(false);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    event.stopPropagation();
    const form = event.currentTarget.elements;

    const name = form.name.value;
    const lastName = form.lastName.value;
    const phoneNumber = form.phoneNumber.value;
    const address = form.address.value;
    const country = form.country.value;
    const zipCode = form.zipCode.value;
    const city = form.city.value;
    const state = form.state.value;
    const password = form.password.value;

    if (event.currentTarget.checkValidity() === true && form.password.value === form.confirmPassword.value) {
      updateUserApiRequest(name, lastName, phoneNumber, address, country, zipCode, city, state, password).then(data => {
        setUpdateUserState({ success: data.success, error: "" });
        reduxDispatch(setReduxUserState({doNotLogout: userInfo.doNotLogout, ...data.userUpdated}));
        if (userInfo.doNotLogout) {
          localStorage.setItem("userInfo", JSON.stringify({doNotLogout:true,...data.userUpdated}));
        } else {
          sessionStorage.setItem("userInfo", JSON.stringify({doNotLogout:false,...data.userUpdated}));
        }
      })
        .catch((er) =>
          setUpdateUserState({ error: er.response.data.message ? er.response.data.message : er.response.data })
        );
    }

    setValidated(true);
  };
  return (
    <Container>
      <Row className="mt-5 justify-content-md-center">
        <Col md={6}>
          <h1>Change your profile</h1>
          <Form noValidate validated={validated} onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="validationCustom01">
              <Form.Label>Your name</Form.Label>
              <Form.Control
                required
                type="text"
                defaultValue={user.name}
                name="name"
              />
              <Form.Control.Feedback type="invalid">
                Please enter a name
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicLastName">
              <Form.Label>Your last name</Form.Label>
              <Form.Control
                required
                type="text"
                defaultValue={user.lastName}
                name="lastName"
              />
              <Form.Control.Feedback type="invalid">
                Please enter your last name
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                disabled
                value={user.email + "  if you want to change email, remove account and create new one with new email address"}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPhone">
              <Form.Label>Phone number</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter your phone number"
                defaultValue={user.phoneNumber}
                name="phoneNumber"
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicAddress">
              <Form.Label>Address</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter your street name and house number"
                defaultValue={user.address}
                name="address"
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicCountry">
              <Form.Label>Country</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter your country"
                defaultValue={user.country}
                name="country"
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicZip">
              <Form.Label>Zip Code</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter your Zip code"
                defaultValue={user.zipCode}
                name="zipCode"
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicCity">
              <Form.Label>City</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter your city"
                defaultValue={user.city}
                name="city"
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicState">
              <Form.Label>State</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter your state"
                defaultValue={user.state}
                name="state"
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                name="password"
                required
                type="password"
                placeholder="Password"
                minLength={6}
                onChange={onChange}
                isInvalid={!passwordsMatchState}
              />
              <Form.Control.Feedback type="invalid">
                Please anter a valid password
              </Form.Control.Feedback>
              <Form.Text className="text-muted">
                Password should have at least 6 characters
              </Form.Text>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPasswordRepeat">
              <Form.Label>Repeat Password</Form.Label>
              <Form.Control
                name="confirmPassword"
                required
                type="password"
                placeholder="Repeat Password"
                minLength={6}
                onChange={onChange}
                isInvalid={!passwordsMatchState}
              />
              <Form.Control.Feedback type="invalid">
                Both passwords should match
              </Form.Control.Feedback>
            </Form.Group>

            <Button variant="primary" type="submit">
              Update
            </Button>
            <Alert show={updateUserState && updateUserState.error !== ""} variant="danger">
              Something went wrong
            </Alert>
            <Alert show={updateUserState && updateUserState.success === "user updated"} variant="info">
              User updated
            </Alert>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default UserProfilePageComponent;

