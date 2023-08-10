import React from 'react';
import './App.css';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer'; // Importa el componente ItemListContainer

function App() {
  return (
    <div className="App">
      <NavBar />
      <ItemListContainer greeting="¡Bienvenido a nuestra tienda en línea!" /> {/* Agrega el componente ItemListContainer aquí */}
      {/* Resto del contenido de tu aplicación */}
    </div>
  );
}

export default App;



