import React from "react";
import { Element } from "react-scroll";

const About = () => {
  return (
    <Element name="about">
      <div data-aos="zoom-in-up" className="bg-[#12071510]">
        <div className="w-11/12 mx-auto py-20">
          <h1 className="text-center text-xl md:text-4xl font-bold mb-5">
            About <span className="text-teal-300"> Me</span>
          </h1>
          <div className="bg-base-200 p-5 rounded-2xl opacity-60 space-y-3">
            <p className="leading-6 text-xs md:text-lg">
              My programming journey began with a curiosity to understand how
              websites and apps work. I started by learning HTML and CSS to
              build simple static pages, and discovering JavaScript opened up a
              world of interactivity. That interest pushed me to explore React,
              Node.js, and MongoDB—eventually becoming confident with the full
              MERN stack.
            </p>
            <p className="leading-6 text-xs md:text-lg">
              I enjoy creating full-stack web applications that are fast,
              responsive, and user-friendly. Frontend development with React,
              Tailwind, and Framer Motion is my favorite part, but I also like
              solving backend challenges and building APIs. Turning designs into
              real, functional interfaces is especially rewarding for me.
            </p>
            <p className="leading-6 text-xs md:text-lg">
              Beyond programming, I stay energized by playing football,
              listening to music, exploring design, and following tech trends.
              These hobbies help me relax, stay creative, and return to coding
              with fresh ideas and perspective.
            </p>
          </div>
        </div>
      </div>
    </Element>
  );
};

export default About;
