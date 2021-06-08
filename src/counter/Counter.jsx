import React, { useState } from 'react';

const Counter = () => {

    const [contador, setContador] = useState(0);
    const [show, setShow] = useState(true);
    const [toggleColor, setToggleColor] = useState(true);

    return (
        <>
            <p>Esse botão foi clicado { contador } vezes.</p>
            <button onClick={() => setContador(contador + 1) }>Acrescentar 1</button>
            <p style={ toggleColor ? {color:'red'} : {color:'blue'} }>Valor atual show</p>
            <button onClick={ () => setToggleColor(!toggleColor) }>Change color</button>
            <p style={{color:'orange'}}>Valor orange</p>
            <p style={ show ? {display:'block'} : {display:'none'} }>Exibindo quando show = true</p>
            <button onClick={ () => setShow(!show) }>Hide/Show</button>
        </>
    );
}

export default Counter;