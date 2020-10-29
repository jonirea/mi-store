import React, { useState } from "react";


function ItemCount({ valorInicial, minimo, maximo, onAdd }) {
    const [contador, setContador] = useState(valorInicial);
  
    const aumentarContador = () => setContador(contador + 1);
  
    const reducirContador = () => setContador(contador - 1);
    
  
    return (
        <>
            <button onClick={reducirContador} disabled={contador < minimo}>
               -
            </button>
            {`  ${contador}  `}
            <button onClick={aumentarContador} disabled={contador >= maximo}>
               +
            </button>
            <br />
            <button
               onClick={() => onAdd(contador)}
               disabled={contador > maximo || contador < minimo}
            >
                Agregar
            </button>
            <br />
        </>
    );
}

  
export default ItemCount;