import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import { CSSTransition } from 'react-transition-group';
import { initializeApp } from 'firebase/app';
import firebaseConfig from './firebaseConfig'; // Asegúrate de que la ruta sea correcta
import { CartProvider } from './CartContext';

// Inicializa Firebase con la configuración de firebaseConfig
const app = initializeApp(firebaseConfig);

function App() {
  const [showMessage, setShowMessage] = useState(false);
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (product) => {
    setCartItems([...cartItems, product]);
    setShowMessage(true);
  };

  return (
    <Router>
      <div className="App">
        <NavBar cartItems={cartItems} />
        <CSSTransition
          in={showMessage}
          timeout={300}
          classNames="message"
          unmountOnExit
        >
          <div className="success-message">¡Producto agregado al carrito!</div>
        </CSSTransition>
        <CartProvider>
          <Routes>
            <Route path="/" element={<ItemListContainer addToCart={addToCart} />} />
            <Route path="/category/:id" element={<ItemListContainer />} />
            <Route path="/item/:id" element={<ItemDetailContainer />} />
          </Routes>
        </CartProvider>
      </div>
    </Router>
  );
}

export default App;
