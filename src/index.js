import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Compoent/Home';
import About from './Compoent/About';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
      <Routes>
        <Route path="/" element={<App/>} />
        <Route path='/home' element={<Home/>} />
        <Route path='/about' element={<About/>} />
      </Routes>
  </BrowserRouter>
);


