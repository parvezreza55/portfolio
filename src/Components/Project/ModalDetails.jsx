import React from "react";
import { Link } from "react-router";
import { FaGithub } from "react-icons/fa";
import { MdArrowOutward } from "react-icons/md";

const ModalDetails = ({ project }) => {
  const { futurePlans, challenges } = project;
  // console.log(ids);
  return (
    <div>
      <div className=" card flex-col md:flex-row bg-base-300 rounded-2xl shadow-sm ">
        <figure className="w-[40%]">
          <img
            className="object-cover h-full rounded-2xl"
            src={project.image}
            alt="Shoes"
          />
        </figure>
        <div className="card-body flex-1">
          <h2 className="card-title">{project.name}</h2>
          <p className="text-left text-xs md:text-lg">{project.description}</p>
          <div className="hidden md:flex md:flex-col">
            <span className="font-semibold text-xl">Challenges</span>{" "}
            <p>{challenges}</p>
          </div>
          <div className="hidden md:flex md:flex-col">
            <span className="font-semibold text-xl">Future Plan</span>{" "}
            <p>{futurePlans}</p>
          </div>
          <div className="card-actions justify-start">
            <div>
              <div className="flex space-x-3 text-xs">
                {project.technologies.map((techno, index) => (
                  <button
                    className="outline rounded-full px-3 join-item mb-3"
                    key={index}
                  >
                    {techno}
                  </button>
                ))}
              </div>
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

export default ModalDetails;
