import React from "react";
import "./Mobilenav.css";

const Moblilenav = ({ isOpen, toggleMenu }) => {
  return (
    <>
      <div
        className={`mobile-menu ${isOpen ? "active" : ""}`}
        onClick={toggleMenu}
      >
        <div className="moblie-menu-container">
          <img src="" alt="" className="logo" />

          <ul>
            <li>
              <a href="" className="menu">
                Home
              </a>
            </li>
            <li>
              <a href="" className="menu">
                Skills
              </a>
            </li>
            <li>
              <a href="" className="menu">
                Work Experience
              </a>
            </li>
            <li>
              <a href="" className="menu">
                Contact Me
              </a>
            </li>

            <button className="contact-me" onClick={() => {}}>
              Hire me
            </button>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Moblilenav;
