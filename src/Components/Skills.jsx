import React from "react";
import { Element } from "react-scroll";
import SkillCard from "./SkillCard";
const Skills = () => {
  return (
    <Element name="skill">
      <div data-aos="zoom-in-up">
        <div className="w-11/12 mx-auto py-20">
          <h1 className="text-xl md:text-4xl font-bold text-center mb-10">
            Skill Set
          </h1>
          <div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
          >
            <div></div>
            <div>
              <SkillCard></SkillCard>
            </div>
          </div>
        </div>
      </div>
    </Element>
  );
};

export default Skills;
