import { useRef } from "react";
import {
    FaFacebookF,
    FaTwitter,
    FaInstagram,
    FaLinkedinIn,
} from "react-icons/fa";
import "./Newsletter.scss";
const Newsletter = () => {
    const inputRef = useRef(null);
    
    const handleSubmit = async(e) => {
      e.preventDefault();
      const email = inputRef?.current?.value;
    
      try {
        console.log("Sending request...");
        
        const response = await fetch(`${import.meta.env.VITE_STRAPI_SERVER_URL}api/newsletters`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            data: {email},
          }),
        });
    
        console.log("Response:", response);
    
        if (response.ok) {
          console.log("Email added successfully");
        } else {
          console.error("Failed to add email");
        }
      } catch (error) {
        console.error("Error:", error);
      }
    }
    
    return (
        <div className="newsletter-section">
            <div className="newsletter-content">
                <span className="small-text">Newsletter</span>
                <span className="big-text">
                    Sign up for latest updates and offers
                </span>
                <form onSubmit={handleSubmit} className="form">
                    <input type="email" placeholder="Email Address" ref={inputRef}/>
                    <button type="submit">Subscribe</button>
                </form>
                <span className="text">
                    Will be used in accordance with our Privacy Policy
                </span>
                <span className="social-icons">
                    <a href="https://www.linkedin.com/lilaanhandicrafts_" className="icon" target="_blank">
                        <FaLinkedinIn size={14} />
                    </a>
                    <a href="https://www.facebook.com/lilaanhandicrafts_" className="icon" target="_blank">
                        <FaFacebookF size={14} />
                    </a>
                    <a href="https://www.twitter.com/lilaanhandicrafts_" className="icon" target="_blank">
                        <FaTwitter size={14} />
                    </a>
                    <a href="https://www.instagram.com/lilaanhandicrafts_" className="icon" target="_blank">
                        <FaInstagram size={14} />
                    </a>
                </span>
            </div>
        </div>
    );
};

export default Newsletter;
