import React from "react";
import { motion } from "motion/react";
import { buildStyles, CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

const SkillsCard = ({ skill }) => {
  const { name, icon, progress, experience } = skill;

  return (
    <motion.div
      whileHover={{ scale: 1.01 }}
      whileTap={{ scale: 0.8 }}
      className="card bg-base-100 shadow-sm border px-16 py-4"
    >
      <div className=" flex flex-row justify-center items-center">
        {Array.isArray(icon) ? (
          icon.map((image, index) => (
            <img className="w-20" key={index} src={image} alt="" />
          ))
        ) : (
          <img className="w-20" src={icon} alt="" />
        )}
      </div>
      <div className="text-center">
        <p className="text-xl font-semibold my-3">
          {Array.isArray(name) ? name.join(",") : name}
        </p>
        <div className="w-20 mx-auto">
          {" "}
          <CircularProgressbar
            strokeWidth={8}
            value={progress}
            text={`${progress}%`}
            styles={buildStyles({
              pathColor: "#00D5BE",
              textColor: "#f88",
              trailColor: "#d6d6d6",
              backgroundColor: "#3e98c7",
            })}
          />
        </div>
        <p className="text-xs opacity-60 my-2">{experience} experience</p>
      </div>
    </motion.div>
  );
};

export default SkillsCard;
