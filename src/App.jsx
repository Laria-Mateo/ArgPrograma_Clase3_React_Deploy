// App.jsx
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/header/Header.jsx';
import DivProducto from './components/divProducto/DivProducto.jsx';
import Footer from './components/footer/Footer.jsx';

function App() {
  return (
    <>
    
      <Header/>
      <DivProducto/>
      <Footer/>
    </>
  );
}

export default App;
