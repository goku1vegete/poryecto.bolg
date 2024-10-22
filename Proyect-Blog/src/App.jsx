import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import LoginPage from './components/LoginPage';
import Post from './components/Post';

const App = () => {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/post" element={<Post 
            titulo="Mi primer artículo" 
            contenido="Este es el contenido de mi primer artículo del blog." 
            autor="Juan Pérez" 
          />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;



