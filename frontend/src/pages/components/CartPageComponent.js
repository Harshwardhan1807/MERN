import { Alert, Col, Container, ListGroup, Row, Button } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import CardItemComponent from "../../components/CartItemComponent";

const CartPageComponent = ({ addToCart, cartItems, cartSubtotal, reduxDispatch }) => {
    const changeCount = (productID, count) => {
        reduxDispatch(addToCart(productID, count));
    }
    return (
        <Container fluid>
            <Row className="mt-4">
                <Col md={8}>
                    <h1>Shopping Cart</h1>
                    {cartItems.length === 0 ? (
                        <Alert info="variant">Your cart is empty</Alert>
                    ) : (
                        <ListGroup variant="flush">
                            {cartItems.map((item, idx) => (
                                <CardItemComponent item={item} key={idx} changeCount={changeCount} />
                            ))}
                        </ListGroup>
                    )}
                </Col>
                <Col md={4}>
                    <ListGroup>
                        <ListGroup.Item>
                            <h1>Subtotal ({cartItems.length}{cartItems.length === 1 ? " item" : " items"})</h1>
                        </ListGroup.Item>
                        <ListGroup.Item>
                            Price: <span className="fw-bold">${cartSubtotal}</span>
                        </ListGroup.Item>
                        <ListGroup.Item>
                            <LinkContainer to="/user/cart-details">
                                <Button disabled={cartItems.length === 0} variant="primary">Checkout</Button>
                            </LinkContainer>

                        </ListGroup.Item>
                    </ListGroup>

                </Col>
            </Row>
        </Container>
    );
};

export default CartPageComponent;

