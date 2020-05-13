import React from "react";

function Resume() {
  return (
    <section className="page-section bg-light" id="resume">
      <div className="text-center">
        <h2 className="section-heading text-uppercase mb-3">Resume</h2>
      </div>
      <div className="row text-center m-3">
        <div className="col-md-6">
          <span className="fa-stack fa-4x">
            <i className="fas fa-circle fa-stack-2x text-primary" />
            <i className="fas fa-id-card fa-stack-1x fa-inverse" />
          </span>
          <h4 className="my-3">My Info</h4>
          <div className="text-left">
            <p className="text-muted">
              <span
                style={{
                  fontWeight: "bold",
                  display: "inline-block",
                  width: 90
                }}
              >
                Name
              </span>
              John Kaplanis
            </p>
            <p className="text-muted">
              <span
                style={{
                  fontWeight: "bold",
                  display: "inline-block",
                  width: 90
                }}
              >
                Location
              </span>
              San Diego, CA
            </p>
            <p className="text-muted">
              <span
                style={{
                  fontWeight: "bold",
                  display: "inline-block",
                  width: 90
                }}
              >
                Phone
              </span>
              831-524-0658
            </p>
            <p className="text-muted">
              <span
                style={{
                  fontWeight: "bold",
                  display: "inline-block",
                  width: 90
                }}
              >
                Email
              </span>
              johntkaplanis@gmail.com
            </p>
            <p className="text-muted">
              <span
                style={{
                  fontWeight: "bold",
                  display: "inline-block",
                  width: 90
                }}
              >
                Education
              </span>
              Certificate in Full Stack Web Development, UCSD Extension
            </p>
            <p className="text-muted">
              <span
                style={{
                  fontWeight: "bold",
                  display: "inline-block",
                  width: 90
                }}
              >
                GitHub
              </span>
              <a href="https://github.com/jkaplanis">jkaplanis</a>
            </p>
            <p className="text-muted">
              <span
                style={{
                  fontWeight: "bold",
                  display: "inline-block",
                  width: 90
                }}
              >
                LinkedIn
              </span>
              <a href="https://www.linkedin.com/in/john-kaplanis/">
                linkedin.com/in/john-kaplanis/
              </a>
            </p>
            <p className="text-muted">
              <span
                style={{
                  fontWeight: "bold",
                  display: "inline-block",
                  width: 90
                }}
              >
                Resume
              </span>
              <a href="#">pdf</a>
            </p>
          </div>
        </div>
        <div className="col-md-6">
          <span className="fa-stack fa-4x">
            <i className="fas fa-circle fa-stack-2x text-primary" />
            <i className="fas fa-laptop fa-stack-1x fa-inverse" />
          </span>
          <h4 className="my-3">My Skills</h4>
          <ul
            className="text-left text-muted"
            style={{ listStyleType: "none", fontWeight: "bold" }}
          >
            <li>JavaScript</li>
            <li>HTML/CSS</li>
            <li>NodeJS</li>
            <li>React</li>
            <li>MongoDB</li>
            <li>
              ...Find a more complete list on my <a href="#">resume</a>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Resume;
