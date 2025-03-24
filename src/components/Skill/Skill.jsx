import React from "react";
import "./Skill.css";
function Skill() {
  return (
    <section id="skill-cont">
      <div className="skill-container">
        <div>
          <h2 className="skill-title">My Skills</h2>
        </div>
        <div className="skill-box">
          <div className="skill-programming">
            <h3 className="programming-title">Programming Language : </h3>
            <div className="skill-text-container">
              <div className="skills">
                <img
                  className="img-programming"
                  src="/images/java.jpg"
                  alt="JAVA"
                />
                <p className="skill-text">JAVA</p>
              </div>

              <div className="skills">
                <img
                  className="img-programming"
                  src="/images/js.png"
                  alt="JAVAscript"
                />
                <p className="skill-text">JAVASCRIPT</p>
              </div>

              <div className="skills">
                <img
                  className="img-programming"
                  src="/images/python.webp"
                  alt="python"
                />
                <p className="skill-text">PYTHON</p>
              </div>
            </div>
          </div>

          {/* frontend+ */}
          <div className="skill-frontend">
            <h3 className="programming-title">Frontend : </h3>
            <div className="skill-text-container">
              <div className="skills">
                <img
                  className="img-programming"
                  src="/images/html.jpg"
                  alt="html"
                />
                <p className="skill-text">HTML</p>
              </div>

              <div className="skills">
                <img
                  className="img-programming"
                  src="/images/css.png"
                  alt="css"
                />
                <p className="skill-text">CSS</p>
              </div>

              <div className="skills">
                <img
                  className="img-programming"
                  src="/images/js.png"
                  alt="javascript"
                />
                <p className="skill-text">JAVASCRIT</p>
              </div>

              <div className="skills">
                <img
                  className="img-programming"
                  src="/images/react.png"
                  alt="javascript"
                />
                <p className="skill-text">REACT JS</p>
              </div>
            </div>
          </div>

          {/* backend */}
          <div className="skill-backend">
            <h3 className="programming-title">Backend : </h3>
            <div className="skill-text-container">
              <div className="skills">
                <img
                  className="img-programming"
                  src="/images/node.png"
                  alt="Node js"
                />
                <p className="skill-text">NODE JS</p>
              </div>

              <div className="skills">
                <img
                  className="img-programming"
                  src="/images/express.png"
                  alt="Express js"
                />
                <p className="skill-text">EXPRESS JS</p>
              </div>

              <div className="skills">
                <img
                  className="img-programming"
                  src="/images/mongodb.png"
                  alt="mongo db"
                />
                <p className="skill-text">MONGO DB</p>
              </div>
            </div>
          </div>

          {/* technical skills  */}
          <div className="skill-technical">
            <h3 className="programming-title">TECHNICAL SKILLS : </h3>
            <div className="skill-text-container">
              <div className="skills">
                <img
                  className="img-programming"
                  src="/images/vscode.png"
                  alt="vscode"
                />
                <p className="skill-text">VS CODE</p>
              </div>

              <div className="skills">
                <img
                  className="img-programming"
                  src="/images/github.png"
                  alt="github"
                />
                <p className="skill-text">GITHUB</p>
              </div>

              <div className="skills">
                <img
                  className="img-programming"
                  src="/images/netlify.png"
                  alt="netlify"
                />
                <p className="skill-text">NETLIFY</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skill;
