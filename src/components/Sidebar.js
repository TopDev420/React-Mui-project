import '../assets/style/sidebar.scss'
import { MdHomeFilled } from "react-icons/md";
import { FaRegUserCircle } from "react-icons/fa";
import { RiSettings5Fill } from "react-icons/ri";
import { MdOutlineExpandMore } from "react-icons/md";
import Zyrlspn from '../assets/imgs/users/zyrlspn.png'
import Rowanberri from '../assets/imgs/users/rowanberri.png'
import Rexsdev123 from '../assets/imgs/users/rexsdev123.png'
import Marinaho from '../assets/imgs/users/marinaho.png'
import Samibabie from '../assets/imgs/users/samibabie.png'

const Sidebar = () => {
    const info = [{
        url: Samibabie,
        title: "samibabie",
        content: "they/them, neurodivergent, adores cute things"
    }];
    return (
        <div className="sidebar">
            <div className="sidebar-container">
                <div className="link-item"><MdHomeFilled /><span>Home</span></div>
                <div className="link-item"><FaRegUserCircle /><span>Profile</span></div>
                <div className="link-item"><RiSettings5Fill /><span>Settings</span></div>
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
        </div>
    )
}

export default Sidebar;