import "./sidebar.css"
import {Link} from "react-router-dom"
import {BsFacebook,BsInstagram,BsPinterest,BsTwitter} from "react-icons/bs"
function Sidebar() {
  return (
    <div className="sidebar">
    <div className="sidebarItem">
      <span className="sidebarTitle">ABOUT ME</span>
      <img
        src="https://images.pexels.com/photos/4916559/pexels-photo-4916559.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
        alt=""
      />
      <p>
        Laboris sunt aute cupidatat velit magna velit ullamco dolore mollit
        amet ex esse.Sunt eu ut nostrud id quis proident.
      </p>
    </div>
    <div className="sidebarItem">
      <span className="sidebarTitle">CATEGORIES</span>
      <ul className="sidebarList">
        <li className="sidebarListItem">
          <Link className="link" to="/posts?cat=Life">
            Life
          </Link>
        </li>
        <li className="sidebarListItem">
          <Link className="link" to="/posts?cat=Music">
            Music
          </Link>
        </li>
        <li className="sidebarListItem">
          <Link className="link" to="/posts?cat=Sport">
            Sport
          </Link>
        </li>
        <li className="sidebarListItem">
          <Link className="link" to="/posts?cat=Style">
            Style
          </Link>
        </li>
        <li className="sidebarListItem">
          <Link className="link" to="/posts?cat=Tech">
            Tech
          </Link>
        </li>
        <li className="sidebarListItem">
          <Link className="link" to="/posts?cat=Cinema">
            Cinema
          </Link>
        </li>
      </ul>
    </div>
    <div className="sidebarItem">
      <span className="sidebarTitle">FOLLOW US</span>
      <div className="sidebarSocial">
        <BsFacebook className="sidebarIcon"/>
        <BsInstagram className="sidebarIcon"/>
        <BsPinterest className="sidebarIcon"/>
        <BsTwitter className="sidebarIcon"/>
      </div>
    </div>
  </div>
  )
}

export default Sidebar
