import { useContext } from "react";
import { CartContext } from "../contexts/CartContext";

const CartLayout = () => {

    const {cartItems, addToCart} = useContext(CartContext);

    console.log(cartItems);

    return (
        <div>
            {cartItems.map((cartItem) => (
                <div>
                    {cartItem.product.name}
                    {cartItem.amount}
                </div>
            ))}
             {/* <img 
                style={{opacity: productsInCart.includes(product.id) ? 1 : 0.5}}
                key={product.id} 
                src={product.url} 
                alt={product.name}
                // onClick={() => productsInCart.includes(product.id) ? addToCart(product.id) : removeFromCart(product.id)} 
                onClick={() => addToCart(product.id)} 
            /> */}
        </div>
    );
}

export default CartLayout;