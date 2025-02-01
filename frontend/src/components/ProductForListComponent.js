import { Card, Button, Row, Col } from "react-bootstrap";
import { Rating } from "react-simple-star-rating";
import {LinkContainer} from "react-router-bootstrap"

const ProductForListComponent = ({images,idx}) => {
  return (
    <Card style={{ marginTop: "30px", marginBottom: "50px" }}>
      <Row>
        <Col lg={5}>
          <Card.Img variant="top" src={"/images/"+images[idx]+"-category.png"} />
        </Col>
        <Col lg={7}>
          <Card.Body>
            <Card.Title>Product Name: Lorem ipsum odor amet consectetuer adipiscing elit.</Card.Title>
            <Card.Text>
              Product Description: Lorem ipsum odor amet consectetuer adipiscing elit.
              Feugiat gravida molestie quis quisque varius quisque nulla.
              Parturient massa eleifend quis dictum; blandit ultricies lorem.
            </Card.Text>
            <Card.Text><Rating readonly size={20} initialValue={5} />(1)</Card.Text>
            <Card.Text className="h4">$ 124{" "}
              <LinkContainer to="/product-details">
                <Button variant="danger">See Product</Button>
              </LinkContainer>
            </Card.Text>
          </Card.Body>
        </Col>
      </Row>
    </Card>
  );
};

export default ProductForListComponent;
