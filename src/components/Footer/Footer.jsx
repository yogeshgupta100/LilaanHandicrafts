import React , {useState , useEffect} from "react";
import "./Footer.scss";
import { FaLocationArrow, FaMobileAlt, FaEnvelope } from "react-icons/fa";
import Payment from "../../assets/payments.png";
import { NavLink } from "react-router-dom";
const Footer = () => {
    const [categories , setCategories] = useState();
    const componentDidMount = () =>{
		window.scrollTo(0, 0);
	}
    useEffect(() => {
        getCategories();
    },[]);
    const getCategories = (async() => {
        const res = await fetch(`${import.meta.env.VITE_STRAPI_SERVER_URL}/api/categories?populate=*`);
            const data = await res.json();
            setCategories(data.data);  
            console.log(data.data); 
        });
    return (
        <div className="footer">
            <div className="footer-content">
                <div className="col">
                    <div className="title">About</div>
                    <div className="text">
                    Welcome to <strong>LILAANHANDICRAFT</strong> , where we specialize in creating
            beautiful handicrafts for your home. Our focus on mud, metal, and
            wood products means that we have a unique selection of home decor
            items that you won't find anywhere else.
                    </div>
                </div>
                <div className="col">
                    <div className="title">Contact</div>
                    <div className="c-item">
                        <FaLocationArrow />
                        <div className="text">
                            A-75 Rajapuri , Uttam Nagar , New Delhi - 110059                     </div>
                    </div>
                    <div className="c-item">
                        <FaMobileAlt />
                        <div className="text">Phone: +91 9311257358</div>
                    </div>
                    <div className="c-item">
                        <FaEnvelope />
                        <div className="text">Email: LilaanHandicraft@outlook.com</div>
                    </div>
                </div>
                <div className="col">
                    <div className="title">Categories</div>
                    {categories?.map((item) => {
                        return(
                            <span className="text" id={item.id}>{item?.attributes?.title}</span>
                        )
                    })}
                </div>
                <div className="col">
                    <div className="title">Pages</div>
                    <NavLink to="/" onClick={componentDidMount} style={{textDecoration:"none"}}><span className="text">Home</span></NavLink>
                    <NavLink to="/about" onClick={componentDidMount} style={{textDecoration:"none"}}><span className="text">About</span></NavLink>
                    <NavLink to="/tnc/privacy" onClick={componentDidMount} style={{textDecoration:"none"}}><span className="text">Privacy Policy</span></NavLink>
                    <NavLink to="/tnc/terms&conditions" onClick={componentDidMount} style={{textDecoration:"none"}}><span className="text">Terms & Conditions</span></NavLink>
                    <NavLink to="/contact" onClick={componentDidMount} style={{textDecoration:"none"}}><span className="text">Contact Us</span></NavLink>
                </div>
            </div>
            <div className="bottom-bar">
                <div className="bottom-bar-content">
                    <span className="text">
                        LilaanHandicraft 2022 CREATED BY JS DEV. PREMIUM E-COMMERCE
                        SOLUTIONS.
                    </span>
                    <img src={Payment} />
                </div>
            </div>
        </div>
    );
};

export default Footer;
