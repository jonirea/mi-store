import React from 'react';
import Navbar from "./componentes/Navbar/Navbar";
import './App.css';
import ItemListContainer from './componentes/ItemListContainer/ItemListContainer'
import ItemCount from './componentes/ItemCount/ItemCount';
import CelusContainer from './componentes/ItemListContainer/ItemDetailCointainer'
import CelusDetail from './componentes/ItemListContainer/ItemDetail'
import CelContainer from './componentes/ItemListContainer/ItemListContainer'
 

function App() {
  return (
    <div className="App">
      <Navbar />
      {/* <ItemListContainer /> */}
      <ItemCount
      valorInicial={1}
      minimo={1}
      maximo = {5}
      onAdd={cantidad => alert(`Agregados al carrito: ${cantidad}`)}
      
    />
    <CelusContainer />
    <CelusDetail />
    <CelContainer />
    </div>
  );
}



export default App;
