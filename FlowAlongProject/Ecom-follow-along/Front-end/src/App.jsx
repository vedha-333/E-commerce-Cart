import React from 'react';
import {BrowserRouter , Routes , Route } from 'react-router-dom';
import { LoginPage } from './routes/Routes';
import { SignupPage } from './routes/Routes';
import { HomePage } from './routes/Routes';
import  "./App.css"

function App(){
  return (
    <BrowserRouter>
    <Routes>
      <Route path ="/" element={<HomePage />} />
    <Route path="/login" element={<LoginPage />} />
    <Route path="/signup" element={<SignupPage/>} />
    </Routes>
    </BrowserRouter>
  );
}

export default App;