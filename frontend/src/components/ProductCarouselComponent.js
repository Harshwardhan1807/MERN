import Carousel from 'react-bootstrap/Carousel';
import { LinkContainer } from 'react-router-bootstrap';

const ProductCarouselComponent = () => {
  const cursorPointer = { cursor: 'pointer' }
  return (
    <Carousel>
      <Carousel.Item>
        <img crossOrigin='anonymous' style={{ height: "300px", objectFit: "cover" }} className='d-block w-100' src='/images/carousel/carousel-1.png' alt='First slide' />
        <Carousel.Caption>
          <LinkContainer style={cursorPointer} to="/product-details">
            <h3>Bestseller in Laptops Category</h3>
          </LinkContainer>
          <p>Dell Inspiron 15 3000 laptop</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className='d-block w-100' style={{ height: "300px", objectFit: "cover" }} src='/images/carousel/carousel-2.png' alt='Second slide' />
        <Carousel.Caption>
          <LinkContainer style={cursorPointer} to="/product-details">
            <h3>Bestseller in Books Category</h3>
          </LinkContainer>
          <p>The Wings of Fire, APJ Abdul Kalam</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className='d-block w-100' style={{ height: "300px", objectFit: "cover" }} src='/images/carousel/carousel-3.png' alt='Third slide' />
        <Carousel.Caption>
          <LinkContainer style={cursorPointer} to="/product-details">
            <h3>Bestseller in Cameras Category</h3>
          </LinkContainer>
          <p>4K Camcorder Video Camera</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  )
}
export default ProductCarouselComponent