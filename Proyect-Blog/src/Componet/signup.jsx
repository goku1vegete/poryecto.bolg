import React, { useState } from 'react';

const Signup = () => {
  const [nombre, setNombre] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Lógica para manejar el registro
    console.log(`Nombre: ${nombre}, Email: ${email}, Password: ${password}`);
  };

  return (
    <div className="signup-form">
      <h2>Regístrate</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Nombre:
          <input 
            type="text" 
            value={nombre} 
            onChange={(e) => setNombre(e.target.value)} 
            required 
          />
        </label>
        <label>
          Correo electrónico:
          <input 
            type="email" 
            value={email} 
            onChange={(e) => setEmail(e.target.value)} 
            required 
          />
        </label>
        <label>
          Contraseña:
          <input 
            type="password" 
            value={password} 
            onChange={(e) => setPassword(e.target.value)} 
            required 
          />
        </label>
        <button type="submit">Registrarse</button>
      </form>
    </div>
  );
};

export default Signup;
