import React from 'react';

import { QueryInfo } from './styles';

export default function({ loading, size }) {
  if (loading || size == 0)
    return null;

  return <QueryInfo>Foram encontrados { size } livro(s)</QueryInfo>
}