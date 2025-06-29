import React from "react";
import ServiceModal from "./ServiceModal";

const ServiceProject = () => {
  return (
    <>
      {/* You can open the modal using document.getElementById('ID').showModal() method */}
      <button
        className="btn"
        onClick={() => document.getElementById("my_modal_4").showModal()}
      >
        View More
      </button>
      <dialog id="my_modal_4" className="modal">
        <div className="bg-base-300 p-3 rounded-2xl w-[90%] mx-auto">
          <ServiceModal></ServiceModal>
          <div className="modal-action">
            <form method="dialog">
              {/* if there is a button, it will close the modal */}
              <button className="btn">Close</button>
            </form>
          </div>
        </div>
      </dialog>
    </>
  );
};

export default ServiceProject;
