import React from "react";
import Navbar from "../Components/Navbar";
import Hero from "../Components/Hero";
import About from "../Components/About";
import Skills from "../Components/Skills";
import Education from "../Components/Eucation/Education";
import Footer from "../Components/Footer/Footer";
import Contact from "../Components/Contact.jsx/Contact";
import Project from "../Components/Project/Project";
import ScrollToTop from "react-scroll-to-top";

const Home = () => {
  return (
    <div>
      <div>
        <ScrollToTop style={{ backgroundColor: "#46EDD5" }} smooth />
      </div>

      <Navbar></Navbar>
      <Hero></Hero>
      <About></About>
      <Skills></Skills>
      <Education></Education>
      <Project></Project>
      <Contact></Contact>
      <Footer></Footer>
    </div>
  );
};

export default Home;
