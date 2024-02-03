import './Login.scss'
import React from "react";
import Login from "./Login";

const Modal = ({ closeModal}) => {
  return (
    <div className="modal">
      <Login closeModal={closeModal}/>
  </div>
  );
};

export default Modal;
