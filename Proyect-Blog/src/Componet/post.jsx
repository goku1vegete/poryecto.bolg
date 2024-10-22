import React, { useState } from 'react';
import Comentario from './Comentario';
import LikeButton from './LikeButton';

const Post = ({ titulo, contenido, autor }) => {
  const [comentarios, setComentarios] = useState([]);
  const [nuevoComentario, setNuevoComentario] = useState('');

  const agregarComentario = () => {
    setComentarios([...comentarios, { texto: nuevoComentario, autor: 'Usuario' }]);
    setNuevoComentario('');
  };

  const eliminarComentario = (index) => {
    const nuevosComentarios = comentarios.filter((_, i) => i !== index);
    setComentarios(nuevosComentarios);
  };

  return (
    <div className="post">
      <h2>{titulo}</h2>
      <p>{contenido}</p>
      <p><small>Autor: {autor}</small></p>

      <LikeButton />

      <div className="comentarios">
        <h3>Comentarios</h3>
        {comentarios.map((comentario, index) => (
          <Comentario
            key={index}
            autor={comentario.autor}
            texto={comentario.texto}
            onEliminar={() => eliminarComentario(index)}
          />
        ))}
      </div>

      <div className="nuevo-comentario">
        <input 
          type="text" 
          placeholder="Escribe un comentario..." 
          value={nuevoComentario} 
          onChange={(e) => setNuevoComentario(e.target.value)} 
        />
        <button onClick={agregarComentario}>Comentar</button>
      </div>
    </div>
  );
};

export default Post;
