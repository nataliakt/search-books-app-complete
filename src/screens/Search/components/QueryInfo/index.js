import React from 'react';

import { InfoText } from './styles';

export default function({ loading, size }) {
  if (loading || size == 0)
    return null;

  return <InfoText>Foram encontrados { size } livro(s)</InfoText>
}