import React from "react";
import "./Hero.css";
function Hero() {
  return (
    <section className="hero-container">
      <div className="hero-content">
        <h2>LAL SINGH DHARMI</h2>
        <p>
          passionate frontend developer | Transforming ideas into seamless and
          visually stunning web solution
        </p>
      </div>

      <div className="hero-img">
        <div>
          <div className="tech-icon">
            <img className="img-icon" src="" alt="img" />
          </div>
          <img
            className="profile-img"
            src="https://www.4cornerresources.com/wp-content/uploads/2020/11/IT-professionals-coding-scaled.jpeg"
            alt="img"
          />
        </div>

        <div>
          <div className="tech-icon">
            <img className="img-icon" src="" alt="HTML" />
          </div>

          <div className="tech-icon">
            <img className="img-icon" src="" alt="CSS" />
          </div>

          <div className="tech-icon">
            <img className="img-icon" src="" alt="JS" />
          </div>
        </div>
      </div>
    </section>
  );
}
export default Hero;
