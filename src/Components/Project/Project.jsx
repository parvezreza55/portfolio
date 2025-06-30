import React, { use } from "react";
import { FaGithub } from "react-icons/fa";
import { MdArrowOutward } from "react-icons/md";
import { Element, Link } from "react-scroll";
import ProjectCards from "./ProjectCards";

const projectsData = fetch("./project.json").then((res) => res.json());
const Project = () => {
  const projectData = use(projectsData);
  console.log(projectData);

  return (
    <div>
      <Element name="project">
        <div data-aos="fade-up" className="w-11/12 mx-auto py-20">
          <h1 className="text-2xl md:text-4xl font-bold text-center mb-10">
            My Projects
          </h1>
          <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 justify-items-center">
            {projectData.map((project) => (
              <ProjectCards key={project.id} project={project}></ProjectCards>
            ))}
          </div>
        </div>
      </Element>
    </div>
  );
};

export default Project;
