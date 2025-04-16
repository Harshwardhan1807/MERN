import "../../chats.css";
import Button from 'react-bootstrap/Button';
const UserChatComponent = () => {
  return (
    <>
      <input type="checkbox" id="check" />
      <label className="chat-btn" htmlFor="check">
        <i className="bi bi-chat-dots comment"></i>
        <span className="position-absolute top-0 start-10 translate-middle badge border border-light rounded-circle bg-danger p-2"><span className="visually-hidden"></span></span>
        <i className="bi bi-x-circle close"></i>
      </label>
      <div className="chat-wrapper">
        <div className="chat-header">
          <h6>Let's Chat</h6>
        </div>
        <div className="chat-form">
          <div className="chat-msg">
            {Array.from({ length: 10 }).map((_, id) => (
              <div key={id}>
                <p>
                  <b>You wrote:</b> Hello!
                </p>
                <p className="bg-primary text-light p-3 ms-4 rounded-pill">
                  <b>Support wrote: </b> Hello! How can I help you today?
                </p>
              </div>
            ))}

          </div>
          <textarea id="clientchatmsg" className="form-control" placeholder="Your text message"></textarea>
        </div>
        <Button variant="success">Submit</Button>
      </div>
    </>
  )
};

export default UserChatComponent;

