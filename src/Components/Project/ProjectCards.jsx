import React from "react";
import { FaGithub } from "react-icons/fa";
import { MdArrowOutward } from "react-icons/md";
import { Link } from "react-router";
import ModalDetails from "./ModalDetails";

const ProjectCards = ({ project }) => {
  const { name, image, description, live, repsitory } = project;

  return (
    <div>
      <div className="flex flex-col justify-between bg-base-300 rounded-2xl h-full shadow-sm">
        <div>
          <figure>
            <img
              className="object-cover w-full rounded-t-2xl"
              src={image}
              alt="Shoes"
            />
          </figure>
        </div>
        <div className="flex flex-col justify-between px-3 pb-4 space-y-4">
          <div className="">
            <h2 className="card-title">{name}</h2>
            <p className="flex-1">{description}</p>
          </div>
          <div className="flex justify-between items-center gap-3">
            <div className="btn bg-white ">
              {" "}
              <Link to={repsitory}>
                {" "}
                <FaGithub size={20} color="teal">
                  {" "}
                </FaGithub>
              </Link>{" "}
            </div>
            <Link
              to={live}
              className="flex w-fit gap-2 btn text-teal-400 bg-white"
            >
              Live{" "}
              <span>
                <MdArrowOutward />
              </span>
            </Link>
            {/* modals  */}
            <div className=" mb-0">
              <button
                className="btn w-full bg-teal-300 text-black "
                onClick={() =>
                  document.getElementById(`${project.id}`).showModal()
                }
              >
                View more
              </button>
              <dialog
                id={project.id}
                className="modal modal-middle sm:modal-middle"
              >
                <div className="bg-base-300 p-3 rounded-2xl w-[80%] mx-auto ">
                  <ModalDetails project={project}></ModalDetails>
                  <div className="modal-action">
                    <form method="dialog">
                      {/* if there is a button in form, it will close the modal */}
                      <button className="btn bg-teal-300 text-black">
                        Close
                      </button>
                    </form>
                  </div>
                </div>
              </dialog>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCards;
