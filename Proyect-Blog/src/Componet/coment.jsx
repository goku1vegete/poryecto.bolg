import React, { useState } from 'react';

const Comentario = ({ autor, texto, onEliminar }) => {
  return (
    <div className="comentario">
      <p><strong>{autor}</strong>: {texto}</p>
      <button onClick={onEliminar}>Eliminar</button>
    </div>
  );
};

export default Comentario;
