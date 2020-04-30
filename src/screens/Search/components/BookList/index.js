import React from 'react';

import BookCard from '../BookCard';

import { BookList, Info } from './styles';

export default function({ loading, books, loadMore }) {
  if (loading)
    return <Info>Carregando...</Info>

  if (!books || books.length == 0) 
    return <Info>Não encontramos nada para mostrar :(</Info>

  return <BookList 
    data={books}
    renderItem={renderBook}
    keyExtractor={() => String(Date.now() * Math.random())}
    onEndReached={loadMore}
    />
}

const renderBook = ({ item: book }) => <BookCard {...book} />