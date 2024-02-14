import React, { useEffect, useContext } from "react";
import "./Home.scss";
import Banner from "./Banner/Banner";
import Category from "./Category/Category";
import Products from "../Products/Products";
import { Context } from "../../utils/context";

const Home = () => {
    const { products, setProducts, categories, setCategories } =
        useContext(Context);
    useEffect(() => {
        getProducts();
        getCategories();
    }, []);


    const getProducts = (async() => {
        const res = await fetch(`${import.meta.env.VITE_STRAPI_SERVER_URL}api/products?populate=*`);
			const data = await res.json();
			setProducts(data.data);
        });
    const getCategories = (async() => {
        const res = await fetch(`${import.meta.env.VITE_STRAPI_SERVER_URL}api/categories?populate=*`);
			const data = await res.json();
			setCategories(data.data);
        });

    return (
        <div>
            <Banner />
            <div className="main-content">
                <div className="layout">
                    <Category categories={categories} heading={"Shop by Categories"} />
                    <Products
                        headingText="Popular Products"
                        products={products}
                    />
                </div>
            </div>
        </div>
    );
};

export default Home;
