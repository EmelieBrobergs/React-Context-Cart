import { createContext, FC, useState } from "react";
import { ProductData, products } from "../data";

//***************************************
interface CartItem {
    product: ProductData;
    amount: number;
}

//***************************************

interface ContextValue {
    // productsInCart: number[];
    cartItems: CartItem[];
    addToCart: (product: ProductData) => void;
    removeFromCart: (product: ProductData) => void;
    // incrementNumber: (product: ProductData) => void;
    // decreasementNumber: (product: ProductData) => void;
    // discardCart: () => void;
}

export const CartContext = createContext<ContextValue>({
    cartItems: [],
    addToCart: () => {},
    removeFromCart: () => {}
});

const CartProvider: FC = (props) => {
    const [cartItems, setCartItems] = useState<CartItem[]>([{
        //Fake data för utv
        product: products[2],
        amount: 25,
    }, {
        product: products[1],
        amount: 4,
    }]);

    // Check if product exist in cart, else it will be added
    const addToCart = (product: ProductData) => {
        if (cartItems.some(cartItem => cartItem.product.id === product.id)) {
            //Anropa öka antal
        } else {
            const cartItem: CartItem = { product, amount: 1 };
            setCartItems([...cartItems, cartItem]);
        }
    }

    // Delete all products with same id, (think: trash can icon for one product in cart)
    const removeFromCart = (product: ProductData) => {
        const updatedProductsList = cartItems.filter(cartItem => cartItem.product.id !== product.id);
        setCartItems(updatedProductsList);
    }

    // // Increace parameter amount by 1
    // const incrementNumber = (id: number) => {
    //     // TODO: Öka antal

    // }

    // // Check if 1 or less call function: removeFromCart, else decrease by 1
    // const decreasementNumber = (id: number) => {
    //     // TODO: Minska antal, om mindre/lika med 1 anropa removeFromCart

    // }

    // // Discard all products from Cart
    // const discardCart = () => {
    //     // TODO: Ta bort alla varor från kundvagnen oavsett antal
            // setCartItems([]);
    // }

    return (
        <CartContext.Provider value={{
            cartItems: cartItems,
            addToCart,
            removeFromCart
            // incrementNumber,
            // decreasementNumber,
            // discardCart
        }}>
            {props.children}
        </CartContext.Provider>
    )
}

export default CartProvider;