import { Row, Col } from "react-bootstrap"
import Sidebar from "../components/Sidebar"

import "../assets/style/home.scss"

const Home = () => {
  return (
    <div id="homepage">
      <Row>
        <Col md={{ span: 3, offset: 1 }} className="homepage-left">
          <Sidebar />
        </Col>
        <Col md={7} className="homepage-right"></Col>
      </Row>
    </div>
  )
}

export default Home
