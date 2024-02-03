import React from 'react'
import { useNavigate } from 'react-router-dom';
import { useRef } from 'react';
import "./Login.scss"

const Login = ({closeModal}) => {
  const navigate = useNavigate();
  const nameInputRef = useRef();
	const emailInputRef = useRef();
	const phoneInputRef = useRef();
	const resumeInputRef = useRef();
	const descriptionInputRef = useRef();
 
  const handleClick = async (e) =>{
    e.preventDefault();
    const name = nameInputRef.current.value;
		const email = emailInputRef.current.value;
		const phoneNumber = phoneInputRef.current.value;
		const description = descriptionInputRef.current.value;
        body = JSON.stringify({data:
      {name, email, phoneNumber , resume:resumeInputRef.current.value  , description}
  });
    const response = await fetch(`${import.meta.env.VITE_STRAPI_SERVER_URL}${url}`, {
			method: "POST",
			headers: { "Content-type": "application/json" },
			body,
  });
  const ans = await response.json();
  console.log(ans);
    navigate("/");
  }
  return (
    <div className="form-section-syllabus">
                <div className="container">
                    <div className="top" style={{ display: "flex", width: "100%"}}>
                        <div className="form-head">
                            <h3>
                            Start your journey now  
                            </h3>
                            <p>
                            Enter your details to move forward{" "}
                            </p>
                        </div>
                        <svg
                        onClick={closeModal}
                            xmlns="http://www.w3.org/2000/svg"
                            width="50"
                            height="50"
                            viewBox="0 0 37 37"
                            fill="none"
                            style={{ cursor: "pointer" }}
                        >
                            <g mask="url(#mask0_600_1947)"></g>
                            <path d="M11.6484 11.6479L24.5907 24.5902" stroke="#9844C5" />
                            <path d="M24.5898 11.6479L11.6476 24.5902" stroke="#9844C5" />
                        </svg>
                    </div>
                    <form onSubmit={handleClick} className="form">
                    <div className="input">
            <label htmlFor="name">Your name*</label>
            <input type="name" id="Your name*" ref={nameInputRef}/>
        </div>
        <div className="input">
            <label htmlFor="name">Your email*</label>
            <input type="email" id="Your email*" ref={emailInputRef}/>
        </div>
        <div className="input">
            <label htmlFor="name">Enter your number*</label>
            <input type="number" id="Your name*" ref={phoneInputRef}/>
        </div>
        <div className="input">
            <label htmlFor="name">{"Provide a document link to your requirements*"}</label>
            <input type="text" id="Your name*" ref={resumeInputRef}/>
        </div>
        <div className="input">
            <label htmlFor="name">Mention your Profile here!</label>
            <textarea id="Your name*" rows={3} ref={descriptionInputRef}></textarea>
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
											fontSize: "clamp(0.5rem , 1vw , 1rem)",
											fontWeight: "700",
										}}
									>
										Submit
									</button>
								</div>
                        </form>
                </div>
            </div>
  )
}

export default Login