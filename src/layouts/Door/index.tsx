import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';
import axios from 'axios';
import { Container } from './styles';

const Door: React.FC = () => {
  const [canGetInside, setCanGetInside] = useState(false);
  const handleGoingInside = async () => {
    const response = await axios.get('https://api.github.com/repos/Lucas-Fonte/the-door/contents/src/App.css?ref=master');
    const { data } = response;

    const buff = Buffer.from(data.content, 'base64');
    const jsonResponse = buff.toString('utf-8');

    console.log({ jsonResponse });
    // if (data.content) {
    //   setCanGetInside(true);
    // }
  };
  return (
    <Container>
      { canGetInside ? (
        <Redirect to={{
          pathname: 'door/inside',
          state: { canGetInside },
        }}
        />
      ) : null}
      <h1>Door</h1>
      <button type="button" onClick={() => handleGoingInside()}>Go inside</button>
    </Container>
  );
};

export default Door;
