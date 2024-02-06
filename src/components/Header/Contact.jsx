import React , {useState} from 'react';
import { IoIosCall } from "react-icons/io";
import Modal from '../LoginForm/Modal';

const Contact = ({flag}) => {
	const [showModal, setShowModal] = useState(false);
	// const openDownloadSyllabusModal = () => {
    //     setShowModal(true);
    //   };
	//   const closeDownloadSyllabusModal = () => {
    //     setShowModal(false);
    //   };
  return (
    <>
    <div className='signup-main'>
                {/* <a href="tel:+91-9873287387"><IoIosCall color='#000'/></a> */}
				{/* <IoIosCall color='#000'/> */}
				{flag === "head"? (<div className='signup-vector' onClick={() => setShowModal(true)} style={{
								display: "flex",
								alignItems: "center",
								justifyContent: "center",
								padding: "2px",
								fontSize: "1.2rem",
								borderRadius: "50%",
								width: "30px",
								cursor: "pointer",
							}}><IoIosCall color='#000'/></div>):(<span className="text" onClick={() => setShowModal(true)}>Contact Us</span>)}
				{showModal && (
                    <Modal show={showModal} setShowModal={setShowModal}/>
                  )}
    </div>
    </>
  );
};

export default Contact;
