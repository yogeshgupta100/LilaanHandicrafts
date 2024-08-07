import React, { useContext } from "react";
import { MdClose } from "react-icons/md";
import { BsCartX } from "react-icons/bs";
import { Context } from "../../utils/context";
import CartItem from "./CartItem/CartItem";
// import { loadStripe } from "@stripe/stripe-js";
// import { makePaymentRequest } from "../../utils/api";
import {ReactWhatsapp} from "react-whatsapp"

import "./Cart.scss";

const Cart = () => {
    const { cartItems, setShowCart, cartSubTotal } = useContext(Context);

    function sendWhatsAppMessage() {
        var phoneNumber = '9354045564';
        var message = encodeURIComponent('Hey there , I have some products in my cart and my total is ₹ '+ cartSubTotal);

    var whatsappLink = 'https://api.whatsapp.com/send?phone=' + phoneNumber + '&text=' + message;
        // var whatsappLink = 'https://api.whatsapp.com/send?phone=' + phoneNumber+'&text=Hey there , I have some products in my cart and my total is ' + cartSubTotal;

        window.open(whatsappLink);
    }

    return (
        <div className="cart-panel">
            <div
                className="opac-layer"
                onClick={() => setShowCart(false)}
            ></div>
            <div className="cart-content">
                <div className="cart-header">
                    <span className="heading">Shopping Cart</span>
                    <span
                        className="close-btn"
                        onClick={() => setShowCart(false)}
                    >
                        <MdClose className="close-btn" />
                        <span className="text">close</span>
                    </span>
                </div>

                {!cartItems?.length && (
                    <div className="empty-cart">
                        <BsCartX />
                        <span>No products in the cart.</span>
                        <button className="return-cta" onClick={() => {}}>
                            RETURN TO SHOP
                        </button>
                    </div>
                )}

                {!!cartItems?.length && (
                    <>
                        <CartItem />
                        <div className="cart-footer">
                            <div className="subtotal">
                                <span className="text">Subtotal:</span>
                                <span className="text total">
                                    &#8377;{cartSubTotal}
                                </span>
                            </div>
                            <div className="button" >
                                <button
                                    className="checkout-cta"
                                    onClick={sendWhatsAppMessage}
                                >
                                    <a href="https://api.whatsapp.com/send?phone=9354045564" target='_blank' style={{textDecoration:"none" , color:"#000"}}>Contact Us on WhatsApp</a>
                                </button>
                            </div>
                        </div>
                    </>
                )}
            </div>
        </div>
    );
};

export default Cart;
