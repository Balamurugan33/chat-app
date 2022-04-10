import { Row, Col } from "react-bootstrap";
import SideBar from "../components/sideBar/index.jsx";
import ChatWindow from "../components/chatWindow/index.jsx";
import './home.scss';

const Home = () => {
  return (
    <Row className="home-container p-0 m-0">
      <Col className="p-0 m-0" xs={6} sm={6} md={5} lg={3}>
        <SideBar/>
      </Col>
      <Col className="p-0 m-0" xs={6} sm={6} md={7} lg={9}>
        <ChatWindow />
      </Col>
    </Row>
  )
}

export default Home;