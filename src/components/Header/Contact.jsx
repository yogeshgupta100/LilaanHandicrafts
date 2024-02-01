import React from 'react';
import { IoIosCall } from "react-icons/io";

const Contact = () => {

  return (
    <>
    <div className='signup-main'>
      <div className='signup-vector' style={{
								display: "flex",
								alignItems: "center",
								justifyContent: "center",
								padding: "2px",
								fontSize: "1.2rem",
								borderRadius: "50%",
								width: "30px",
								cursor: "pointer",
							}}>
                <a href="tel:+91-9873287387"><IoIosCall color='#000'/></a>
							</div>
    </div>
    </>
  );
};

export default Contact;
