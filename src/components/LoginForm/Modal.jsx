import './Login.scss'
import React from "react";
import Login from "./Login";

const Modal = ({close , show , setShowModal}) => {
  return (
    show && (
      <div className="modal" style={{
        backdropFilter:(show?"blur(3px)":"blur(0)")
      }}>
        <Login close={close} showModal={show} setShowModal={setShowModal}/>
    </div>
    )
  );
};

export default Modal;
