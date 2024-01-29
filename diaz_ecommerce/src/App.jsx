
import React from 'react';
import './App.css';
import CartWidget from './Componentes/Cartwidget/cartwidget';
import Titulo from './Componentes/Titulo/titulo';
import Navbar from './Componentes/NavBar/navbar';

function App() {
  return (
    <>
      <Navbar />
      <Titulo titulo="Optica" subTitulo="Encuentra lo que deseas" />
      {/* Otros componentes */}
      <div className="item item1">Elegir Anteojos</div>
      <div className="item item2">Consultas</div>
     
      <CartWidget />
    </>
  );
}

export default App;



