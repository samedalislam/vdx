import {
  MdOutlineHistory,
  MdOutlineHome,
  MdOutlineThumbUp,
  MdOutlineVideoLibrary,
  MdOutlineWatchLater,
} from "react-icons/md";
import { IoMdInfinite } from "react-icons/io";
import Avatar from "./Avatar";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="item">
        <MdOutlineHome />
        <span>Home</span>
      </div>
      <div className="item">
        <IoMdInfinite />
        <span>Snaps</span>
      </div>
      <div className="item">
        <MdOutlineVideoLibrary />
        <span>Subscriptions</span>
      </div>
      <div className="item">
        <MdOutlineWatchLater />
        <span>Watch later</span>
      </div>
      <div className="item">
        <MdOutlineThumbUp />
        <span>Liked Videos</span>
      </div>
      <div className="item">
        <MdOutlineHistory />
        <span>History</span>
      </div>
      {/* Divider */}
      <div className="divider"></div> {/* Divider */}
      <div className="item">
        <Avatar image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvJq61yF8ZP3AjCJFOc9i5ZTofD7E6KyjSyg&usqp=CAU" />
        <span>Dev Coding</span>
      </div>
      <div className="item">
        <Avatar image="https://images.pexels.com/photos/1493004/pexels-photo-1493004.jpeg?auto=compress&cs=tinysrgb&w=600" />
        <span>Music BD</span>
      </div>
      <div className="item">
        <Avatar image="https://images.pexels.com/photos/7249294/pexels-photo-7249294.jpeg?auto=compress&cs=tinysrgb&w=600" />
        <span>Quranic Life</span>
      </div>
      <div className="item">
        <Avatar image="https://images.pexels.com/photos/269724/pexels-photo-269724.jpeg?auto=compress&cs=tinysrgb&w=600" />

        <span>Beautiful World</span>
      </div>
      <div className="item">
        <Avatar image="https://images.pexels.com/photos/3944454/pexels-photo-3944454.jpeg?auto=compress&cs=tinysrgb&w=600" />
        <span>Daily News</span>
      </div>
      {/* Divider */}
      <div className="divider"></div> {/* Divider */}
      <div className="about-us">
        <div className="links">
          <a href="/">GitHub</a>
          <a href="/">LinkedIn</a>
          <a href="/">Portfolio</a>
        </div>
        <span>@{new Date().getFullYear()}. All rights reserved to AL SAMID.</span>
      </div>
    </div>
  );
};
export default Sidebar;
