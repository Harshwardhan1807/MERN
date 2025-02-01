import { useState } from 'react';
import { Button } from 'react-bootstrap';
import Alert from 'react-bootstrap/Alert';
import { Link } from 'react-router-dom';

function AddedToCartMessageComponent() {
    const [show, setShow] = useState(true);
    return (
        <Alert show={show} variant="success" onClose={() => setShow(false)} dismissible>
            <Alert.Heading>This product was added to your cart!</Alert.Heading>
            <p>
                <Button variant='success'>Go back</Button>{" "}
                <Link to="/cart">
                    <Button variant='danger'>Go to cart</Button>
                </Link>
            </p>
        </Alert>
    );
}

export default AddedToCartMessageComponent;