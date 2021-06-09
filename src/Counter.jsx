import { useState } from 'react';

const Counter = () => {

  const [contador, setContador] = useState(0);

  return (
    <div className="h-100 p-5 bg-light rounded">
      <h2>Contador</h2>
      <p>Esse botão foi clicado {contador} vezes.</p>
      <button className="btn btn-outline-secondary" onClick={() => setContador(contador + 1)}>Acrescentar 1</button>
    </div>
  );
}

export default Counter;