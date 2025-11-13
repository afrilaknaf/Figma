import "../styles/navbar.css"; 
import one from "../assets/one.png";

export default function Navbar() {
  return (
    <>
    
      <nav className="navbarcontent">

        <div className="navicon">
          <img src={one} alt="" />
        </div>

        <div className="navcenter">
          <ul>
            <li>
              Features <i className="fa-solid fa-chevron-down"></i>
            </li>
            <li>Developers</li>
            <li>
              Company <i className="fa-solid fa-chevron-down"></i>
            </li>
            <li>Blog</li>
            <li>ChangeLog</li>
          </ul>

        </div>

        <div className="navbutton">
          <button>Join Waitlist</button>
        </div>
      </nav>     
    </>
  );
}
