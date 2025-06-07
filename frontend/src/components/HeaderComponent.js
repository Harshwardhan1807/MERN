import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Badge from 'react-bootstrap/Badge';
import Form from 'react-bootstrap/Form';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Button from 'react-bootstrap/Button';
import InputGroup from 'react-bootstrap/InputGroup';
import { LinkContainer } from 'react-router-bootstrap';
import { Link } from 'react-router-dom';
import { logout } from '../redux/actions/userActions';
import { useDispatch, useSelector } from 'react-redux';
import { use } from 'react';
const HeaderComponent = () => {
    const dispatch = useDispatch();
    const { userInfo } = useSelector((state) => state.userRegisterLogin);
    return (
        <Navbar collapseOnSelect expand="lg" bg='dark' variant="dark">
            <Container>
                <LinkContainer to='/'>
                    <Navbar.Brand href="/">BEST ONLINE SHOP</Navbar.Brand>
                </LinkContainer>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <InputGroup>
                            <DropdownButton id="dropdown-basic-button" title="All">
                                <Dropdown.Item>Electronics</Dropdown.Item>
                                <Dropdown.Item>Books</Dropdown.Item>
                                <Dropdown.Item>Cars</Dropdown.Item>
                            </DropdownButton>
                            <Form.Control type="text" placeholder="Search in shop..." rows={1} />
                            <Button variant="warning"><i className="bi bi-search text-dark"></i></Button>
                        </InputGroup>
                    </Nav>
                    <Nav>
                        {userInfo.isAdmin ? (
                            <LinkContainer to='/admin/orders'>
                                <Nav.Link>Admin
                                    <span className='position-absolute top-1 start-1 translate-middle p-2 border-light border rounded-circle bg-danger'></span>
                                </Nav.Link>
                            </LinkContainer>
                        ) : userInfo.name && !userInfo.isAdmin ? (
                            <NavDropdown title={`${userInfo.name} ${userInfo.lastName}`}  id="collasible-nav-dropdown">
                                <NavDropdown.Item eventKey={'/user/my-orders'} as={Link} to="/user/my-orders">My Orders</NavDropdown.Item>
                                <NavDropdown.Item eventKey={'/user'} as={Link} to="/user">My Profile</NavDropdown.Item>
                                <NavDropdown.Item onClick={() => dispatch(logout())}>Logout</NavDropdown.Item>
                            </NavDropdown>
                        ) : (
                            <>
                                <LinkContainer to='/login'>
                                    <Nav.Link>Login</Nav.Link>
                                </LinkContainer>
                                <LinkContainer to='/register'>
                                    <Nav.Link>Register</Nav.Link>
                                </LinkContainer>
                            </>
                        )}
                        <LinkContainer to='/cart'>
                            <Nav.Link>
                                <Badge pill bg="danger">2</Badge><i className="bi bi-cart-dash"></i>
                                <span className='ms-1'>Cart</span>
                            </Nav.Link>
                        </LinkContainer>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default HeaderComponent
