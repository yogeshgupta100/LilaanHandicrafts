import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.scss";
import Header from "./components/header/Header.jsx";
import Footer from "./components/footer/Footer.jsx";
import Home from "./components/Home/Home.jsx";
import Category from "./components/Category/Category.jsx";
import SingleProduct from "./components/SingleProduct/SingleProduct.jsx";
import Newsletter from "./components/footer/Newsletter/Newsletter.jsx";
import AppContext from "./utils/context.jsx";
import About from "./components/About.jsx";

function App() {
    return (
        <BrowserRouter>
            <AppContext>
                <Header/>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/category/:id" element={<Category />} />
                    <Route path="/product/:id" element={<SingleProduct />} />
                </Routes>
                <Newsletter />
                <Footer />
            </AppContext>
        </BrowserRouter>
    );
}

export default App;
