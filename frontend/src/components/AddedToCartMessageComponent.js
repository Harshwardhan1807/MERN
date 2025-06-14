import { Button } from 'react-bootstrap';
import Alert from 'react-bootstrap/Alert';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

function AddedToCartMessageComponent({ showCartMessage, setShowCartMessage }) {
    const navigate = useNavigate();
    const goBack = () => {
        navigate(-1);
    }
    return (
        <Alert show={showCartMessage} variant="success" onClose={() => setShowCartMessage(false)} dismissible>
            <Alert.Heading>This product was added to your cart!</Alert.Heading>
            <p>
                <Button variant='success' onClick={goBack}>Go back</Button>{" "}
                <Link to="/cart">
                    <Button variant='danger'>Go to cart</Button>
                </Link>
            </p>
        </Alert>
    );
}

export default AddedToCartMessageComponent;