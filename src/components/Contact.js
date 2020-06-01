import React from "react";
import pdf from "../resume/john-kaplanis-resume.pdf";

function Contact() {
  return (
    <section className="page-section bg-light" id="contact">
      <div className="text-center">
        <h2 className="section-heading text-uppercase mb-3">Contact</h2>
      </div>
      <div className="row text-center m-3">
        <div className="col">
          <span className="fa-stack fa-4x">
            <i className="fas fa-circle fa-stack-2x text-primary" />
            <i className="fas fa-id-card fa-stack-1x fa-inverse" />
          </span>
          <h4 className="my-3">My Info</h4>
          <div
            className="text-left"
            style={{ maxWidth: "600px", margin: "auto" }}
          >
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
              <a href="mailto:johntkaplanis@gmail.com">
                johntkaplanis@gmail.com
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
              <a
                href="https://github.com/jkaplanis"
                target="_blank"
                rel="noopener noreferrer"
              >
                jkaplanis
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
                LinkedIn
              </span>
              <a
                href="https://www.linkedin.com/in/john-kaplanis/"
                target="_blank"
                rel="noopener noreferrer"
              >
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
              <a href={pdf} target="_blank" rel="noopener noreferrer">
                pdf
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
