import React from 'react';

import { Link } from 'react-router-dom';
import { Container } from './styles';

const Inside: React.FC = () => (
  <Container>
    <h1>Inside</h1>
    <Link to="/">Go inside</Link>
  </Container>
);

export default Inside;
