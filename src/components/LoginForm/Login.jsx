import React , {useState} from 'react'
import { useNavigate } from 'react-router-dom';
import { useRef } from 'react';
import "./Login.scss"

const Login = ({showModal, setShowModal}) => {
  const navigate = useNavigate();
  const nameInputRef = useRef();
	const emailInputRef = useRef();
	const phoneInputRef = useRef();
	const passwordInputRef = useRef();
 
  const handleClick = async(e) =>{
    e.preventDefault();
    const username = nameInputRef.current.value;
		const email = emailInputRef.current.value;
		const mobile = phoneInputRef.current.value;
		const password = passwordInputRef.current.value;
        let body = JSON.stringify({data:
      {username, mobile, email , password}
  });
    const response = await fetch(`${import.meta.env.VITE_STRAPI_SERVER_URL}/api/logins`, {
			method: "POST",
			headers: { "Content-type": "application/json" },
			body,
  });
  const ans = await response.json();
  console.log(ans);
    // navigate('/');
    setShowModal(false);
  }
  return (
    showModal && (
      <div className="form-section-syllabus" id='form-modal'>
                <div className="container" style={{display:"flex" , flexDirection:"column", justifyContent:"space-evenly" , width:"100%", height:"100%"}}>
                    <div className="top" style={{ display: "flex", width: "100%"}}>
                        <div className="form-head">
                            <h3>
                            Contact us  
                            </h3>
                            <p>
                            Enter your details to move forward{" "}
                            </p>
                        </div>
                        <svg
                        onClick={handleClick}
                            xmlns="http://www.w3.org/2000/svg"
                            width="50"
                            height="50"
                            viewBox="0 0 37 37"
                            fill="none"
                            style={{ cursor: "pointer" }}
                        >
                            <g mask="url(#mask0_600_1947)"></g>
                            <path d="M11.6484 11.6479L24.5907 24.5902" stroke="#806441" />
                            <path d="M24.5898 11.6479L11.6476 24.5902" stroke="#806441" />
                        </svg>
                    </div>
                    <form onSubmit={handleClick} className="form">
                    <div className="input">
            <label htmlFor="name">Your name*</label>
            <input type="text" id="name" ref={nameInputRef}/>
        </div>
        <div className="input">
            <label htmlFor="email">Your email*</label>
            <input type="email" id="email" ref={emailInputRef}/>
        </div>
        <div className="input">
            <label htmlFor="mobile">Enter your number*</label>
            <input type="tel" id="mobile" pattern="[+][1-9]{2} [0-9]{10}" ref={phoneInputRef}/>
        </div>
        <div className="input">
            <label htmlFor="pass">Create a Password*</label>
            <input type="password" id="pass" ref={passwordInputRef}/>
        </div>
								<div
									className="download-btn"
									style={{ width: "100%", display: "flex", justifyContent: "end" }}
								>
									<button
										type="submit"
										className="purple-btn"
										style={{
											border: "none",
											width: "100%",
											fontSize: "clamp(0.8rem , 1vw , 1rem)",
											fontWeight: "700",
                      color:"#fff"
										}}
									>
										Make a Call
									</button>
								</div>
                        </form>
                </div>
            </div>
    )
  );
}

export default Login