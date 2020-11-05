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
      res(['Xiaomi mi 10']);
    }, 2000);
  });
}

function CelusContainer() {
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
      <h3>Celulares</h3>
      <CelusContainer />
    </>
  );
} 