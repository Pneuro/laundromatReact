import React from 'react';
import Header from './components/Header'
import Coin from './components/Coin'
import WashFold from './components/Washfold'
import Commercial from './components/Commercial'
import About from './components/About'
import Contact from './components/Contact'
import Promise from './components/Promise'
import Footer from './components/Footer'
import './App.css';





function App() {
  return (
    <div className="App">
      <Header  />
      <Promise />
      <Coin />
      <WashFold />
      <Commercial />
      <About />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
