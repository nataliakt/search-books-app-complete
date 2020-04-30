import React from 'react';

import BookCard from '../BookCard';

import { StyledFlatList, InfoText } from './styles';

export default function({ loading, books, loadMore }) {
  if (loading)
    return <InfoText>Carregando...</InfoText>

  if (!books || books.length == 0) 
    return <InfoText>Não encontramos nada para mostrar :(</InfoText>

  return (
    <StyledFlatList 
      data={books}
      renderItem={renderBook}
      keyExtractor={() => String(Date.now() * Math.random())}
      onEndReached={loadMore}
      />
  );
}

const renderBook = ({ item: book }) => <BookCard {...book} />