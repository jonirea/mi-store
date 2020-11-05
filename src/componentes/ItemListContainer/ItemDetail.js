import { useEffect, useState } from 'react';
import React from 'react';


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
      res(["id:  1","titulo:  Xiaomi MI 10", "precio:  $100000"]);
    }, 2000);
  });
}

function CelusDetail() {
  const [list, setList] = useState([]);
  useEffect(() => {
    getCelus().then(celulares => {
       setList(celulares);
    });
  });

  return <CeluList celulares={list} />;
}

export default function App() {
  return (
    <>
      <h3>Detalles</h3>
      <CelusDetail />
    </>
  );
} 
