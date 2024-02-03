
// import { useEffect } from "react";
// import { createContext, useState } from "react";
// import { useLocation } from "react-router-dom";

// export const Context = createContext();

// const AppContext = ({ children }) => {
//     const [categories, setCategories] = useState();
//     const [products, setProducts] = useState();
//     const [showCart, setShowCart] = useState(false);
//     const [cartItems, setCartItems] = useState([]);
//     const [cartCount, setCartCount] = useState(() => {
//         const storedCount = localStorage.getItem("cartCount");
//         return storedCount ? parseInt(storedCount, 10) : 0;
//     });
    
//     const [cartSubTotal, setCartSubTotal] = useState(0);
//     const location = useLocation();

//     useEffect(() => {
//         window.scrollTo(0, 0);
//     }, [location]);

//     useEffect(() => {
//         let count = 0;
//         cartItems.forEach((item) => (count += item.attributes.quantity));
//         setCartCount(count);
//         localStorage.setItem("cartCount", count.toString());

//         let subTotal = 0;
//         cartItems.forEach(
//             (item) =>
//                 (subTotal += item?.attributes?.price * item?.attributes?.quantity)
//         );
//         setCartSubTotal(subTotal);
//     }, [cartItems]);

//     const handleAddToCart = (product, quantity) => {
//         let items = [...cartItems];
//         let index = items.findIndex((p) => p.id === product.id);
//         if (index !== -1) {
//             items[index].attributes.quantity += quantity;
//         } else {
//             product.attributes.quantity = quantity;
//             items = [...items, product];
//         }
//         setCartItems(items);
//     };

//     const handleRemoveFromCart = (product) => {
//         let items = [...cartItems];
//         items = items.filter((p) => p.id !== product.id);
//         setCartItems(items);
//     };

//     const handleCartProductQuantity = (type, product) => {
//         let items = [...cartItems];
//         let index = items.findIndex((p) => p.id === product.id);
//         if (type === "inc") {
//             items[index].attributes.quantity += 1;
//         } else if (type === "dec") {
//             if (items[index].attributes.quantity === 1) return;
//             items[index].attributes.quantity -= 1;
//         }
//         setCartItems(items);
//     };

//     return (
//         <Context.Provider
//             value={{
//                 products,
//                 setProducts,
//                 categories,
//                 setCategories,
//                 cartItems,
//                 setCartItems,
//                 handleAddToCart,
//                 cartCount,
//                 handleRemoveFromCart,
//                 showCart,
//                 setShowCart,
//                 handleCartProductQuantity,
//                 cartSubTotal,
//             }}
//         >
//             {children}
//         </Context.Provider>
//     );
// };

// export default AppContext;

// Import necessary modules
import { useEffect } from "react";
import { createContext, useState } from "react";
import { useLocation } from "react-router-dom";

// Create a context
export const Context = createContext();

// Create the AppContext component
const AppContext = ({ children }) => {
    const [categories, setCategories] = useState();
    const [products, setProducts] = useState();
    const [showCart, setShowCart] = useState(false);

    // Load cartItems from local storage or set to an empty array
    const [cartItems, setCartItems] = useState(() => {
        const storedCart = localStorage.getItem("cartItems");
        return storedCart ? JSON.parse(storedCart) : [];
    });

    // Use local storage to persist cartCount
    const [cartCount, setCartCount] = useState(() => {
        const storedCount = localStorage.getItem("cartCount");
        return storedCount ? parseInt(storedCount, 10) : 0;
    });

    const [cartSubTotal, setCartSubTotal] = useState(0);
    const location = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [location]);

    // Update cartCount and cartItems whenever cartItems change
    useEffect(() => {
        let count = 0;
        cartItems.forEach((item) => (count += item.attributes.quantity));
        setCartCount(count);
        localStorage.setItem("cartCount", count.toString());

        let subTotal = 0;
        cartItems.forEach(
            (item) =>
                (subTotal += item?.attributes?.price * item?.attributes?.quantity)
        );
        setCartSubTotal(subTotal);

        // Save cartItems to local storage
        localStorage.setItem("cartItems", JSON.stringify(cartItems));
    }, [cartItems]);

    const handleAddToCart = (product, quantity) => {
        let items = [...cartItems];
        let index = items.findIndex((p) => p.id === product.id);
        if (index !== -1) {
            items[index].attributes.quantity += quantity;
        } else {
            product.attributes.quantity = quantity;
            items = [...items, product];
        }
        setCartItems(items);
    };

    const handleRemoveFromCart = (product) => {
        let items = [...cartItems];
        items = items.filter((p) => p.id !== product.id);
        setCartItems(items);
    };

    const handleCartProductQuantity = (type, product) => {
        let items = [...cartItems];
        let index = items.findIndex((p) => p.id === product.id);
        if (type === "inc") {
            items[index].attributes.quantity += 1;
        } else if (type === "dec") {
            if (items[index].attributes.quantity === 1) return;
            items[index].attributes.quantity -= 1;
        }
        setCartItems(items);
    };

    return (
        <Context.Provider
            value={{
                products,
                setProducts,
                categories,
                setCategories,
                cartItems,
                setCartItems,
                handleAddToCart,
                cartCount,
                handleRemoveFromCart,
                showCart,
                setShowCart,
                handleCartProductQuantity,
                cartSubTotal,
            }}
        >
            {children}
        </Context.Provider>
    );
};

export default AppContext;
