import React, { useState } from "react";
import "./Navbar.css";
import Moblilenav from "./Moblilenav";

function Navbar() {
  const [openMenu, setOpenMenu] = useState(false);
  const toggleMenu = () => {
    setOpenMenu(!openMenu);
  };

  const smoothScroll = (e, targetId) => {
    e.preventDefault();
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <>
      <Moblilenav isOpen={openMenu} toggleMenu={toggleMenu} />
      <nav className="nav-wrapper">
        <div className="nav-content">
          <img src="" alt="logo" className="logo" />

          <ul>
            <li>
              <a href="#" className="menu">
                Home
              </a>
            </li>
            <li>
              <a
                href="#skill-cont"
                className="menu"
                onClick={(e) => smoothScroll(e, "skill-cont")}
              >
                Skills
              </a>
            </li>
            <li>
              <a href="#" className="menu">
                Work Experience
              </a>
            </li>
            <li>
              <a href="#" className="menu">
                Contact Me
              </a>
            </li>

            <button className="contact-me">Hire me</button>
          </ul>

          <button className="menu-btn" onClick={toggleMenu}>
            <span
              className="material-symbols-outlined"
              style={{ fontSize: "1.8rem" }}
            >
              {openMenu ? "close" : "menu"}
            </span>
          </button>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
