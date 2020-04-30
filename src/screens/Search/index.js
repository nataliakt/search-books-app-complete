import React, { useState, useEffect } from 'react';
import api from '../../services/api';

import TitleBar from '../../components/TitleBar';

import BookList from './components/BookList';
import QueryInfo from './components/QueryInfo';

import { StyledSafeAreaView, ContainerView, HeaderView, SearchInput } from './styles';

export default function() {
  const [ books, setBooks ] = useState([]);
  const [ loading, setLoading ] = useState(false);
  const [ size, setSize ] = useState(0);
  const [ query, setQuery ] = useState("");

  useEffect(() => {
    setLoading(true);
    if (query) {
      loadBooks();
    } else {
      setBooks([]);
      setSize(0);
      setLoading(false);
    }
  }, [query]);
  
  const loadBooks = async () => {
    const response = await api.get('books', {
      params: {
        query
      }
    });

    const booksResponse = response.data.items || [];

    setBooks(booksResponse);
    setSize(Math.ceil(Math.random() * 1000));
    setLoading(false);
  }

  return (
    <StyledSafeAreaView forceInset={{ top: 'always' }}>
      <ContainerView>
        <HeaderView>
          <TitleBar>Book Search</TitleBar>

          <SearchInput 
            onChangeText={query => setQuery(query)} 
            placeholder="Comece digirando aqui"
            />

          <QueryInfo loading={loading} size={size} />
        </HeaderView>
        
        <BookList 
          loading={loading}
          books={books}
          />
      </ContainerView>
    </StyledSafeAreaView>
  );
}
