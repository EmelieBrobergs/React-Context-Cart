import { CSSProperties, useContext } from "react";
import { products } from "../data";
import { CartContext } from '../contexts/CartContext'

const Layout = () => {
    const {productsInCart, addToCart} = useContext(CartContext);

    console.log(productsInCart);

    return (
        <div style={rootStyle}>
            {products.map( product => (
                <img 
                    style={{opacity: productsInCart.includes(product.id) ? 1 : 0.5}}
                    key={product.id} 
                    src={product.url} 
                    alt={product.name}
                    // onClick={() => productsInCart.includes(product.id) ? addToCart(product.id) : removeFromCart(product.id)} 
                    onClick={() => addToCart(product.id)} 
                />
            ))}
        </div>
    )
}

const rootStyle: CSSProperties = {
    display: 'flex',
    flexDirection: 'column',
}

export default Layout;

// onClick={() => setAddToCart([...addToCart, product.id])} 
// tom () för att vi bryr oss bara om ATT vi klicka, inte ngt annat med det eventet
// Först spreadar vi ut befintlig array + sen lägger till det nya id