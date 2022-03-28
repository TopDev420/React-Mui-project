import '../assets/style/sidebar.scss'
import { MdHomeFilled } from "react-icons/md";
import { FaRegUserCircle } from "react-icons/fa";
import { RiSettings5Fill } from "react-icons/ri";
import { MdOutlineExpandMore } from "react-icons/md";
import User2 from '../assets/users/user2.png'
import User6 from '../assets/users/user6.png'

const Sidebar = () => {
    const info = [{
        url: User6,
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
                <div className="creater-item"><img src={User2} alt="" /><span>zyrlspn</span><span className='sidebar-new'>NEW</span></div>
                <div className="creater-item"><img src={User2} alt="" /><span>rowanberri</span></div>
                <div className="creater-item"><img src={User2} alt="" /><span>rexsdev123</span></div>
                <div className="creater-item"><img src={User2} alt="" /><span>marinaho</span></div>
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