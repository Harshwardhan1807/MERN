import Carousel from 'react-bootstrap/Carousel';
import { LinkContainer } from 'react-router-bootstrap';

const ProductCarouselComponent = ({ bestSellers }) => {
  const cursorPointer = { cursor: 'pointer' }

  return bestSellers.length > 0 ? (
    <Carousel>
      {bestSellers.map((item, idx) => (
        <Carousel.Item key={idx}>
          <img crossOrigin='anonymous' style={{ height: "300px", objectFit: "cover" }} className='d-block w-100'
            src={item.images ? item.images[0].path : null} alt='First slide' />
          <Carousel.Caption>
            <LinkContainer style={cursorPointer} to={`/product-details/${item._id}`}>
              <h3>Bestseller in {item.category} Category</h3>
            </LinkContainer>
            <p>{item.description}</p>
          </Carousel.Caption>
        </Carousel.Item>
      ))}
    </Carousel>
  ) : null
}
export default ProductCarouselComponent