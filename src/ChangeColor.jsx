import { useState } from 'react';

const ChangeColor = () => {

    const [toggleColor, setToggleColor] = useState(true);

    return (
        <>
            <p style={ toggleColor ? {color:'red'} : {color:'blue'} }>Posso ser 'red' ou 'blue'</p>
            <button className="btn btn-primary" onClick={ () => setToggleColor(!toggleColor) }>Change color</button>
        </>
    );
}

export default ChangeColor;