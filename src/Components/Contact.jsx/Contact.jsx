import React from "react";
import { FaPhone, FaWhatsapp } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { Element } from "react-scroll";

const Contact = () => {
  return (
    <div data-aos="fade-up" className="w-11/12 mx-auto py-10 mb-16">
      <Element name="contact">
        <h1 className="text-xl md:text-4xl text-center font-bold mb-7">
          Contact Me
        </h1>
        <div className="flex flex-col md:flex-row justify-evenly   gap-7">
          <div className="flex-1 flex justify-center items-center p-2 rounded-2xl bg-base-300 ">
            <div className="mx-auto space-y-4 text-center">
              <p className="flex gap-3 items-center">
                <MdEmail color="red" size={20} /> : parvezreza112@gmail.com
              </p>
              <p className="flex items-center gap-3">
                <FaPhone color="blue"></FaPhone> : +8801590029932
              </p>
              <p className="flex items-center gap-3">
                <FaWhatsapp color="green"></FaWhatsapp> : +8801590029932
              </p>
            </div>
          </div>
          <fieldset className="fieldset bg-base-200 border-base-300 rounded-box  border p-4 w-full md:w-[60%]">
            <legend className="fieldset-legend">Contact</legend>

            <label className="label">Name</label>
            <input
              type="text"
              className="input w-full"
              placeholder="Your Name"
            />

            <label className="label">Comment</label>
            <textarea
              className="input w-full h-20"
              placeholder="Write something"
            ></textarea>
            <button className="btn bg-teal-300 text-black mt-3">Submit</button>
          </fieldset>
        </div>
      </Element>
    </div>
  );
};

export default Contact;
