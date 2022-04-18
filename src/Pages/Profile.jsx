import { Tabs, Tab, Col, Row, Card, CardGroup } from "react-bootstrap"

import Sploonathevillain from "../assets/imgs/users/sploonathevillain.png"
import User from "../assets/imgs/users/user1.png"
import Ashho from "../assets/imgs/users/ashho.svg"
import Marinaho from "../assets/imgs/users/marinaho.png"

import Blurry1 from "../assets/imgs/blurry1.png"

import Arrow from "../assets/imgs/icons/arrow.svg"
import Chat1 from "../assets/imgs/icons/chat1.svg"
import Chat2 from "../assets/imgs/icons/chat2.svg"
import Chat3 from "../assets/imgs/icons/chat3.svg"
import Discord from "../assets/imgs/icons/discord.svg"
import Dots from "../assets/imgs/icons/dots.svg"
import Facebook from "../assets/imgs/icons/facebook.svg"
import Favor from "../assets/imgs/favor.svg"
import Heart1 from "../assets/imgs/icons/heart1.svg"
import Heart2 from "../assets/imgs/icons/heart2.svg"
import Linkedin from "../assets/imgs/icons/linkedin.svg"
import Lock from "../assets/imgs/icons/lock.svg"
import Logo from "../assets/imgs/logo.svg"
import Msg from "../assets/imgs/icons/msg.svg"
import Smile from "../assets/imgs/icons/smile.svg"
import Twitter from "../assets/imgs/icons/twitter.svg"

import { BsLink45Deg } from "react-icons/bs"

import "../assets/style/profile.scss"

const Profile = () => {
  return (
    <div id="profile">
      <div className="profile-header">
        <div className="profile-header-bg" />
        <div className="profile-header-top">
          <div className="pro-header-top-left">
            <div>
              <img src={Sploonathevillain} alt="" />
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
          <Tabs defaultActiveKey="profile" id="controlled-tab-example">
            <Tab eventKey="profile" title="Profile"></Tab>
            <Tab eventKey="posts" title="Posts"></Tab>
            <Tab eventKey="gallery" title="Gallery"></Tab>
            <Tab eventKey="collections" title="Collections"></Tab>
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
            <div className="pro-mobile-container">
              <div className="pro-mobile-logo">
                <div>
                  <img src={Logo} alt=""></img>
                  <div className="font-r14">Subscribers</div>
                </div>
                <div className="font-b16 white">345</div>
              </div>
              <div className="pro-mobile-about">
                <div className="d-flex justify-content-between align-items-center mb-10">
                  <div className="font-b14 white text-start">About</div>
                  <img src={Arrow} alt="" />
                </div>
                <div className="font-r12 text-start mb-15">
                  Placerat urna nisl at purus, quam duis in. Nam eu ut massa sem
                  eget. Faucibus semper.
                </div>
                <div className="d-flex align-items-center">
                  <a href="">
                    <img src={Linkedin} alt="" />
                  </a>
                  <a href="">
                    <img src={Facebook} alt="" />
                  </a>
                  <a href="">
                    <img src={Twitter} alt="" />
                  </a>
                  <a href="">
                    <img src={Discord} alt="" />
                  </a>
                </div>
              </div>
              <div className="font-b12 text-start py-2 ml-20">Content Tags</div>
              <div className="pro-mobile-items">
                <div className="font-r12 pro-mobile-item">#Animation</div>
                <div className="font-r12 pro-mobile-item">#3D</div>
                <div className="font-r12 pro-mobile-item">#Design</div>
                <div className="font-r12 pro-mobile-item">#Art</div>
                <div className="font-r12 pro-mobile-item">#3</div>
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
                <div style={{ position: "relative" }}>
                  <Card.Img
                    src={Blurry1}
                    className="mb-20 border-tl border-tr"
                  />
                  <div className="card-img-modal">
                    <img src={Lock} alt=""></img>
                    <div className="font-b16 white mb-10">
                      This content is exclusive!
                    </div>
                    <div className="font-r12 mb-10">
                      You need to be subscribed to this user in order to unlock
                      it.
                    </div>
                    <button className="font-b14 white card-modal-unlock">
                      Unlock
                    </button>
                  </div>
                </div>
                <div className="ml-20 mr-20">
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

            <Card>
              <Card.Header className="mb-25">
                <img src={Sploonathevillain} alt=""></img>
                <div>
                  <div className="header-top">
                    <span className="header-name mr-5">sploonathevillain</span>
                    <span className="">created a post</span>
                  </div>
                  <div className="header-bottom">23 minutes ago</div>
                </div>
              </Card.Header>
              <Card.Footer className="border-tb">
                <Card.Title className="mb-10 ml-25 mt-20 d-flex">
                  Quick update!
                </Card.Title>
                <Card.Text className="mb-25 ml-25 mr-25 d-flex">
                  Sapien hendrerit aliquam, enim adipiscing. Enim vulputate
                  tempor amet viverra eu commodo egestas. Vulputate eget aenean
                  sed hendrerit.
                </Card.Text>
                <div className="card-favor">
                  <div>
                    <img src={Chat2} alt="" />
                    <span>25</span>
                    <img src={Heart2} alt="" />
                    <span>10</span>
                  </div>
                  <img src={Dots} alt="" />
                </div>
                <div className="card-line"></div>
                <div className="chat-container">
                  <img src={User} alt="" />
                  <div className="chat-content">
                    <div className="post-comment">
                      Post Comment
                      <img src={Smile} />
                    </div>
                  </div>
                </div>
                <div className="chat-container">
                  <img src={Ashho} alt="" />
                  <div className="chat-content">
                    <div className="chat-title">
                      <div>
                        <span className="chat-name mr-5">Ash Ho</span>
                        <span className="">likes this post</span>
                      </div>
                      <img src={Dots} alt="" />
                    </div>
                    <div className="chat-text">
                      Nullam placerat cras mattis cursus vitae, vestibulum
                      turpis. Gravida nullam dolor lacus, pulvinar id lacus. Eu
                      urna, eget urna.
                    </div>
                    <div className="chat-favor">
                      <img src={Heart1} width="12px" height="12px" alt="" />
                      <span>Like</span>
                      <img src={Chat3} width="12px" height="12px" alt="" />
                      <span style={{ color: "#fff" }}>1</span>
                    </div>
                  </div>
                </div>
                <div className="chat-container">
                  <img src={Marinaho} alt="" />
                  <div className="chat-content">
                    <div className="chat-title">
                      <div>
                        <span className="chat-name mr-5">Marina Ho</span>
                        <span className="mr-5">replied to</span>
                        <span className="chat-name">Ash Ho</span>
                      </div>
                      <img src={Dots} alt="" />
                    </div>
                    <div className="chat-text">
                      Sed lobortis tortor, donec interdum dignissim mattis.
                      Elementum, proin etiam sapien massa ipsum odio aliquet.
                      Convallis id purus vel.
                    </div>
                    <div className="chat-favor">
                      <img
                        src={Heart2}
                        style={{ width: "12px", height: "11px" }}
                        alt=""
                      />
                      <span style={{ color: "#fff" }}>23</span>
                      <img src={Chat1} width="12px" height="12px" alt="" />
                      <span>Reply</span>
                    </div>
                  </div>
                </div>
              </Card.Footer>
            </Card>

            <Card>
              <Card.Header className="mb-25">
                <img src={Sploonathevillain} alt=""></img>
                <div>
                  <div className="header-top">
                    <span className="header-name mr-5">sploonathevillain</span>
                    <span className="">shared a link</span>
                  </div>
                  <div className="header-bottom">23 minutes ago</div>
                </div>
              </Card.Header>
              <Card.Footer className="border-tb">
                <div className="card-link">
                  <BsLink45Deg className="link-icon" />
                  <div className="link-content">
                    <div className="link-top">Exclusive Home</div>
                    <div className="link-bottom">https://exclusive.io</div>
                  </div>
                </div>
                <div className="card-favor">
                  <div>
                    <img src={Chat2} alt="" />
                    <span style={{ color: "#fff" }}>0</span>
                    <img src={Heart2} alt="" />
                    <span style={{ color: "#fff" }}>25</span>
                  </div>
                  <img src={Dots} alt="" />
                </div>
                <div className="card-line"></div>
                <div className="mb-15 chat-container">
                  <img src={User} />
                  <div className="chat-content">
                    <div className="post-comment">
                      Post Comment
                      <img src={Smile} />
                    </div>
                  </div>
                </div>
              </Card.Footer>
            </Card>
          </CardGroup>
        </Col>
      </Row>
    </div>
  )
}

export default Profile
