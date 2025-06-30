import React from "react";
import { Link } from "react-scroll";

const Navbar = () => {
  const links = (
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
  return (
    <div className="navbar w-11/12 mx-auto">
      <div className="navbar-start">
        <p className="text-4xl text-teal-400 font-extrabold ">Parvez</p>
      </div>
      <div className="navbar-end hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{links}</ul>
      </div>
      <div className="navbar-end lg:hidden">
        <div className="dropdown flex justify-end">
          <div tabIndex={0} role="button" className="btn btn-ghost">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {" "}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />{" "}
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-10 w-52 p-2 border border-gray-50 shadow"
          >
            {links}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
