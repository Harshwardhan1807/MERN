import { Row, Col, Container, Form, Button, Alert } from "react-bootstrap";
import AddedToCartMessageComponent from "../../components/AddedToCartMessageComponent";
import Image from 'react-bootstrap/Image';
import ListGroup from 'react-bootstrap/ListGroup';
import { Rating } from "react-simple-star-rating";
import ImageZoom from "js-image-zoom"
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const ProductDetailsPageComponent = ({ addToCartReduxAction, reduxDispatch }) => {

    const id = useParams().id;
    const [quantity, setQuantity] = useState(1);
    const [showCartMessage, setShowCartMessage] = useState(false);
    const addToCartHandler = () => {
        reduxDispatch(addToCartReduxAction(id, quantity));
        setShowCartMessage(true);
    }
    var options = {
        scale: 2,
        offset: { vertical: 0, horizontal: 0 }
    }
    useEffect(() => {
        new ImageZoom(document.getElementById("first"), options)
        new ImageZoom(document.getElementById("second"), options)
        new ImageZoom(document.getElementById("third"), options)
    })
    return (
        <Container>
            <AddedToCartMessageComponent showCartMessage={showCartMessage} setShowCartMessage={setShowCartMessage} />
            <Row className="mt-5">
                <Col style={{ zIndex: 1 }} md={4}>
                    <div id="first"><Image fluid src="/images/games-category.png" /></div><br></br>
                    <div id="second"><Image fluid src="/images/monitors-category.png" /></div><br></br>
                    <div id="third"><Image fluid src="/images/tablets-category.png" /></div>
                </Col>
                <Col md={8}>
                    <Row>
                        <Col md={8}>
                            <ListGroup variant="flush">
                                <ListGroup.Item><h1>Product Name</h1></ListGroup.Item>
                                <ListGroup.Item>
                                    <Rating readonly size={20} initialValue={4}></Rating>(1)
                                </ListGroup.Item>
                                <ListGroup.Item>Price: <span className="fw-bold">$245</span></ListGroup.Item>
                                <ListGroup.Item>Description</ListGroup.Item>
                            </ListGroup>
                        </Col>
                        <Col md={4}>
                            <ListGroup>
                                <ListGroup.Item>Status: In stock</ListGroup.Item>
                                <ListGroup.Item>Price: <span className="fw-bold">$245</span></ListGroup.Item>
                                <ListGroup.Item>
                                    <Form>
                                        Quantity:
                                        <Form.Select value={quantity} onChange={(e) => setQuantity(e.target.value)} size="lg" aria-label="Default select example">
                                            <option>Choose</option>
                                            <option value="1">1</option>
                                            <option value="2">2</option>
                                            <option value="3">3</option>
                                        </Form.Select>
                                    </Form>
                                </ListGroup.Item>
                                <ListGroup.Item>
                                    <Button onClick={addToCartHandler} variant="danger">Add to cart</Button>
                                </ListGroup.Item>
                            </ListGroup>
                        </Col>
                    </Row>
                    <Row>
                        <Col className="mt-5">
                            <h5>REVIEWS</h5>
                            <ListGroup variant="flush">
                                {Array.from({ length: 10 }).map((item, idx) => (
                                    <ListGroup.Item key={idx}>
                                        John Doe<br></br>
                                        <Rating readonly size={20} initialValue={4}></Rating><br></br>
                                        1-1-2015<br></br>
                                        Lorem ipsum odor amet, consectetuer adipiscing elit. Adipiscing pulvinar dui malesuada mollis fusce dui.
                                    </ListGroup.Item>
                                ))}
                            </ListGroup>
                        </Col>
                    </Row>
                    <hr></hr>
                    <Alert variant="danger">Login first to write review</Alert>
                    <Form>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                            <Form.Label>Write a review</Form.Label>
                            <Form.Control as="textarea" rows={3} />
                        </Form.Group>
                        <Form.Select size="lg" aria-label="Default select example">
                            <option>Your Rating</option>
                            <option value="5">5</option>
                            <option value="4">4</option>
                            <option value="3">3</option>
                            <option value="2">2</option>
                            <option value="1">1</option>
                        </Form.Select>
                        <Button variant="primary" className="mt-3">Submit</Button>
                    </Form>
                </Col>
            </Row>
        </Container>

    )
};

export default ProductDetailsPageComponent;

