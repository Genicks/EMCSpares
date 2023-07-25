import { NavLink } from "react-router-dom";
import "../CSS/NavBar.css";
import logo from "../Img/EMCLogo.png";

const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-md navbar-dark bg-dark">
      <div className="container-fluid">
        <a href="/" className="navbar-brand h1 p-0 m-0">
          <img src={logo} alt="EMC SPARES" className="logo" />
          EMC SPARES
        </a>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav container-fluid m-0 p-0 d-flex justify-content-end">
          <li className="nav-item">
              <NavLink className="nav-link " to="/" >
                Home
                <i className="bi bi-house ms-1 icons"></i>
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link " to="https://call.whatsapp.com/voice/FagIjZ9kgmBFmNkJnWcEZE">
                Contact us
                <i className="bi bi-telephone ms-1 icons"></i>
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                className="nav-link "
                to="https://api.whatsapp.com/send?phone=5926578699&text=I%20would%20like%20to%20make%20an%20order."
                target="blank"
                rel="noreferrer"
              >
                Order now
                <i className="bi bi-bag-check ms-1 icons"></i>
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link " to="/About">
                About
                <i className="bi bi-person-circle ms-1 icons"></i>
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
export default NavBar;
