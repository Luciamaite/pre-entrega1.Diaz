import React from 'react';

const ItemListContainer = () => {
  const lentesProducts = [
    { id: 1, name: 'Anteojos de sol clásicos', price: '$20000' },
    { id: 2, name: 'Anteojos deportivos', price: '$15000' },
    { id: 3, name: 'Anteojos de lectura', price: '$15000' },

  ];

  return (
    <div>
      <h2>Lista de Anteojos</h2>
      <ul>
        {lentesProducts.map(product => (
          <li key={product.id}>
            <strong>{product.name}</strong> - {product.price}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ItemListContainer;
