import React from "react";
import service from "../assets/images/service.png";
import { Link } from "react-router";
import { FaGithub } from "react-icons/fa";
import { MdArrowOutward } from "react-icons/md";

const ServiceModal = () => {
  return (
    <div>
      <div className=" card flex-col md:flex-row bg-base-300 rounded-2xl  shadow-sm">
        <figure>
          <img className="object-cover h-[10em]" src={service} alt="Shoes" />
        </figure>
        <div className="card-body flex-1">
          <h2 className="card-title">Service Review</h2>
          <p className="text-left text-xs md:text-lg">
            ServiceReviewHub is a comprehensive review platform where users can
            discover and evaluate a wide range of services from local businesses
            and freelancers to online platforms and professional providers. Our
            goal is to create a transparent and trustworthy space where users
            can share real experiences, provide helpful feedback, and guide
            others toward quality services. With an intuitive interface and
            powerful search and filter options, users can easily browse services
            by category, location, or rating. Each service profile includes
            detailed information, verified customer reviews, average ratings,
            and the option to leave your own review based on personal
            experience.
          </p>
          <div className="card-actions justify-start">
            <div className="join space-x-3 text-xs">
              <button className="outline rounded-full px-3 join-item">
                React
              </button>
              <button className="outline rounded-full px-3 join-item">
                mongoDb
              </button>
              <button className="outline rounded-full px-3 join-item">
                Express.js
              </button>
              <button className="outline rounded-full px-3 join-item">
                TailWind
              </button>
            </div>
          </div>
          <div className="flex justify-center items-center gap-3  rounded-t-2xl py-1">
            <div className="btn bg-white ">
              {" "}
              <Link to={"https://github.com/parvezreza55/serviceReview"}>
                {" "}
                <FaGithub size={20} color="teal">
                  {" "}
                </FaGithub>
              </Link>{" "}
            </div>
            <Link
              to={"https://service-review-client-75e4a.web.app/"}
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

export default ServiceModal;
