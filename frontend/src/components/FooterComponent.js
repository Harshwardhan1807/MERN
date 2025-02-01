import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
const FooterComponent = () => {
    return (
        <footer>
            <Container fluid>
                <Row>
                    <Col className='bg-dark text-light text-center py-4 fs-5'>Copyright &copy; Best Online Shop</Col>
                </Row>
            </Container>
        </footer>
    );
}

export default FooterComponent
