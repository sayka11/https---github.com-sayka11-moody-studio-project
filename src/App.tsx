import './App.scss';
import { HomePage } from './pages/HomePage/HomePage';
import { Route, Routes } from 'react-router-dom';
import { SignUp } from './pages/SignUpPage/SignUp';
import React from 'react';


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage />}/>
        <Route path="/edit" element={<SignUp />}/>
    </Routes>
    </div>
  );
}

export default App;
