import { Fragment, useState } from "react"
import { Toast, Form, Button } from "react-bootstrap"

const AdminChatRoomComponent = () => {
    const [toast1, setToast1] = useState(true);
    const close1 = () => setToast1(false);
    const [toast2, setToast2] = useState(true);
    const close2 = () => setToast2(false);
    return (
        <>
            <Toast show={toast1} onClose={close1} className="ms-4 mb-5">
                <Toast.Header>
                    <strong className="me-auto">Chat Room: John Doe</strong>
                </Toast.Header>
                <Toast.Body>
                    <div style={{ height: "500px", overflowY: "scroll" }}>
                        {Array.from({ length: 10 }).map((_, idx) => (
                            <Fragment key={idx}>
                                <p className="bg-primary text-light p-3 rounded-pill ms-4"><b>User wrote:</b> Hello, world</p>
                                <p><b>Admin wrote:</b> Hello, world</p>
                            </Fragment>

                        ))}
                    </div>
                    <Form>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                            <Form.Control as="textarea" rows={3} />
                        </Form.Group>
                        <Button variant="success">Submit</Button>
                    </Form>
                </Toast.Body>
            </Toast>
            <Toast show={toast2} onClose={close2} className="ms-4 mb-5">
                <Toast.Header>
                    <strong className="me-auto">Chat Room: Mark Otto</strong>
                </Toast.Header>
                <Toast.Body>
                    <div style={{ height: "500px", overflowY: "scroll" }}>
                        {Array.from({ length: 10 }).map((_, idx) => (
                            <Fragment key={idx}>
                                <p className="bg-primary text-light p-3 rounded-pill ms-4"><b>User wrote:</b> Hello, world</p>
                                <p><b>Admin wrote:</b> Hello, world</p>
                            </Fragment>

                        ))}
                    </div>
                    <Form>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                            <Form.Control as="textarea" rows={3} />
                        </Form.Group>
                        <Button variant="success">Submit</Button>
                    </Form>
                </Toast.Body>
            </Toast>
        </>
    )
}

export default AdminChatRoomComponent