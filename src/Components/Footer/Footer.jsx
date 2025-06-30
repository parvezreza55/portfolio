import React from "react";
import { FaFacebook, FaLinkedin } from "react-icons/fa";
import { NavLink } from "react-router";
import { Link } from "react-scroll";

const Footer = () => {
  const links = (
    <>
      <li>
        <Link
          className=" hover:bg-teal-300 hover:text-black bord font-semibold"
          to="education"
          smooth={true}
          duration={500}
        >
          Education
        </Link>
      </li>
      <li>
        <Link
          className=" hover:bg-teal-300 hover:text-black bo font-semibold"
          to="project"
          smooth={true}
          duration={500}
        >
          Project
        </Link>
      </li>

      <li>
        <Link
          className=" hover:bg-teal-300 hover:text-black font-semibold"
          to="contact"
          smooth={true}
          duration={500}
        >
          Contact
        </Link>
      </li>
    </>
  );
  const links1 = (
    <>
      <li>
        <Link
          className=" hover:bg-teal-300 hover:text-black font-semibold"
          to="home"
          smooth={true}
          duration={500}
        >
          Home
        </Link>
      </li>
      <li>
        <Link
          className=" hover:bg-teal-300 hover:text-black  font-semibold"
          to="about"
          smooth={true}
          duration={500}
        >
          About
        </Link>
      </li>
      <li>
        <Link
          className=" hover:bg-teal-300 hover:text-black  font-semibold"
          to="skill"
          smooth={true}
          duration={500}
        >
          Skill
        </Link>
      </li>
    </>
  );
  return (
    <div>
      <footer className="footer sm:footer-horizontal bg-neutral text-neutral-content p-10 relative">
        <nav>
          <div className="bg-base-300 pr-24 pl-5 py-5 absolute -top-16">
            <p className="text-4xl text-teal-400 font-semibold ">Parvez</p>
            <p className="font-semibold">
              Undergrad Student of ME <br />
              -Full Stack Web Developer
            </p>
            <p className="text-xs opacity-60 mb-3">
              For any queries,suggestions or feedback <br /> Contact me on my
              socials
            </p>
            <p className="text-[#d53e07] font-semibold">Follow me on</p>
            <div className="flex gap-6 mt-2">
              <NavLink
                to={"https://www.facebook.com/parvez.reza.312357"}
                target="_blank"
              >
                {" "}
                <FaFacebook color="#d53e07" size={20}></FaFacebook>
              </NavLink>
              <NavLink
                to={
                  "https://www.linkedin.com/in/parvez-reza-9a78a42a8/?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
                }
                target="_blank"
              >
                {" "}
                <FaLinkedin color="#d53e07" size={20}></FaLinkedin>
              </NavLink>
            </div>
          </div>
        </nav>
        <nav></nav>
        <nav></nav>
        <nav>
          <h6 className="footer-title opacity-100 text-[#E3821D] mb-0">
            Stay With me
          </h6>
          <ul>{links1}</ul>
        </nav>
        <nav>
          <h6 className="footer-title opacity-100 text-[#E3821D] mb-0">
            Parvez Reza Pavel
          </h6>
          <ul>{links}</ul>
        </nav>
        <nav>
          <h6 className="footer-title opacity-100 text-[#E3821D] mb-0">
            Contact me
          </h6>
          <a className="link link-hover">send now</a>
          <a className="link link-hover text-red-300">+8801590029932</a>
          <a className="link link-hover text-red-300">
            parvezreza112@gmail.com
          </a>
        </nav>
      </footer>
      <div className="footer sm:footer-horizontal footer-center bg-base-300 text-base-content p-4">
        <p className="text-white">
          Copyright © {new Date().getFullYear()} - All right reserved Parvez
        </p>
      </div>
    </div>
  );
};

export default Footer;
