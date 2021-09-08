import { createContext, FC, useState } from "react";
// import { ProductData } from "../data";

//***************************************
// interface ProductInCart {
//     productId: number;
//     amount: number;
// }

//***************************************

interface ContextValue {
    productsInCart: number[];
    addToCart: (id: number) => void;
    removeFromCart: (id: number) => void;
    // incrementNumber: (id: number) => void;
    // decreasementNumber: (id: number) => void;
}

export const CartContext = createContext<ContextValue>({
    productsInCart: [],
    addToCart: () => {},
    removeFromCart: () => {}
});

const CartProvider: FC = (props) => {
    const [productsInCart, setproductsInCart] = useState<number[]>([]);

    // Check if product exist in cart, else it will be added
    const addToCart = (id: number) => {
        if (productsInCart.includes(id)) {
            //Anropa öka antal
        } else {
            setproductsInCart([...productsInCart, id]);
        }
    }

    // delete all products with same id, (trash can icon for one product in cart)
    const removeFromCart = (id: number) => {
        // Tar bort alla produkter med id fr array, dvs paperskorg-knappen
        const updatedProductsList = productsInCart.filter(productId => productId !== id);
        setproductsInCart(updatedProductsList);
    }

    // // Increace parameter amount by 1
    // const incrementNumber = (id: number) => {
    //     // TODO: Öka antal

    // }

    // // Check if 1 or less call function: removeFromCart, else decrease by 1
    // const decreasementNumber = (id: number) => {
    //     // TODO: Minska antal, om mindre/lika med 1 anropa removeFromCart

    // }

    return (
        <CartContext.Provider value={{
            productsInCart,
            addToCart,
            removeFromCart
            // incrementNumber,
            // decreasementNumber
        }}>
            {props.children}
        </CartContext.Provider>
    )
}

export default CartProvider;