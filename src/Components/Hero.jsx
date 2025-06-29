import React from "react";
import { Element } from "react-scroll";
import profile from "../assets/images/profile.jpg";
import { Typewriter } from "react-simple-typewriter";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import { motion } from "motion/react";

const Hero = () => {
  return (
    <Element name="home">
      <div
        data-aos="zoom-in-up"
        className=" flex flex-col md:flex-row items-center justify-evenly gap-5 py-20"
      >
        <div>
          <img
            className="rounded-full h-64 w-64 border border-gray-50 p-1 object-cover"
            src={profile}
            alt=""
          />
        </div>
        <div>
          <h1 className="text-xl md:text-4xl font-extrabold">
            Hi, I'm <span className="text-teal-400">Parvez Reza Pavel</span>
          </h1>
          <h1 className="text-xl md:text-2xl font-semibold opacity-60 mt-3">
            <Typewriter
              words={["MERN Stack Developer"]}
              loop={Infinity}
              cursor
              cursorStyle="|"
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={1000}
            />
          </h1>
          <div className="mt-7">
            <h1 className="btn outline outline-teal-400">Download Resume </h1>
          </div>
          <div className="mt-7 flex gap-7">
            <motion.h1 whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.8 }}>
              <FaGithub size={20} />
            </motion.h1>
            <motion.h1 whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.8 }}>
              <FaLinkedin size={20} />
            </motion.h1>
            <motion.h1 whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.8 }}>
              <FaTwitter size={20}></FaTwitter>
            </motion.h1>
          </div>
        </div>
      </div>
    </Element>
  );
};

export default Hero;
