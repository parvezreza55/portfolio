import React from "react";
import { PiStudentBold } from "react-icons/pi";
import { Element } from "react-scroll";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

const Education = () => {
  return (
    <Element name="education">
      <div>
        <h1 className="text-xl md:text-4xl font-bold text-center py-20">
          Education
        </h1>
        <VerticalTimeline>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
            contentArrowStyle={{ borderRight: "7px solid  rgb(33, 150, 243)" }}
            date="2020 - 2022"
            iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
            icon={<PiStudentBold />}
          >
            <h3 className="vertical-timeline-element-title">Hsc</h3>
            <h4 className="vertical-timeline-element-subtitle">GPA : 5.00</h4>
            <p>
              I completed my Higher Secondary Certificate (HSC) from Sherwood
              School and College under the Rajshahi Education Board, where I
              built a strong academic foundation and developed a keen interest
              in technology and problem-solving.
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="2022 - present"
            contentStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
            contentArrowStyle={{ borderRight: "7px solid  rgb(33, 150, 243)" }}
            iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
            icon={<PiStudentBold />}
          >
            <h3 className="vertical-timeline-element-title">
              B.Sc. in Mechanical Engineering
            </h3>
            <h4 className="vertical-timeline-element-subtitle">Second Year</h4>
            <p>
              Focused on the design, analysis, and manufacturing of mechanical
              systems. Covered key subjects like thermodynamics, fluid
              mechanics, machine design, and material science. Developed strong
              problem-solving, teamwork, and technical skills through hands-on
              projects and engineering labs.
            </p>
          </VerticalTimelineElement>
        </VerticalTimeline>
      </div>
    </Element>
  );
};

export default Education;
