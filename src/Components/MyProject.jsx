import React from "react";
import hobby from "../assets/images/hobby.png";
import service from "../assets/images/service.png";
import { FaGithub } from "react-icons/fa";
import { MdArrowOutward } from "react-icons/md";
import { Link, Links } from "react-router";
import ServiceProject from "./ServiceProject";
import ProjecDetails from "./ProjecDetails";
import { Element } from "react-scroll";

const MyProject = () => {
  return (
    <Element name="project">
      <div data-aos="fade-up" className="w-11/12 mx-auto py-20">
        <h1 className="text-2xl md:text-4xl font-bold text-center mb-10">
          {" "}
          My Projects
        </h1>
        <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 justify-items-center">
          <div className="card bg-base-300 rounded-2xl  shadow-sm">
            <div className="flex justify-center items-center gap-3 bg-white rounded-t-2xl py-1">
              <div className="btn bg-white ">
                {" "}
                <Link to={"https://github.com/parvezreza55/hobbyHub"}>
                  {" "}
                  <FaGithub size={20} color="teal">
                    {" "}
                  </FaGithub>
                </Link>{" "}
              </div>
              <Link
                to={"https://hobby-hub-client-12859.web.app/"}
                className="flex gap-2 btn text-teal-400 bg-white"
              >
                Live{" "}
                <span>
                  <MdArrowOutward />
                </span>
              </Link>
            </div>
            <figure>
              <img className="object-cover" src={hobby} alt="Shoes" />
            </figure>
            <div className="card-body">
              <h2 className="card-title">HobbyHub</h2>
              <p>
                HobbyHub is a platform that connects people through shared
                hobbies. Discover local groups, join events, or create your own
                community around passions like art, music, sports, and more all
                in one place.
              </p>
              <div className="card-actions justify-start">
                <div className="join space-x-3 text-xs">
                  <button className="outline rounded-full px-3 join-item">
                    React
                  </button>
                  <button className="outline rounded-full px-3 join-item">
                    mongoDb
                  </button>
                  <button className="outline rounded-full px-3 join-item">
                    Express.js
                  </button>
                  <button className="outline rounded-full px-3 join-item">
                    TailWind
                  </button>
                </div>

                <button className="w-full mt-3">
                  <ProjecDetails></ProjecDetails>
                </button>
              </div>
            </div>
          </div>

          {/* card 2  */}
          <div className="card bg-base-300  rounded-2xl  shadow-sm">
            <div className="flex justify-center items-center gap-3 bg-white rounded-t-2xl py-1">
              <div className="btn bg-white ">
                {" "}
                <Link to={"https://github.com/parvezreza55/serviceReview"}>
                  {" "}
                  <FaGithub size={20} color="teal">
                    {" "}
                  </FaGithub>
                </Link>{" "}
              </div>
              <Link
                to={"https://service-review-client-75e4a.web.app/"}
                className="flex gap-2 btn text-teal-400 bg-white"
              >
                Live{" "}
                <span>
                  <MdArrowOutward />
                </span>
              </Link>
            </div>
            <figure>
              <img className="object-cover" src={service} alt="Shoes" />
            </figure>
            <div className="card-body">
              <h2 className="card-title">Service Review</h2>
              <p>
                ServiceReviewHub is a platform where users can explore, rate,
                and review various services. From local businesses to digital
                platforms, it helps people share experiences, build trust, and
                make informed decisions through genuine user feedback
              </p>
              <div className="card-actions justify-start">
                <div className="join space-x-3 text-xs">
                  <button className="outline rounded-full px-3 join-item">
                    React
                  </button>
                  <button className="outline rounded-full px-3 join-item">
                    mongoDb
                  </button>
                  <button className="outline rounded-full px-3 join-item">
                    Express.js
                  </button>
                  <button className="outline rounded-full px-3 join-item">
                    TailWind
                  </button>
                </div>
                <button className="w-full mt-3">
                  <ServiceProject></ServiceProject>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Element>
  );
};

export default MyProject;
