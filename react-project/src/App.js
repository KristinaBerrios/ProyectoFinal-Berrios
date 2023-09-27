import React, { useState } from 'react';
import { BrowserRouter as Router, Switch, Route, BrowserRouter, Routes } from 'react-router-dom';
import './App.css';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';
import { CSSTransition } from 'react-transition-group';

function App() {
  const [showMessage, setShowMessage] = useState(false);
  const [cartItems, setCartItems] = useState([]); // Estado para los elementos en el carrito

  const addToCart = (product) => {
    setCartItems([...cartItems, product]);
    setShowMessage(true); // Muestra el mensaje de éxito al agregar al carrito
  };

  return (
    <BrowserRouter>
      <div className="App">
        <NavBar cartItems={cartItems} /> {/* Pasa el estado del carrito al NavBar */}
        <CSSTransition
          in={showMessage}
          timeout={300}
          classNames="message"
          unmountOnExit
        >
          <div className="success-message">¡Producto agregado al carrito!</div>
        </CSSTransition>
        <Routes>
          {/* Pasa la función addToCart como prop al ItemListContainer */}
          <Route path="/">
            <ItemListContainer addToCart={addToCart} />
          </Route>
          <Route path="/category/:id" component={ItemListContainer} />
          <Route path="/item/:id" component={ItemDetailContainer} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
