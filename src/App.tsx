import React from 'react';
import { Routes, Route } from "react-router-dom";
import { Header } from './components/common/Header';
import { Footer } from './components/common/Footer';
import { Home } from './pages/Home';
function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="header" element={<Header/>} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
