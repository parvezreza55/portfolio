import React from "react";
import { Element } from "react-scroll";

const About = () => {
  return (
    <Element name="about">
      <div data-aos="zoom-in-up" className="bg-[#12071520]">
        <div className="w-11/12 mx-auto py-20">
          <h1 className="text-center text-xl md:text-4xl font-bold mb-5">
            About Me
          </h1>
          <p className="leading-7">
            My programming journey began with pure curiosity—just wanting to
            understand how websites and apps work. I started learning HTML and
            CSS to build simple static pages, and over time, I discovered
            JavaScript, which opened up a whole new world of possibilities. That
            led me to dive deeper into frontend frameworks like React and
            eventually backend technologies like Node.js and MongoDB. Today, I’m
            confident working across the entire MERN stack and love the constant
            learning that comes with being a developer. <br />
            I enjoy building projects that are both functional and visually
            engaging. My favorite type of work involves developing full-stack
            web applications that are responsive, fast, and user-friendly. I
            particularly enjoy frontend development—turning UI/UX designs into
            reality with React, Tailwind, and Framer Motion—but I also find
            backend logic and API development rewarding. Solving problems,
            debugging tricky issues, and learning new tools are all parts of the
            journey I embrace with excitement. <br />
            Outside of programming, I have a range of interests that keep me
            energized and inspired. I enjoy playing sports, especially football,
            which helps me stay active and balanced. I also love listening to
            music, exploring creative designs, and staying updated on the latest
            tech trends. These hobbies allow me to relax and recharge, giving me
            fresh perspectives when I return to coding. <br />
          </p>
        </div>
      </div>
    </Element>
  );
};

export default About;
