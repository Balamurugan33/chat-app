import { Button, Form } from 'react-bootstrap';
import { Telephone, CameraVideo, PersonPlus } from 'react-bootstrap-icons';
import user1 from '../../asset/user1.jpg';
import './index.scss';

const ChatWindow = () => {
  return (
    <div className='chat-container'>
      <div className='chat-panel-header'>
        <div className='left-side'>
          <img className='user-icon' src={user1} />
          <h3>Balamurugan</h3>
          {/* <Tabs defaultActiveKey="profile" id="uncontrolled-tab-example" className="mb-3">
            <Tab eventKey="home" title="Home">
              <div>teee</div>
            </Tab>
            <Tab eventKey="profile" title="Profile">
              <div>teee</div>
            </Tab>
            <Tab eventKey="contact" title="Contact" disabled>
              <div>teee</div>
            </Tab>
          </Tabs> */}
        </div>
        <div className='right-side'>
          <Button className='video-btn' variant='light'><CameraVideo size={15} /></Button>
          <Button className='call-btn' variant='light'><Telephone size={15} /></Button>
          <PersonPlus className='ms-3' size={18}/>  
        </div>
      </div>
      <div className='chat-panel'>
      <Form>
          <Form.Control className='chat-input' type="email" placeholder="Type a new message" />
      </Form>
      </div>

    </div>
  )
}

export default ChatWindow;