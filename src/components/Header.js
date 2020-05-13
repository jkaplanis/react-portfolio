import React from "react";

function Header() {
  return (
    <header className="masthead">
      <div className="container">
        <div className="masthead-heading text-uppercase">John Kaplanis</div>
        <div className="masthead-subheading">Software Developer</div>
        <a
          className="btn btn-primary btn-xl text-uppercase js-scroll-trigger"
          href="#aboutme"
        >
          Tell Me More
        </a>
      </div>
    </header>
  );
}

export default Header;
