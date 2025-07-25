import React from "react";
import { Element } from "react-scroll";
import profile from "../assets/images/profile.jpg";
import { Typewriter } from "react-simple-typewriter";
import { FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa";
import { motion } from "motion/react";
import { Link } from "react-router";

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
              words={["Full Stack Web Developer"]}
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
              <Link to={"https://github.com/parvezreza55"} target="_blank">
                <FaGithub size={20} />
              </Link>
            </motion.h1>
            <motion.h1 whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.8 }}>
              <Link
                to={"https://www.linkedin.com/in/parvez-reza/"}
                target="_blank"
              >
                <FaLinkedin size={20} />
              </Link>
            </motion.h1>
            <motion.h1 whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.8 }}>
              <Link
                to={"https://www.facebook.com/parvez.reza.312357"}
                target="_blank"
              >
                {" "}
                <FaFacebook size={20}></FaFacebook>
              </Link>
            </motion.h1>
          </div>
        </div>
      </div>
    </Element>
  );
};

export default Hero;
