import React from "react";
import ProgressBar from "@ramonak/react-progress-bar";
import { RiJavascriptFill, RiTailwindCssFill } from "react-icons/ri";
import { motion } from "motion/react";
import { FaReact } from "react-icons/fa";
import { SiExpress, SiMongodb } from "react-icons/si";
import { TbBrandGithubFilled } from "react-icons/tb";

const SkillCard = ({ skil }) => {
  console.log(skil);
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-items-center gap-4 w-9/12 mx-auto">
      <motion.div
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.8 }}
        className="card bg-base-100 shadow-sm border px-16 py-4"
      >
        <div className="flex items-center justify-center mb-3">
          <FaReact size={80} color="#61DBFB" />
        </div>
        <div className="text-center">
          <p className="text-xl font-semibold mb-2">React.js</p>
          <ProgressBar bgColor="#00D5BE" completed={90} />
          <p className="text-xs opacity-60 my-2">6 month experience</p>
        </div>
      </motion.div>
      {/* card 2  */}
      <motion.div
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.8 }}
        className="card bg-base-100 shadow-sm border px-16 py-4"
      >
        <div className="flex items-center justify-center mb-3">
          <RiJavascriptFill size={80} color="yellow" />
        </div>
        <div className="text-center">
          <p className="text-xl font-semibold mb-2">JavaScript</p>
          <ProgressBar bgColor="#00D5BE" completed={90} />
          <p className="text-xs opacity-60 my-2">6 month experience</p>
        </div>
      </motion.div>
      {/* card 3  */}
      <motion.div
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.8 }}
        className="card bg-base-100 shadow-sm border px-16 py-4"
      >
        <div className="flex items-center justify-center mb-3">
          <SiExpress size={80} />
        </div>
        <div className="text-center">
          <p className="text-xl font-semibold mb-2">Express.js</p>
          <ProgressBar bgColor="#00D5BE" completed={90} />
          <p className="text-xs opacity-60 my-2">6 month experience</p>
        </div>
      </motion.div>
      {/* card 4  */}
      <motion.div
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.8 }}
        className="card bg-base-100 shadow-sm border px-16 py-4"
      >
        <div className="flex items-center justify-center mb-3">
          <SiMongodb size={80} color="#3FA037" />
        </div>
        <div className="text-center">
          <p className="text-xl font-semibold mb-2">MongoDB</p>
          <ProgressBar bgColor="#00D5BE" completed={90} />
          <p className="text-xs opacity-60 my-2">6 month experience</p>
        </div>
      </motion.div>
      {/* card 5  */}
      <motion.div
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.8 }}
        className="card bg-base-100 shadow-sm border px-16 py-4"
      >
        <div className="flex items-center justify-center mb-3">
          <TbBrandGithubFilled size={80} />
        </div>
        <div className="text-center">
          <p className="text-xl font-semibold mb-2">Git & GitHub</p>
          <ProgressBar bgColor="#00D5BE" completed={90} />
          <p className="text-xs opacity-60 my-2">6 month experience</p>
        </div>
      </motion.div>
      {/* card 6  */}
      <motion.div
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.8 }}
        className="card bg-base-100 shadow-sm border px-16 py-4"
      >
        <div className="flex items-center justify-center mb-3">
          <RiTailwindCssFill size={80} color="#61DBFB" />
        </div>
        <div className="text-center">
          <p className="text-xl font-semibold mb-2">Tailwind CSS</p>
          <ProgressBar bgColor="#00D5BE" completed={90} />
          <p className="text-xs opacity-60 my-2">6 month experience</p>
        </div>
      </motion.div>
    </div>
  );
};

export default SkillCard;
