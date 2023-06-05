import './App.scss';
import { HomePage } from './pages/HomePage/HomePage';
import { Route, Routes } from 'react-router-dom';
import { SignUp } from './pages/SignUpPage/SignUp';
import React from 'react';
import { LogInPage } from './pages/LogInPage/LogIn';
import { ProfilePage } from './pages/ProfilePage/ProfilePage';


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage />}/>
        <Route path="/signUp" element={<SignUp />}/>
        <Route path="/login" element={<LogInPage />}/>
        <Route path="/profile" element={<ProfilePage />}/>


    </Routes>
    </div>
  );
}

export default App;