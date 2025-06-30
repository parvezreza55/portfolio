import React, { use, useState } from "react";
import { Element } from "react-scroll";
import SkillsCard from "./SkillsCard";

const skillDatas = fetch("./skill.json").then((res) => res.json());

const Skills = () => {
  const [showAll, setShowAll] = useState(false);
  const skillData = use(skillDatas);
  const visibleSkill = showAll ? skillData : skillData.slice(0, 6);
  return (
    <Element name="skill">
      <div data-aos="zoom-in-up">
        <div className="w-11/12 mx-auto py-20">
          <h1 className="text-xl md:text-4xl font-bold text-center mb-10">
            Skill Set
          </h1>
          <div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {visibleSkill.map((skill) => (
                <SkillsCard key={skill.id} skill={skill}></SkillsCard>
              ))}
            </div>
          </div>
          <div
            onClick={() => setShowAll(!showAll)}
            className="text-center mt-10"
          >
            <a
              href="#_"
              className="relative inline-block px-4 py-2 font-medium group"
            >
              <span className="absolute inset-0 w-full h-full transition duration-200  ease-out transform translate-x-1 translate-y-1 bg-teal-300 group-hover:-translate-x-0 group-hover:-translate-y-0 "></span>
              <span className="absolute inset-0 w-full h-full bg-white border-2 border-teal-300 group-hover:border-t-white group-hover:border-l-white group-hover:border-r-white   group-hover:bg-teal-400"></span>
              <span className="relative text-black group-hover:text-white">
                {showAll ? "See Less" : "See More"}
              </span>
            </a>
          </div>
        </div>
      </div>
    </Element>
  );
};

export default Skills;
