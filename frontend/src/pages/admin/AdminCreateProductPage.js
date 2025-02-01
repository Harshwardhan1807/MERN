import { Alert, Button, CloseButton, Col, Container, Row, Table } from "react-bootstrap";
import { Link } from "react-router-dom";
import Form from 'react-bootstrap/Form';
import { useState } from "react";
const AdminCreateProductPage = () => {
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
          <h1>Create Product</h1>
          <Form noValidate validated={validated} onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="validationCustom01">
              <Form.Label>Name</Form.Label>
              <Form.Control
                required
                type="text"
                name="name"
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
              <Form.Label>Description</Form.Label>
              <Form.Control
                required
                as={"textarea"}
                name="description"
                rows={3}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicCount">
              <Form.Label>Stock</Form.Label>
              <Form.Control
                required
                type="number"
                name="count"
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPrice">
              <Form.Label>Price</Form.Label>
              <Form.Control
                required
                type="text"
                name="price"
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicCategory">
              <Form.Label>Category
                <CloseButton/>(<small>remove selected</small>)
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
            <Form.Group className="mb-3" controlId="formBasicNewCategory">
              <Form.Label>Or create a new category (e.g. Computers/Laptops/Intel)</Form.Label>
              <Form.Control name="newCategory" type="text"/>
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
                    <td><CloseButton/></td>
                  </tr>
                </tbody>
              </Table>
            </Row>
            <Row>
              <Col md={6}>
              <Form.Group className="mb-3" controlId="formBasicNewAttribute">
                <Form.Label>Or create a new attribute</Form.Label>
                <Form.Control disabled={false} placeholder="first choose or create category" name="newAttributeValue" type="text"/>
              </Form.Group>
              </Col>
              <Col md={6}>
              <Form.Group className="mb-3" controlId="formBasicNewAttributeValue">
                <Form.Label>Attribute value</Form.Label>
                <Form.Control disabled={false} placeholder="first choose or create category" required name="newAttributeValue" type="text"/>
              </Form.Group>
              </Col>
            </Row>
            <Alert variant="primary">After typing attribute key and value press enter on one of the field</Alert>
            <Form.Group className="mb-3 mt-3" controlId="formFileMultiple">
              <Form.Label>Images</Form.Label>
              <Form.Control
                required
                type="file"
                multiple
              />
            </Form.Group>
            <Button variant="primary" type="submit">Create</Button>
          </Form>
        </Col>
      </Row>
    </Container>
  )
};

export default AdminCreateProductPage;

