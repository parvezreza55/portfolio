import React from "react";
import Navbar from "../Components/Navbar";
import Hero from "../Components/Hero";
import About from "../Components/About";
import Skills from "../Components/Skills";
import MyProject from "../Components/MyProject";
import Education from "../Components/Eucation/Education";
import Footer from "../Components/Footer/Footer";
import Contact from "../Components/Contact.jsx/Contact";

const Home = () => {
  return (
    <div>
      <Navbar></Navbar>
      <Hero></Hero>
      <About></About>
      <Skills></Skills>
      <Education></Education>
      <MyProject></MyProject>
      <Contact></Contact>
      <Footer></Footer>
    </div>
  );
};

export default Home;
