import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Start from './Start';
import User from './User';
import Roughpage from './Roughpage';
import Figma from './figma';

function App() {
  return  (
    <BrowserRouter>
    <Routes>
      <Route path="/" element= {<Start/>}  />
      <Route path="/user" element= {<User/>}  />
      <Route path= "/rough" element={<Roughpage/>} />
      <Route path= "/figma" element={<Figma/>} />
    </Routes>
    </BrowserRouter>
    
  );
}

export default App;
