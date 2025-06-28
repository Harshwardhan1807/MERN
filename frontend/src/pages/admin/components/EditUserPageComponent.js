import { Button, Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import Form from 'react-bootstrap/Form';
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const EditUserPageComponent = ({ updateUserApiRequest, fetchUser }) => {
    const [validated, setValidated] = useState(false);
    const [user, setUser] = useState([]);
    const [isAdmin, setIsAdmin] = useState(false);
    const [updateUserResponseState, setUpdateUserResponseState] = useState({ message: "", error: "" });

    const { id } = useParams();
    const navigate = useNavigate();
    const handleSubmit = (event) => {
        event.preventDefault();
        event.stopPropagation();
        const form = event.currentTarget.elements;
        const name = form.name.value;
        const lastName = form.lastname.value;
        const email = form.email.value;
        const isAdmin = form.isAdmin.checked;
        if (event.currentTarget.checkValidity() === true) {
            updateUserApiRequest(id, name, lastName, email, isAdmin)
            .then(data => {
                if (data === "user updated") navigate("/admin/users");
            })
            .catch((er) =>
                setUpdateUserResponseState({
                    error: er.response.data.message
                        ? er.response.data.message
                        : er.response.data,
                })
            );
        }


        setValidated(true);
    };
    useEffect(() => {
        fetchUser(id).then(user => {
            setUser(user);
            setIsAdmin(user.isAdmin)
        })
            .catch((er) => console.log(er.response.data.message ? er.response.data.message : er.response.data));
    }, [id])
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
                                defaultValue={user.name}
                            />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="BasicLastName">
                            <Form.Label>Last Name</Form.Label>
                            <Form.Control
                                required
                                type="text"
                                name="lastname"
                                defaultValue={user.lastName}
                            />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicCount">
                            <Form.Label>Email</Form.Label>
                            <Form.Control
                                required
                                type="email"
                                name="email"
                                defaultValue={user.email}
                            />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicCheckbox">
                            <Form.Check name="isAdmin" type="checkbox" label="Is Admin" checked={isAdmin} 
                            onChange={(e) => setIsAdmin(e.target.checked)}/>
                        </Form.Group>
                        <Button variant="primary" type="submit">Update</Button>
                        {updateUserResponseState.error}
                    </Form>
                </Col>
            </Row>
        </Container>
    )
};

export default EditUserPageComponent;

