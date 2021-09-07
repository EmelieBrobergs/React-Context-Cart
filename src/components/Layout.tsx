import { CSSProperties, useState } from "react";
import { products } from "../data";

function Layout() {
    //Vi vill spara en array av nummer och måste typa upp det för TS annars blir det "never" --> useState([])
    //Väldigt få tillfällen man vill använda never, kanske om man testar ens fil. Visa att man glömt ett case.
    const [addToCart, setAddToCart] = useState<number[]>([]);

    return (
        <div style={rootStyle}>
            {products.map( product => (
                <img 
                    style={{opacity: addToCart.includes(product.id) ? 1 : 0.5}}
                    key={product.id} 
                    src={product.url} 
                    alt={product.name}
                    onClick={() => setAddToCart([...addToCart, product.id])} 
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