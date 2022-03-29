import { Row, Col, Card, CardGroup } from "react-bootstrap"
import Sidebar from "../components/Sidebar"

import { IoMdOptions } from "react-icons/io"
import { BsLink45Deg } from "react-icons/bs"
import Rowanberri from "../assets/imgs/users/rowanberri.png"
import User from "../assets/imgs/users/user1.png"
import Ashho from "../assets/imgs/users/ashho.png"
import Marinaho from "../assets/imgs/users/marinaho.png"

import Image1 from "../assets/imgs/image1.png"
import Image2 from "../assets/imgs/image2.png"
import Image3 from "../assets/imgs/image3.png"
import Icon1 from "../assets/imgs/icons/icon1.svg"
import Icon2 from "../assets/imgs/icons/icon2.svg"
import Icon3 from "../assets/imgs/icons/icon3.svg"
import Icon4 from "../assets/imgs/icons/icon4.svg"
import Icon5 from "../assets/imgs/icons/icon5.svg"
import Icon6 from "../assets/imgs/icons/icon6.svg"
import Icon7 from "../assets/imgs/icons/icon7.svg"
import Favor from "../assets/imgs/favor.svg"
import "../assets/style/home.scss"

const Home = () => {
  return (
    <div id="homepage">
      <Row id="homepage-container">
        <Col md={4} className="homepage-left">
          <Sidebar />
        </Col>
        <Col md={8} className="homepage-right">
          <div className="homepage-title">
            <span>Recent</span>
            <div className="homepage-option">
              <IoMdOptions />
            </div>
          </div>
          <CardGroup>
            <Card>
              <Card.Header className="mb-25">
                <img src={Rowanberri} alt=""></img>
                <div>
                  <div className="header-top">
                    <span className="header-name mr-5">rowanberri </span>
                    <span className="mr-5">posted a photo</span>
                    <img src={Favor} />
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
                <div className="card-favor m-25">
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
                <img src={Rowanberri} alt=""></img>
                <div>
                  <div className="header-top">
                    <span className="header-name mr-5">rowanberri </span>
                    <span className="">created a post</span>
                  </div>
                  <div className="header-bottom">23 minutes ago</div>
                </div>
              </Card.Header>
              <Card.Footer className="border-tb">
                <Card.Title className="mb-10 ml-25 mt-20 d-flex">
                  Quick update!
                </Card.Title>
                <Card.Text className="mb-25 ml-25 d-flex">
                  Sapien hendrerit aliquam, enim adipiscing. Enim vulputate
                  tempor amet viverra eu commodo egestas. Vulputate eget aenean
                  sed hendrerit.
                </Card.Text>
                <div className="card-favor">
                  <div>
                    <img src={Icon4} alt="" />
                    <span>25</span>
                    <img src={Icon5} alt="" />
                    <span>10</span>
                  </div>
                  <img src={Icon6} alt="" />
                </div>
                <div className="card-line"></div>
                <div className="chat-container">
                  <img src={User} />
                  <div className="chat-content">
                    <div className="post-comment">
                      Post Comment
                      <img src={Icon7} />
                    </div>
                  </div>
                </div>
                <div className="chat-container">
                  <img src={Ashho} />
                  <div className="chat-content">
                    <div className="chat-title">
                      <div>
                        <span className="chat-name mr-5">Ash Ho</span>
                        <span className="">likes this post</span>
                      </div>
                      <img src={Icon6} alt="" />
                    </div>
                    <div className="chat-text">
                      Nullam placerat cras mattis cursus vitae, vestibulum
                      turpis. Gravida nullam dolor lacus, pulvinar id lacus. Eu
                      urna, eget urna.
                    </div>
                    <div className="chat-favor">
                      <img src={Icon2} width="12px" height="12px" alt="" />
                      <span>Like</span>
                      <img src={Icon1} width="12px" height="12px" alt="" />
                      <span>1</span>
                    </div>
                  </div>
                </div>
                <div className="chat-container">
                  <img src={Marinaho} />
                  <div className="chat-content">
                    <div className="chat-title">
                      <div>
                        <span className="chat-name mr-5">Marina Ho</span>
                        <span className="mr-5"> replied to Ash Ho</span>
                        <span className="chat-name">Ash Ho</span>
                      </div>
                      <img src={Icon6} alt="" />
                    </div>
                    <div className="chat-text">
                      Sed lobortis tortor, donec interdum dignissim mattis.
                      Elementum, proin etiam sapien massa ipsum odio aliquet.
                      Convallis id purus vel.
                    </div>
                    <div className="chat-favor">
                      <img
                        src={Icon5}
                        style={{ width: "12px", height: "11px" }}
                        alt=""
                      />
                      <span>23</span>
                      <img src={Icon1} width="12px" height="12px" alt="" />
                      <span>Reply</span>
                    </div>
                  </div>
                </div>
              </Card.Footer>
            </Card>

            <Card>
              <Card.Header className="mb-25">
                <img src={Rowanberri} alt=""></img>
                <div>
                  <div className="header-top">
                    <span className="header-name mr-5">rowanberri </span>
                    <span className="mr-5">posted a video</span>
                    <img src={Favor} />
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
                <div className="card-favor m-25">
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
                <img src={Rowanberri} alt=""></img>
                <div>
                  <div className="header-top">
                    <span className="header-name mr-5">rowanberri </span>
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
                    <img src={Icon4} alt="" />
                    <span>25</span>
                    <img src={Icon5} alt="" />
                    <span>10</span>
                  </div>
                  <img src={Icon6} alt="" />
                </div>
                <div className="card-line"></div>
                <div className="chat-container">
                  <img src={User} />
                  <div className="chat-content">
                    <div className="post-comment">
                      Post Comment
                      <img src={Icon7} />
                    </div>
                  </div>
                </div>
              </Card.Footer>
            </Card>

            <Card className="mb-30">
              <Card.Header className="mb-25">
                <img src={Rowanberri} alt=""></img>
                <div>
                  <div className="header-top">
                    <span className="header-name mr-5">rowanberri </span>
                    <span className="">posted a photo</span>
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
                <div className="card-favor m-25">
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
