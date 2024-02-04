import React , {useState} from 'react';
import { IoIosCall } from "react-icons/io";
import Modal from '../LoginForm/Modal';

const Contact = () => {
	const [showModal, setShowModal] = useState(false);
	const openDownloadSyllabusModal = () => {
        setShowModal(true);
      };
	  const closeDownloadSyllabusModal = () => {
        setShowModal(false);
      };
  return (
    <>
    <div className='signup-main'>
      <div className='signup-vector' onClick={openDownloadSyllabusModal} style={{
								display: "flex",
								alignItems: "center",
								justifyContent: "center",
								padding: "2px",
								fontSize: "1.2rem",
								borderRadius: "50%",
								width: "30px",
								cursor: "pointer",
							}}>
                {/* <a href="tel:+91-9873287387"><IoIosCall color='#000'/></a> */}
				<IoIosCall color='#000'/>
				{showModal && (
                    <Modal close={closeDownloadSyllabusModal} show={showModal} setShowModal={setShowModal}/>
                  )}
							</div>
    </div>
    </>
  );
};

export default Contact;
