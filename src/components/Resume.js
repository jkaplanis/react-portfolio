import React from "react";
import pdf from "../resume/john-kaplanis-resume.pdf";

function Resume() {
  return (
    <section className="page-section bg-light" id="resume">
      <div className="text-center">
        <h2 className="section-heading text-uppercase mb-3">Resume</h2>
      </div>
      <div className="row text-center m-3">
        <div className="col-md-6">
          <a
            href="https://github.com/jkaplanis"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="fa-stack fa-4x">
              <i className="fas fa-circle fa-stack-2x text-primary" />
              <i className="fab fa-github fa-stack-1x fa-inverse" />
            </span>
          </a>
          <h4 className="my-3">Visit My GitHub</h4>
          <a
            href="https://github.com/jkaplanis"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="assets/img/github/github-screenshot.png"
              alt="github profile"
              style={{ padding: "4px", margin: "4px" }}
            />
          </a>
        </div>
        <div className="col-md-6">
          <span className="fa-stack fa-4x">
            <i className="fas fa-circle fa-stack-2x text-primary" />
            <i className="fas fa-laptop fa-stack-1x fa-inverse" />
          </span>
          <h4 className="my-3">My Skills</h4>

          {/* <div
            className="skillsWrapper text-muted"
            style={{ listStyleType: "none", fontWeight: "bold" }}
          >
            <div>React</div>
            <div>JavaScript</div>
            <div>HTML/CSS</div>
            <div>NodeJS</div>
            <div>MongoDB</div>
            <div>Express</div>
            <div>Bootstrap</div>
          </div> */}
          <div className="skillsRow text-center">
            <div className="skillsCol">
              <img src="assets/img/skills/bootstrap.png" alt="" />
              <img src="assets/img/skills/express.png" alt="" />
              <img src="assets/img/skills/mongodb.png" alt="" />
            </div>
            <div className="skillsCol">
              <img src="assets/img/skills/js.png" alt="" />
              <img src="assets/img/skills/html.png" alt="" />
              <img src="assets/img/skills/js.jpg" alt="" />
            </div>
            <div className="skillsCol">
              <img src="assets/img/skills/react.png" alt="" />
              <img src="assets/img/skills/nodejs.png" alt="" />
              <img src="assets/img/skills/css.png" alt="" />
            </div>
          </div>
          <div
            className="text-left resumeLink text-muted mt-3"
            style={{ listStyleType: "none", fontWeight: "bold" }}
          >
            {" "}
            For a complete list see my{" "}
            <a href={pdf} target="_blank" rel="noopener noreferrer">
              resume
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Resume;
