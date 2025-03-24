import React from "react";
import "./Hero.css";
function Hero() {
  return (
    <section className="hero-container">
      <div className="hero-content">
        <h2>LAL SINGH DHARMI</h2>
        <p>
          Hi, I'm Lal Singh Dharmi! A passionate Front-End Developer from
          Patrician College, crafting responsive and user-friendly web
          experiences with HTML, CSS, JavaScript, and React. Let's build
          something amazing together!
        </p>
      </div>

      <div className="hero-img">
        <div>
          {/* <div className="tech-icon">
            <img className="img-icon" src="/images/react.png" alt="img" />
          </div> */}
          <img className="profile-img" src="/images/lal.jpg" alt="img" />
        </div>

        {/* <div>
          <div className="tech-icon">
            <img className="img-icon" src="/images/html.jpg" alt="HTML" />
          </div>

          <div className="tech-icon">
            <img className="img-icon" src="/images/css.png" alt="CSS" />
          </div>

          <div className="tech-icon">
            <img className="img-icon" src="/images/js.png" alt="JS" />
          </div>
        </div> */}
      </div>
    </section>
  );
}
export default Hero;
