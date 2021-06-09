import axios from 'axios';
import { useState, useEffect } from 'react';
import Column from '../layout/Column';
import Row from '../layout/Row';
import Description from './Description';
import UserResult from './UserResult';

export default function Axios() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!loading) return;
    axios('https://randomuser.me/api')
      .then(response => setData(response.data))
      .catch(error => {
        console.error('Error fetching data: ', error);
        setError(error);
      })
      .finally(() => setLoading(false));
  }, [loading]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error!</p>;

  return (
    <div className="h-100 p-5 text-white bg-dark rounded">
      <Row>
        <Column size="md-6">
          <Description title="API REST - Axios" description="Exemplo de retorno da API 'randomuser' usando a biblioteca axios" btnType="light" handleClick={() => setLoading(true)} />
        </Column>
        <Column size="md-6">
          <UserResult user={data.results[0]} />
        </Column>
      </Row>
    </div>
  );
}