import React from 'react';
import Navbar from "./componentes/Navbar/Navbar";
import './App.css';
import ItemListContainer from './componentes/ItemListContainer/ItemListContainer'

function App() {
  return (
    <div className="App">
      <Navbar />
      <ItemListContainer />
    </div>
  );
}

export default App;
