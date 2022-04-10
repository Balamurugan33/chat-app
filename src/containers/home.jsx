import { Row, Col } from "react-bootstrap";
import { Outlet } from "react-router-dom";
import SideBar from "../components/sideBar/index.jsx";
import './home.scss';

const Home = () => {
  return (
    <Row className="home-container p-0 m-0">
      <Col className="p-0 m-0" xs={3}>
        <SideBar/>
      </Col>
      <Col className="p-0 m-0" xs={9}>
        <Outlet />
      </Col>
    </Row>
  )
}

export default Home;