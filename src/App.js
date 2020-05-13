import React, { useEffect } from "react";
import Nav from "./components/Nav";
import Header from "./components/Header";
import AboutMe from "./components/AboutMe";
import Resume from "./components/Resume";
import Portfolio from "./components/Portfolios";
import Footer from "./components/Footer";
import Modals from "./components/Modals";

function App() {
  useEffect(() => {
    const script = document.createElement("script");

    script.src = "js/scripts.js";

    document.body.appendChild(script);
  }, []);
  return (
    <>
      <Nav />
      <Header />
      <AboutMe />
      <Resume />
      <Portfolio />
      <Footer />
      <Modals />
    </>
  );
}

export default App;
