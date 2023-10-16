
/*import './Componentes/Home/home'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  const categories = ['Home', 'Formulario'];

  const handleCategoryClick = (categoryName) => {
    // Maneja el clic en una categoría, puedes redirigir a una página específica, etc.
    alert(`Has seleccionado: ${categoryName}`);
  };

  return (
    <div className="container">
      <Page categories={categories} onCategoryClick={handleCategoryClick} />
    </div>
  );
}

export default App*/
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



