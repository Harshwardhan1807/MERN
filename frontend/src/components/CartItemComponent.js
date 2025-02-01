import { Col, ListGroup, Row, Image, Button, Form } from "react-bootstrap"

const CardItemComponent = () => {
    return (
        <>
            <ListGroup.Item>
                <Row>
                    <Col md={2}>
                        <Image crossOrigin="anonymous" src="/images/games-category.png" fluid />
                    </Col>
                    <Col md={2}>Gaming Mouse</Col>
                    <Col md={2}><b>$90</b></Col>
                    <Col md={3}>
                        <Form.Select>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                        </Form.Select>
                    </Col>
                    <Col md={3}>
                        <Button type="button" variant="secondary" onClick={() => window.confirm("Are you sure?")}>
                            <i className="bi bi-trash"></i>
                        </Button>
                    </Col>
                </Row>
            </ListGroup.Item>
            <br></br>
        </>
    )
}

export default CardItemComponent