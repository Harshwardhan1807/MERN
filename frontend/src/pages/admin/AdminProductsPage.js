import { Button, Col, Container, Row } from "react-bootstrap";
import Table from 'react-bootstrap/Table';
import AdminLinksComponent from "../../components/admin/AdminLinksComponent";
import { LinkContainer } from "react-router-bootstrap";

const deleteHandler = () => {
  if(window.confirm("Are you sure?")) {
    
  }
}
const AdminProductsPage = () => {
  return (
    <Container>
      <Row className="m-5">
        <Col md={2}>
          <AdminLinksComponent />
        </Col>
        <Col md={10}>
          <h1>
            <LinkContainer to="/admin/create-new-product">
              <Button variant="primary" className="float-end">Add Product</Button>
            </LinkContainer>
            Product List
          </h1>
          <Table striped bordered hover responsive>
            <thead>
              <tr>
                <th>#</th>
                <th>Product Name</th>
                <th>Price</th>
                <th>Category</th>
                <th>Edit/Delete</th>


              </tr>
            </thead>
            <tbody>
              {[{ name: "Panasonic", price: "$300", category: "TV" },
              { name: "Lenovo", price: "$500", category: "Laptops" },
              { name: "GTA 5", price: "$100", category: "Games" },].map((item, idx) => (
                <tr key={idx}>
                  <td>{idx + 1}</td>
                  <td>{item.name}</td>
                  <td>{item.price}</td>
                  <td>{item.category}</td>
                  <td>
                    <LinkContainer to="/admin/edit-product">
                      <Button className="btn-sm"><i className="bi bi-pencil-square"></i></Button>
                    </LinkContainer>
                    {" / "}
                  <Button variant="danger" className="btn-sm" onClick={deleteHandler}><i className="bi bi-trash"></i></Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </Col>
      </Row>
    </Container>
  );
};

export default AdminProductsPage;