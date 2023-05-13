import React from 'react';
import './App.scss';
import { Footer } from './Footer';
import { Header } from './Header';
import { HomePage } from './pages/HomePage/HomePage';

function App() {
  return (
    <>
      <Header />
      <HomePage />
      <Footer />
    </>
  );
}

export default App;
