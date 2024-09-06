import "./Navbar.css";
import menu_icon from "../../../public/menu.webp";
import logo from "../../../public/logo.webp";
import search_icon from "../../../public/search.webp";
import upload_icon from "../../../public/upload.webp";
import more_icon from "../../../public/more.webp";
import notification_icon from "../../../public/notification.webp";
import profile_icon from "../../../public/jack.webp";
import { NavLink } from 'react-router-dom';

export const Navbar = ({ setSideBar }) => {
  return (
    <nav className="flex-div">
      <div className="nav-left flex-div">
        <img
          className="menu-icon"
          onClick={() => {
            setSideBar((preVal) => !preVal);
          }}
          src={menu_icon}
          alt="menu_icon"
        />
        <NavLink to={"/"}>
          <img className="logo" src={logo} alt="logo" />
        </NavLink>
      </div>
      <div className="nav-middle flex-div">
        <div className="search-box flex-div">
          <input type="text" placeholder="Search..." />
          <img src={search_icon} alt="search_icon" />
        </div>
      </div>
      <div className="nav-right flex-div">
        <img src={upload_icon} alt="upload_icon" />
        <img src={more_icon} alt="more_icon" />
        <img src={notification_icon} alt="notification_icon" />
        <img src={profile_icon} className="user-icon" alt="profile_icon" />
      </div>
    </nav>
  );
};
