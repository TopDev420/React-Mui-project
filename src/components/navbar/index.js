import { useState, useEffect, useRef } from "react"
import { Navbar, Container, Nav } from "react-bootstrap"
import { useLocation } from "react-router-dom"

import Logo from '../../assets/imgs/logo.svg'
import User1 from '../../assets/imgs/users/user1.png'
import Search from '../../assets/imgs/icons/search.svg'

import Screen from '../../assets/imgs/icons/screen.svg'
import Chat from '../../assets/imgs/icons/chat.svg'
import Bell from '../../assets/imgs/icons/bell.svg'
import Home from '../../assets/imgs/icons/home.svg'
import Profile from '../../assets/imgs/icons/profile.svg'
import Settings from '../../assets/imgs/icons/setting.svg'
import Discord from '../../assets/imgs/icons/discord.svg'
import Twitter from '../../assets/imgs/icons/twitter.svg'


import styles from './Navbar.module.scss'

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
            <Nav.Link href="/profile" className={`${styles["user"]} ${styles["nav-right-item"]}`}><img src={User1} alt=""></img></Nav.Link>
        )
    }

    return (
        <Navbar expand="lg" className={styles.nav}>
            <Container className={styles["nav-container"]} >
                <div className={styles["nav-left"]}>
                    <Nav.Link href="/home"><img src={Logo} className={styles["nav-logo"]} alt=""></img></Nav.Link>
                    <form action="/" method="get" className={styles["nav-search"]}>
                        <img src={Search} />
                        <input
                            type="text"
                            className={styles["navbar-search"]}
                            placeholder="Search Exclusive Content"
                            name="search"
                        />
                    </form>
                </div>
                <div className={styles["nav-right"]}>
                    <img src={Screen} className={styles["nav-screen"]} />
                    <img src={Chat} className={styles["nav-right-item"]} />
                    <img src={Bell} className={styles["nav-right-item"]} />
                    <button className={`ml-30 font-b14 ${styles["nav-create-btn"]} ${(location == "/profile") ? "button2" : "button1"}`}>Create</button>
                    <User />
                    <span
                        className={styles["menu-icon"]}
                        onClick={() => setOpen(true)}
                    >
                        <span> </span><span> </span><span> </span>
                    </span>
                </div>
            </Container>
            <div className={styles["nav-side"]} style={{ right: open ? '0px' : '-326px' }} ref={noanim}>
                <div>
                    <div className={styles["nav-side-header"]}>
                        <div style={{ cursor: 'pointer' }} onClick={() => setOpen(false)}>&times;</div>
                    </div>
                    <div className={styles["nav-side-body"]}>
                        <div className={`${styles["nav-side-container"]} mb-30`}>
                            <div className="font-b10 mb-15">Quick Links</div>
                            {[
                                "Home",
                                "Profile",
                                "Settings"
                            ].map((item, index) => (
                                <Nav.Link href={"/" + item} className={`${styles["nav-side-item"]} mb-15`}>
                                    <img src={imageObject[item]} />
                                    <span className="font-b16 white ml-10">{item}</span>
                                </Nav.Link>
                            ))}
                        </div>
                        <div className={`${styles["nav-side-container"]} mb-30`}>
                            <div className="font-b10 mb-15">Exclusive Community</div>
                            {[
                                "Discord",
                                "Twitter"
                            ].map((item, index) => (
                                <Nav.Link href={"/" + item} className={`${styles["nav-side-item"]} mb-15`} onClick={() => setOpen(false)}>
                                    <img src={imageObject[item]} />
                                    <span className="font-b16 white ml-10">{item}</span>
                                </Nav.Link>
                            ))}
                        </div>
                    </div>
                </div>
                <div>
                    <button id="navLogOutBtn" className={`${styles["nav-logout-btn"]} font-b14 button2`} onClick={() => setOpen(false)}>
                        Log Out
                    </button>
                </div>
            </div>
        </Navbar>
    )
}



export default Navbars;