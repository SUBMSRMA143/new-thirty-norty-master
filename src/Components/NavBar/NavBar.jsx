import { useState } from "react";
import { Link } from "react-router-dom";
import sn1 from "/img/logo.webp";
import "./NavBar.css";

const NavBar = ({ page }) => {
  const [navBg, setNavBg] = useState(false);
  const [mobileNav, setMobileNav] = useState(false);

  // console.log(mobileNav);

  const changeNavBg = () => {
    window.scrollY >= 90 ? setNavBg(true) : setNavBg(false);
  };

  window.addEventListener("scroll", changeNavBg);
  return (
    <div>
      <nav
        className={`navbar navbar-expand-lg bg-white navbar-light shadow-sm py-3 py-lg-0 px-3 px-lg-0 ${navBg ? "sticky-top" : ""
          }`}
        style={{
          position: "fixed",
          top: "0",
          left: "0",
          right: "0",
          zIndex: 10000,
        }}
      >
        <Link to="/" className="navbar-brand ms-lg-5">
          <img src={sn1} alt="logo" className="nav-logo-thirty40" />
        </Link>
        <button
          className="navbar-toggler collapsed"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarCollapse"
          onClick={() => setMobileNav(!mobileNav)}
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className={`collapse navbar-collapse ${mobileNav ? "show" : ""}`}
          id="navbarCollapse"
        >
          <div className="navbar-nav ms-auto py-0">
            <Link
              to="/India"
              className={`nav-item nav-link ${page == "India" ? "active" : ""
                }`}
            >
              India
            </Link>
            <Link
              to="/Europe"
              className={`nav-item nav-link ${page == "Europe" ? "active" : ""
                }`}
            >
              Europe
            </Link>
            <Link
              to="/USA"
              className={`nav-item nav-link ${page == "USA" ? "active" : ""
                }`}
            >
              USA
            </Link>
            <Link
              to="/Global"
              className={`nav-item nav-link ${page == "Global" ? "active" : ""
                }`}
            >
              Global
            </Link>
            <Link
              to="/Services/Join-Our-Academy"
              className={`nav-item nav-link ${page == "Join-Our-Academy" ? "active" : ""
                }`}
            >
              Tennis Academies
            </Link>
            <Link
              to="/Services/Register-For-Tennis-and-Education"
              className={`nav-item nav-link ${page == "Register-For-Tennis-and-Education" ? "active" : ""
                }`}>
              Career Counselling
            </Link>

            <Link
              to="/EnquireNow"
              className="nav-item nav-link nav-contact bg-primary text-white px-5 ms-lg-5"
            >
              Enqire Now <i className="bi bi-arrow-right"></i>
            </Link>
          </div>
        </div>
      </nav >
    </div >
  );
};

export default NavBar;
