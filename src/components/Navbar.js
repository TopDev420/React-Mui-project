import { Navbar, Container, Nav, NavDropdown } from "react-bootstrap"

import Logo from '../assets/logo.svg'
import User1 from '../assets/users/user1.png'

import { MdFitScreen } from "react-icons/md"
import { BsChatSquareFill } from "react-icons/bs";
import { HiBell } from "react-icons/hi";
import '../assets/style/navbar.css'

const Navbars = () => {
    const User = () => {
        return (
            <img src={User1} id="user"></img>
        )
    }
    return (
        <Navbar expand="lg" id="nav">
            <Container >
                <div className="nav-left">
                    <Navbar.Brand href="#home"><img src={Logo} id="logo"></img></Navbar.Brand>
                    <form action="/" method="get">
                        <></>
                        <input
                            type="text"
                            id="navbar-search"
                            placeholder="Search blog posts"
                            name="s"
                        />
                    </form>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                </div>
                <div>
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link href="#home" className="nav-links">Explore Exclusive</Nav.Link>
                            <Nav.Link href="#link" className="nav-links">Trending</Nav.Link>
                            <Nav.Link href="#link" className="nav-links">Live</Nav.Link>
                            <Nav.Link href="#link" className="nav-links">Top Creators</Nav.Link>
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
                    <MdFitScreen />
                    <BsChatSquareFill />
                    <HiBell />
                    <button id="create-">Create</button>
                    <User />
                </div>
            </Container>
        </Navbar>
    )
}

export default Navbars;