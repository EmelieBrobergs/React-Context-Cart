import React from 'react';
import CartProvider from '../contexts/CartContext';
import Layout from './Layout';

function App() {
  return (
    <CartProvider>
      <Layout/>
    </CartProvider>
  );
}

export default App;
