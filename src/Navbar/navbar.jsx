import "../Navbar/navbar.css"
import one from "../assets/one.png"
export default function Navbar() {
  return (
    <>
      <nav className="navbarcontent">

        <div className="navicon">
          <img src={one} alt="" />
        </div>

        <div className="navcenter">
          <ul>
            <li>Features<i class="fa-solid fa-chevron-down"></i></li>
            <li>Devolpers</li>
            <li>Company<i class="fa-solid fa-chevron-down"></i></li>
            <li>Blog</li>
            <li>ChangeLog</li>
          </ul>
        </div>

        <div className="navbutton">
          <button>Join Waitlist </button>
        </div>
      </nav>

      <div className="maincontent">
        
      </div>
    </>
  )
}