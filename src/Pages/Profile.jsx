import { Tabs, Tab, Col, Row, Card, CardGroup } from "react-bootstrap"

import Sploonathevillain from "../assets/imgs/users/sploonathevillain.svg"
import Blurry1 from "../assets/imgs/blurry1.png"

import Msg from "../assets/imgs/icons/msg.svg"
import Logo from "../assets/imgs/logo.svg"
import Chat1 from "../assets/imgs/icons/chat1.svg"
import Heart1 from "../assets/imgs/icons/heart1.svg"
import Dots from "../assets/imgs/icons/dots.svg"
import Favor from "../assets/imgs/favor.svg"
import Twitter from "../assets/imgs/icons/twitter.svg"
import Discord from "../assets/imgs/icons/discord.svg"
import Linkedin from "../assets/imgs/icons/linkedin.svg"
import Facebook from "../assets/imgs/icons/facebook.svg"

import "../assets/style/profile.scss"

const Profile = () => {
  return (
    <div id="profile">
      <div className="profile-header">
        <div className="profile-header-bg" />
        <div className="profile-header-top">
          <div className="pro-header-top-left">
            <div>
              <img src={Sploonathevillain} />
            </div>
            <div>
              <span
                style={{ color: "white" }}
                className="font-b24 pro-header-user-name"
              >
                sploonathevillain
              </span>
              <span className="font-r14" style={{ color: "#959290" }}>
                @sploonathevillain
              </span>
            </div>
          </div>
          <div className="pro-header-top-right">
            <button className="font-b14 mr-20 pro-header-msg">
              <img src={Msg} className="mr-10" alt="" />
              Message
            </button>
            <button className="font-b14 pro-header-subscribe">Subscribe</button>
          </div>
        </div>
        <div className="profile-header-bottom">
          <Tabs defaultActiveKey="Home" id="controlled-tab-example">
            <Tab eventKey="profile" title="Profile"></Tab>
            <Tab eventKey="home" title="Home"></Tab>
            <Tab eventKey="contact" title="Contact"></Tab>
          </Tabs>
        </div>
      </div>
      <Row className="profile-body">
        <Col md={4} className="profile-body-left">
          <div className="profile-sidebar">
            <div className="pro-sidebar-container">
              <div className="pro-sidebar-logo">
                <img src={Logo} alt=""></img>
                <div>
                  <div className="font-b18 white">345</div>
                  <div className="font-r14">Subscribers</div>
                </div>
              </div>
            </div>
            <div className="pro-sidebar-container">
              <div className="font-b16 white text-start mb-10">About</div>
              <div className="font-r14 text-start mb-20">
                Placerat urna nisl at purus, quam duis in. Nam eu ut massa sem
                eget. Faucibus semper.
              </div>
              <div className="d-flex pro-sidebar-social">
                <a href="">
                  <img src={Twitter} alt="" />
                </a>
                <a href="">
                  <img src={Discord} alt="" />
                </a>
                <a href="">
                  <img src={Linkedin} alt="" />
                </a>
                <a href="">
                  <img src={Facebook} alt="" />
                </a>
              </div>
              <div className="font-b12 text-start mb-20">Content Tags</div>
              <div className="pro-sidebar-items">
                <div className="font-r14 pro-sidebar-item">#Animation</div>
                <div className="font-r14 pro-sidebar-item">#Art</div>
                <div className="font-r14 pro-sidebar-item">#3D</div>
                <div className="font-r14 pro-sidebar-item">#3D Animation</div>
                <div className="font-r14 pro-sidebar-item">#Cats</div>
              </div>
            </div>
          </div>
        </Col>
        <Col md={8} className="profile-body-right">
          <CardGroup>
            <Card>
              <Card.Header className="mb-25">
                <img src={Sploonathevillain} alt=""></img>
                <div>
                  <div className="header-top">
                    <span className="header-name mr-5">sploonathevillain</span>
                    <span className="mr-5">posted a photo</span>
                    <img src={Favor} alt="" />
                    <div class="popuptext show" id="myPopup">
                      <div className="font-b14 text-start popuptext-title">
                        Exclusive Content
                      </div>
                      <div className="font-r12 text-start">
                        This is exclusive content, you need to be subscribed to
                        this user to view it.
                      </div>
                    </div>
                  </div>
                  <div className="header-bottom">23 minutes ago</div>
                </div>
              </Card.Header>
              <Card.Body className="border-tb">
                <Card.Img src={Blurry1} className="mb-20 border-tl border-tr" />
                <div className="ml-20">
                  <div className="card-blurry1"></div>
                  <div className="card-blurry2"></div>
                  <div className="card-blurry3"></div>
                </div>
                {/* <Card.Title className="mb-10 ml-25 d-flex">
                  Stickin’ my leggie out really far
                </Card.Title>
                <Card.Text className="mb-25 ml-25 mr-25 d-flex">
                  Sapien hendrerit aliquam, enim adipiscing. Enim vulputate
                  tempor amet viverra eu commodo egestas. Vulputate eget aenean
                  sed hendrerit.
                </Card.Text> */}
                <div className="card-favor m-25">
                  <div>
                    <img src={Chat1} alt="" />
                    <span>25</span>
                    <img src={Heart1} alt="" />
                    <span>10</span>
                  </div>
                  <img src={Dots} alt="" />
                </div>
              </Card.Body>
            </Card>
          </CardGroup>
        </Col>
      </Row>
    </div>
  )
}

export default Profile
