import { useState } from 'react';
import './App.css';
import Header from './header.jsx';
import Footer from './footer.jsx';

function App() {
  return (
    <>
      <img src="/logo.png" alt="Mind Game Logo" className="page-logo" />
      <div className="app-container">
        <Header />
      </div>
      <Footer />
    </>
  );
}

export default App;
