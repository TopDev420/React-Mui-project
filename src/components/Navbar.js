import { Navbar, Container, Nav } from "react-bootstrap"

import Logo from '../assets/imgs/logo.svg'
import User1 from '../assets/imgs/users/user1.png'

import { MdFitScreen } from "react-icons/md"
import { BsChatSquareFill, BsSearch } from "react-icons/bs";
import { HiBell } from "react-icons/hi";
import '../assets/style/navbar.css'

const Navbars = () => {
    const User = () => {
        return (
            <img src={User1} id="user" className="ml-20" alt=""></img>
        )
    }
    return (
        <Navbar expand="lg" id="nav">
            <Container className="nav-container" >
                <div className="nav-left">
                    <Navbar.Brand href="#home"><img src={Logo} id="logo" alt=""></img></Navbar.Brand>
                    <form action="/" method="get" id="nav-search">
                        <BsSearch id="serch-icon" />
                        <input
                            type="text"
                            id="navbar-search"
                            placeholder="Search blog posts"
                            name="search"
                        />
                    </form>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" theme="light" />
                </div>
                <div>
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link href="#home" className="nav-links">Explore Exclusive</Nav.Link>
                            <Nav.Link href="#home" className="nav-links">Trending</Nav.Link>
                            <Nav.Link href="#home" className="nav-links">Live</Nav.Link>
                            <Nav.Link href="#home" className="nav-links">Top Creators</Nav.Link>
                            {/* <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                            </NavDropdown> */}
                        </Nav>
                    </Navbar.Collapse>
                </div>
                <div>
                    <MdFitScreen className="ml-20" />
                    <BsChatSquareFill className="ml-20" />
                    <HiBell className="ml-20" />
                    <button id="nav-btn" className="ml-30">Create</button>
                    <User />
                </div>
            </Container>
        </Navbar>
    )
}

export default Navbars;