import React from "react";
import { Element } from "react-scroll";

const Contact = () => {
  return (
    <div data-aos="fade-up" className="w-11/12 mx-auto py-10">
      <Element name="contact">
        <h1 className="text-xl md:text-4xl text-center font-bold mb-7">
          Contact Me
        </h1>
        <fieldset className="fieldset bg-base-200 border-base-300 rounded-box  border p-4">
          <legend className="fieldset-legend">Contact</legend>

          <label className="label">Name</label>
          <input type="text" className="input w-full" placeholder="Your Name" />

          <label className="label">Comment</label>
          <textarea
            className="input w-full h-20"
            placeholder="Write something"
          ></textarea>
          <button className="btn bg-teal-300 text-black mt-3">Submit</button>
        </fieldset>
      </Element>
    </div>
  );
};

export default Contact;
