import { Row, Col, Card, CardGroup } from "react-bootstrap"
import Sidebar from "../components/Sidebar"

import { IoMdOptions } from "react-icons/io"
//import { BsLink45Deg } from "react-icons/bs"
import User from "../assets/users/user3.png"
import Image1 from "../assets/imgs/image1.png"
import Image2 from "../assets/imgs/image2.png"
import Image3 from "../assets/imgs/image3.png"
import Icon1 from "../assets/imgs/icons/icon1.svg"
import Icon2 from "../assets/imgs/icons/icon2.svg"
import Icon3 from "../assets/imgs/icons/icon3.svg"
//import Icon4 from "../assets/imgs/icons/icon4.svg"
//import Icon5 from "../assets/imgs/icons/icon5.svg"
import Icon6 from "../assets/imgs/icons/icon6.svg"
import "../assets/style/home.scss"

const Home = () => {
  return (
    <div id="homepage">
      <Row>
        <Col md={{ span: 3, offset: 1 }} className="homepage-left">
          <Sidebar />
        </Col>
        <Col md={7} className="homepage-right">
          <div className="homepage-title">
            <span>Recent</span>
            <div className="homepage-option">
              <IoMdOptions />
            </div>
          </div>
          <CardGroup>
            <Card>
              <Card.Header className="mb-25">
                <img src={User} className="mr-20" alt=""></img>
                <div>
                  <div className="header-top">
                    <span className="header-name mr-5">rowanberri </span>
                    <span className="">posted a photo</span>
                  </div>
                  <div className="header-bottom">23 minutes ago</div>
                </div>
              </Card.Header>
              <Card.Body className="border-tb">
                <Card.Img src={Image1} className="mb-20 border-tl border-tr" />
                <Card.Title className="mb-10 ml-25 d-flex">
                  Stickin’ my leggie out really far
                </Card.Title>
                <Card.Text className="mb-25 ml-25 d-flex">
                  Sapien hendrerit aliquam, enim adipiscing. Enim vulputate
                  tempor amet viverra eu commodo egestas. Vulputate eget aenean
                  sed hendrerit.
                </Card.Text>
                <div className="card-favoir m-25">
                  <div>
                    <img src={Icon1} alt="" />
                    <span>25</span>
                    <img src={Icon2} alt="" />
                    <span>10</span>
                  </div>
                  <img src={Icon6} alt="" />
                </div>
              </Card.Body>
            </Card>

            <Card>
              <Card.Header className="mb-25">
                <img src={User} className="mr-20" alt=""></img>
                <div>
                  <div className="header-top">
                    <span className="header-name mr-5">rowanberri </span>
                    <span className="">posted a video</span>
                  </div>
                  <div className="header-bottom">23 minutes ago</div>
                </div>
              </Card.Header>
              <Card.Body className="border-tb">
                <Card.Img src={Image2} className="mb-20 border-tl border-tr" />
                <Card.Title className="mb-10 ml-25 d-flex">
                  Video update!
                </Card.Title>
                <Card.Text className="mb-25 ml-25 d-flex">
                  Id semper adipiscing orci consequat commodo pharetra, dictum
                  diam. Porttitor pellentesque viverra aliquet imperdiet turpis
                  imperdiet.
                </Card.Text>
                <div className="card-favoir m-25">
                  <div>
                    <img src={Icon1} alt="" />
                    <span>25</span>
                    <img src={Icon2} alt="" />
                    <span>3,983</span>
                    <img src={Icon3} alt="" />
                    <span>6,492</span>
                  </div>
                  <img src={Icon6} alt="" />
                </div>
              </Card.Body>
            </Card>

            <Card>
              <Card.Header className="mb-25">
                <img src={User} className="mr-20" alt=""></img>
                <div>
                  <div className="header-top">
                    <span className="header-name mr-5">rowanberri </span>
                    <span className="">posted a video</span>
                  </div>
                  <div className="header-bottom">23 minutes ago</div>
                </div>
              </Card.Header>
              <Card.Body className="border-tb">
                <Card.Img src={Image3} className="mb-20 border-tl border-tr" />
                <Card.Title className="mb-10 ml-25 d-flex">
                  FBI's Most Wanted Con Artist | Matthew Cox
                </Card.Title>
                <Card.Text className="mb-25 ml-25 d-flex">
                  Matthew Cox is a true crime writer who was sentenced to 26
                  years in Federal prison for identity theft and mortgage fraud.
                  One of his most popular stories...
                </Card.Text>
                <div className="card-favoir m-25">
                  <div>
                    <img src={Icon1} alt="" />
                    <span>173</span>
                    <img src={Icon2} alt="" />
                    <span>10</span>
                  </div>
                  <img src={Icon6} alt="" />
                </div>
              </Card.Body>
            </Card>
          </CardGroup>
        </Col>
      </Row>
    </div>
  )
}

export default Home
