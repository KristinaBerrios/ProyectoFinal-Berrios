import firebase from 'firebase/app';
import 'firebase/auth';
// src/firebaseConfig.js
const firebaseConfig = {
  apiKey: "AIzaSyBx-Hs6FloJiiH3qhmC5tZFu9YLyk94PjQ",
  authDomain: "reacjs-3cb4c.firebaseapp.com",
  projectId: "reacjs-3cb4c",
  storageBucket: "reacjs-3cb4c.appspot.com",
  messagingSenderId: "318501350255",
  appId: "1:318501350255:web:8676505d1d3816346d969a",
  measurementId: "G-8SCT3Q9E1B"
};

// Inicializa Firebase
firebase.initializeApp(firebaseConfig);


import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import NavBar from './components/NavBar/NavBar'; // Ruta corregida
import ItemListContainer from './components/ItemListContainer/ItemListContainer'; // Ruta corregida
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import { CSSTransition } from 'react-transition-group';
import firebase from 'firebase/app';
import 'firebase/auth';
import { CartProvider } from './CartContext';

// Configura Firebase con la configuración de firebaseConfig
firebase.initializeApp(firebaseConfig);

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
