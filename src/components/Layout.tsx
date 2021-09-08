import { CSSProperties } from "react";
import { products } from "../data";
import CartLayout from './CartLayout';

const Layout = () => {

    return (
        <div style={rootStyle}>
            {/* Gör på Home Page */}
            {/* {products.map(product => <ProductCard product={product}> )} */}

            {/* Göra i Menu och på Checkout Page */}
            <CartLayout />
        </div>
    )
}

const rootStyle: CSSProperties = {
    display: 'flex',
    flexDirection: 'column',
}

export default Layout;

//Layout ansvarar för mappningen, vilka produkter som ska visas
// "produkten" hur den renderas och ser ut lägger vi i Cart


// onClick={() => setAddToCart([...addToCart, product.id])} 
// tom () för att vi bryr oss bara om ATT vi klicka, inte ngt annat med det eventet
// Först spreadar vi ut befintlig array + sen lägger till det nya id