import { Alert, Button, CloseButton, Col, Container, Row, Table, Image } from "react-bootstrap";
import { Link } from "react-router-dom";
import Form from 'react-bootstrap/Form';
import { useState } from "react";

const onHover = {
  cursor: "pointer",
  position: "absolute",
  left: "5px",
  top: "-10px",
  transform: "scale(2.5)"
}

const AdminEditProductPage = () => {
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
          <Link to="/admin/products" className="btn btn-primary my-2">
            Go back
          </Link>
        </Col>
        <Col md={6}>
          <h1>Edit Product</h1>
          <Form noValidate validated={validated} onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="validationCustom01">
              <Form.Label>Name</Form.Label>
              <Form.Control
                required
                type="text"
                name="name"
                defaultValue="Panasonic"
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
              <Form.Label>Description</Form.Label>
              <Form.Control
                required
                as={"textarea"}
                name="description"
                defaultValue={"This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer."}
                rows={3}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicCount">
              <Form.Label>Stock</Form.Label>
              <Form.Control
                required
                type="number"
                name="count"
                defaultValue={1}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPrice">
              <Form.Label>Price</Form.Label>
              <Form.Control
                required
                type="text"
                name="price"
                defaultValue={"$100"}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicCategory">
              <Form.Label>Category
              </Form.Label>
              <Form.Select
                required
                type="text"
                name="category"
              >
                <option value="">Choose category</option>
                <option value={1}>Laptops</option>
                <option value={2}>TV</option>
                <option value={3}>Games</option>
              </Form.Select>
            </Form.Group>

            <Row className="mt-5">
              <Col md={6}>
                <Form.Group className="mb-3" controlId="formBasicAttributes">
                  <Form.Label>Choose attribute and set value</Form.Label>
                  <Form.Select
                    name="atrrkey"
                    aria-label="Default select example"
                  >
                    <option>Choose attribute</option>
                    <option value="red">color</option>
                  </Form.Select>
                </Form.Group>
              </Col>
              <Col md={6}>
                <Form.Group className="mb-3" controlId="formBasicAttributeValue">
                  <Form.Label>Attribute Value</Form.Label>
                  <Form.Select name="attrvalue" aria-label="Default select example">
                    <option>Choose attribute value</option>
                  </Form.Select>
                </Form.Group>
              </Col>
            </Row>
            <Row>
              <Table hover>
                <thead>
                  <tr>
                    <th>Attribute</th>
                    <th>Value</th>
                    <th>Delete</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>attr key</td>
                    <td>attr value</td>
                    <td><CloseButton /></td>
                  </tr>
                </tbody>
              </Table>
            </Row>
            <Row>
              <Col md={6}>
                <Form.Group className="mb-3" controlId="formBasicNewAttribute">
                  <Form.Label>Or create a new attribute</Form.Label>
                  <Form.Control disabled={false} placeholder="first choose or create category" name="newAttributeValue" type="text" />
                </Form.Group>
              </Col>
              <Col md={6}>
                <Form.Group className="mb-3" controlId="formBasicNewAttributeValue">
                  <Form.Label>Attribute value</Form.Label>
                  <Form.Control disabled={false} placeholder="first choose or create category" required name="newAttributeValue" type="text" />
                </Form.Group>
              </Col>
            </Row>
            <Alert variant="primary">After typing attribute key and value press enter on one of the field</Alert>
            <Form.Group className="mb-3 mt-3" controlId="formFileMultiple">
              <Form.Label>Images</Form.Label>
              <Row>
                <Col style={{ position: "relative" }} xs={3}>
                  <Image src="/images/monitors-category.png" fluid />
                  <i style={onHover} className="bi bi-x text-danger"></i>
                </Col>
                <Col style={{ position: "relative" }} xs={3}>
                  <Image src="/images/games-category.png" fluid />
                  <i style={onHover} className="bi bi-x text-danger"></i>
                </Col>
              </Row>
              <Form.Control
                required
                type="file"
                multiple
              />
            </Form.Group>
            <Button variant="primary" type="submit">Update</Button>
          </Form>
        </Col>
      </Row>
    </Container>
  )
};

export default AdminEditProductPage;

