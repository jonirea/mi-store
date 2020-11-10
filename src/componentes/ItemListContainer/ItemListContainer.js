import React, { useState, useEffect } from "react";

function CeluList({ celulares }) {
  return (
    <ul>
      {celulares.map(p => (
        <li>{p}</li>
      ))}
      
    </ul>
    
  );
}

function getCelus() {
  return new Promise(res => {
    setTimeout(() => {
      res(['Xiaomi mi 10']);
    }, 2000);
  });
}
function getCelusD() {
    return new Promise(res => {
      setTimeout(() => {
        res(["id:  1","titulo:  Xiaomi MI 10", "precio:  $100000"]);
      }, 2000);
    });
}

function CelContainerD() {
    const [list, setList] = useState([]);
    useEffect(() => {
      getCelusD().then(celulares => {
        setList(celulares);
      });
    }, []);
  
    return <CeluList celulares={list} />;
}  

function CelContainer() {
  const [list, setList] = useState([]);
  useEffect(() => {
    getCelus().then(celulares => {
      setList(celulares);
    });
  }, []);

  return <CeluList celulares={list} />;
}

export default function App() {
  return (
    <>
      <h3>Celulares</h3>
      <CelContainer />
      <h3>Detalles</h3>
      <CelContainerD />
    </>
  );
}



