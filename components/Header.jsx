import { BsYoutube } from "react-icons/bs";
import {
  MdMenu,
  MdOutlineNotificationsNone,
  MdOutlineVideoCall,
  MdSearch,
} from "react-icons/md";
import Avatar from "./Avatar";

const Header = () => {
  return (
    <div className="header">
      <MdMenu className="menu-toggle" />
      <div className="logo">
        <BsYoutube />
        <span>VDX</span>
        <sup>BD</sup>
      </div>
      <div className="search">
        <form>
          <input type="text" placeholder="Search" />
          <button type="submit">
            <MdSearch />
          </button>
        </form>
      </div>
      <div className="action-others">
        <MdOutlineVideoCall />
        <MdOutlineNotificationsNone />
        <Avatar
          image={
            "https://images.pexels.com/photos/4890259/pexels-photo-4890259.jpeg?auto=compress&cs=tinysrgb&w=600"
          }
          size={"sm"}
        />
      </div>
    </div>
  );
};
export default Header;
