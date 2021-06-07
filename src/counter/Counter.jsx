import React, { useState } from 'react';

const Counter = () => {

    let [contador, setContador] = useState(0);
    let [show, setShow] = useState(true);
    const onClickCallback = () => setShow(!show);

    return (
        <>
            <p>Esse botão foi clicado { contador } vezes.</p>
            <button onClick={() => setContador(++contador) }>Acrescentar 1</button>
            <p style={ show ? {color:'red'} : {color:'blue'} }>Valor atual show</p>
            <p style={{color:'orange'}}>Valor orange</p>
            <button onClick={ onClickCallback }>Hide/Show</button>
        </>
    );
}

export default Counter;