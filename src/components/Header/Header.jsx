import React, { useEffect, useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { TbSearch } from "react-icons/tb";
import { CgShoppingCart } from "react-icons/cg";
import "./Header.scss";
import Search from "./Search/Search";
import { Context } from "../../utils/context";
import Cart from "../Cart/Cart";
import Contact from "./Contact";

const Header = () => {
    const { cartCount, showCart, setShowCart } = useContext(Context);
    const [scrolled, setScrolled] = useState(false);
    const [searchModal, setSearchModal] = useState(false);
    // const [showModal, setShowModal] = useState(true);
    const navigate = useNavigate();
    const handleScroll = () => {
        const offset = window.scrollY;
        if (offset > 200) {
            setScrolled(true);
        } else {
            setScrolled(false);
        }
    };
    
    //   const closeDownloadSyllabusModal = () => {
    //     setShowModal(false);
    //   };

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
    }, []);


    return (
        <>
            <div
                className={`main-header ${scrolled ? "sticky-header" : ""}`}
            >
                <div className="header-content">
                    <ul className="left">
                        <li onClick={() => navigate("/")}>Home</li>
                        <li onClick={() => navigate("/about")}>About</li>
                        <li>Categories</li>
                    </ul>
                    <div className="center" onClick={() => navigate("/")}>
                        LilaanHandicraft
                    </div>
                    <div className="right">
                        <TbSearch onClick={() => setSearchModal(true)} />
                        {/* <AiOutlineHeart /> */}
                        <Contact flag={"head"}/>
                        {/* {showModal && (
                    <Modal closeModal={closeDownloadSyllabusModal} />
                  )} */}
                        <span
                            className="cart-icon"
                            onClick={() => setShowCart(true)}
                        >
                            <CgShoppingCart />
                            {!!cartCount && <span>{cartCount}</span>}
                        </span>
                    </div>
                </div>
            </div>
            {searchModal && <Search setSearchModal={setSearchModal} />}
            {showCart && <Cart />}
        </>
    );
};

export default Header;
