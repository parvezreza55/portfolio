import React from "react";
import hobby from "../assets/images/hobby.png";
import { Link } from "react-router";
import { FaGithub } from "react-icons/fa";
import { MdArrowOutward } from "react-icons/md";

const DetailsModal = () => {
  return (
    <div>
      <div className=" card flex-col md:flex-row bg-base-300 rounded-2xl  shadow-sm">
        <figure>
          <img className="object-cover h-[10em]" src={hobby} alt="Shoes" />
        </figure>
        <div className="card-body flex-1">
          <h2 className="card-title">HobbyHub</h2>
          <p className="text-left text-xs md:text-lg">
            HobbyHub is a dynamic platform designed to bring together
            individuals who share a passion for hobbies and leisure activities.
            Whether you're into painting, photography, hiking, reading, or any
            other creative pursuit, HobbyHub makes it easy to discover, join, or
            start local hobby-based groups.
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
          </div>
          <div className="flex justify-center items-center gap-3  rounded-t-2xl py-1">
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
        </div>
      </div>
    </div>
  );
};

export default DetailsModal;
