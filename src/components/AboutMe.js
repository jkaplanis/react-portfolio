import React from "react";

function AboutMe() {
  return (
    <section className="page-section bg-light" id="aboutme">
      <div className="container">
        <div className="text-center">
          <h2 className="section-heading text-uppercase">About Me</h2>
        </div>
        <div className="row">
          <div className="col">
            <div className="team-member">
              <img
                className="mx-auto img-thumbnail"
                src="assets/img/team/profile-photo.jpeg"
                alt="John profile"
              />
              <h4>John Kaplanis</h4>
              <p className="text-muted">Software Developer</p>
              <a
                className="btn btn-dark btn-social mx-2"
                href="https://github.com/jkaplanis"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-github" />
              </a>
              <a
                className="btn btn-dark btn-social mx-2"
                href="https://www.linkedin.com/in/john-kaplanis/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-linkedin-in" />
              </a>
            </div>
          </div>
          <hr />
          <div className="row">
            <div className="col-lg-8 mx-auto mb-3 text-center">
              <p className="large text-muted">
                I am a Full Stack Software Developer (MERN Stack) with a passion
                for problem solving and learning. I enjoy collaborating with
                team members to efficiently build intuitive features and apps.
                My background in technology-focused sales and marketing has
                positioned me well to provide unique perspectives on how
                end-users interact with web-apps and platforms.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutMe;
