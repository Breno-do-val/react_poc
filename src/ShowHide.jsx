import { useState } from 'react';

const ShowHide = () => {

  const [show, setShow] = useState(true);

  return (
    <div className="h-100 p-5 text-white bg-dark rounded">
      <h2>Efeito display <small style={show ? { display: 'inline' } : { display: 'none' }}>(inline/none)</small></h2>
      <p>Exibindo/ocultando o texto small acima</p>
      <button className="btn btn-outline-light" onClick={() => setShow(!show)}>{show ? 'Hide' : 'Show'}</button>
    </div>
  );
}

export default ShowHide;