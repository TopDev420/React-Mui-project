import { useState, useEffect, useRef } from "react"
import { Navbar, Container, Nav } from "react-bootstrap"
import { useLocation } from "react-router-dom"

import Logo from '../assets/imgs/logo.svg'
import User1 from '../assets/imgs/users/user1.svg'
import Search from '../assets/imgs/icons/search.svg'

import Screen from '../assets/imgs/icons/screen.svg'
import Chat from '../assets/imgs/icons/chat.svg'
import Bell from '../assets/imgs/icons/bell.svg'
import Home from '../assets/imgs/icons/home.svg'
import Profile from '../assets/imgs/icons/profile.svg'
import Settings from '../assets/imgs/icons/setting.svg'
import Discord from '../assets/imgs/icons/discord.svg'
import Twitter from '../assets/imgs/icons/twitter.svg'


import '../assets/style/navbar.scss'

const Navbars = () => {

    const imageObject = {
        Home: Home,
        Profile: Profile,
        Settings: Settings,
        Discord: Discord,
        Twitter: Twitter
    }

    const location = useLocation().pathname

    const [open, setOpen] = useState(false);

    const noanim = useRef()
    const updateState = (event) => {
        if (noanim.current.contains(event.target)) {
            return
        }
        else
            setOpen(false)
    }

    useEffect(() => {
        document.addEventListener('mousedown', updateState)
        return () => {
            document.removeEventListener('mousedown', updateState)
        }
    }, [])

    const User = () => {
        return (
            <Nav.Link href="/profile" id="user" className="nav-right-item"><img src={User1} alt=""></img></Nav.Link>
        )
    }

    return (
        <Navbar expand="lg" id="nav">
            <Container className="nav-container" >
                <div className="nav-left">
                    <Nav.Link href="/home"><img src={Logo} id="nav-logo" alt=""></img></Nav.Link>
                    <form action="/" method="get" id="nav-search">
                        <img src={Search} />
                        <input
                            type="text"
                            id="navbar-search"
                            placeholder="Search Exclusive Content"
                            name="search"
                        />
                    </form>
                </div>
                <div className="nav-right">
                    <img src={Screen} id="nav-screen" />
                    <img src={Chat} className="nav-right-item" />
                    <img src={Bell} className="nav-right-item" />
                    <button id="navCreateBtn" className={`ml-30 font-b14 ${(location == "/profile") ? "button2" : "button1"}`}>Create</button>
                    <User />
                    <span
                        id="menuIcon"
                        onClick={() => setOpen(true)}
                    >
                        <span> </span><span> </span><span> </span>
                    </span>
                </div>
            </Container>
            <div id="navSide" style={{ right: open ? '0px' : '-326px' }} ref={noanim}>
                <div>
                    <div className="nav-side-header">
                        <div style={{ cursor: 'pointer' }} onClick={() => setOpen(false)}>&times;</div>
                    </div>
                    <div className="nav-side-body">
                        <div className="nav-side-container mb-30">
                            <div className="font-b10 mb-15">Quick Links</div>
                            {[
                                "Home",
                                "Profile",
                                "Settings"
                            ].map((item, index) => (
                                <Nav.Link href={"/" + item} className="nav-side-item mb-15">
                                    <img src={imageObject[item]} />
                                    <span className="font-b16 white ml-10">{item}</span>
                                </Nav.Link>
                            ))}
                        </div>
                        <div className="nav-side-container mb-30">
                            <div className="font-b10 mb-15">Exclusive Community</div>
                            {[
                                "Discord",
                                "Twitter"
                            ].map((item, index) => (
                                <Nav.Link href={"/" + item} className="nav-side-item mb-15" onClick={() => setOpen(false)}>
                                    <img src={imageObject[item]} />
                                    <span className="font-b16 white ml-10">{item}</span>
                                </Nav.Link>
                            ))}
                        </div>
                    </div>
                </div>
                <div>
                    <button id="navLogOutBtn" className="font-b14 button2" onClick={() => setOpen(false)}>
                        Log Out
                    </button>
                </div>
            </div>
        </Navbar>
    )
}



export default Navbars;