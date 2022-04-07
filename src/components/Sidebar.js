import '../assets/style/sidebar.scss'
import { MdOutlineExpandMore } from "react-icons/md";
import Zyrlspn from '../assets/imgs/users/zyrlspn.svg'
import Rowanberri from '../assets/imgs/users/rowanberri.svg'
import Rexsdev123 from '../assets/imgs/users/rexsdev123.svg'
import Marinaho from '../assets/imgs/users/marinaho.svg'
import Samibabie from '../assets/imgs/users/samibabie.svg'
import Sploonathevillain from '../assets/imgs/users/sploonathevillain.svg'

import Home from '../assets/imgs/icons/home.svg'
import Profile from '../assets/imgs/icons/profile.svg'
import Setting from '../assets/imgs/icons/setting.svg'


const Sidebar = () => {
    const info = [{
        url: Samibabie,
        title: "samibabie",
        content: "they/them, neurodivergent, adores cute things"
    }];
    return (
        <div className="sidebar">
            <div className="sidebar-container">
                <div className="link-item"><img src={Home} /><span>Home</span></div>
                <div className="link-item"><img src={Profile} /><span>Profile</span></div>
                <div className="link-item"><img src={Setting} /><span>Settings</span></div>
            </div>
            <div className="sidebar-container">
                <div className="sidebar-title">Supported Creators</div>
                <div className="creater-item"><img src={Zyrlspn} alt="" /><span>zyrlspn</span><span className='sidebar-new'>NEW</span></div>
                <div className="creater-item"><img src={Rowanberri} alt="" /><span>rowanberri</span></div>
                <div className="creater-item"><img src={Rexsdev123} alt="" /><span>rexsdev123</span></div>
                <div className="creater-item"><img src={Marinaho} alt="" /><span>marinaho</span></div>
                <div className="creater-more"><MdOutlineExpandMore /><span>More</span></div>
            </div>
            <div className="sidebar-container">
                <div className="sidebar-title">Recommendations</div>
                <div className='sidebar-card'>
                    <div>
                        <div className='scard-header'>
                            <img src={info[0].url} alt=""></img>
                        </div>
                        <div className='scard-body'>
                            <div className='scard-title'>{info[0].title}</div>
                            <div className='scard-content'>{info[0].content}</div>
                            <button className='scard-subscribe'>Subscribe</button>
                        </div>
                    </div>
                </div>
            </div>

            <div className="sidebar-mobile">
                <div className='font-b10 mb-10 sidebar-mobile-title'>Supported Creators</div>
                <div>
                    <img src={Zyrlspn} alt="" />
                    <img src={Marinaho} className="ml-10" alt="" />
                    <img src={Rexsdev123} className="ml-10" alt="" />
                    <img src={Sploonathevillain} className="ml-10" alt="" />
                </div>
            </div>
        </div>
    )
}

export default Sidebar;