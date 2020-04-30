import React, { useState, useEffect } from 'react';
import api from '../../services/api';
import debounceValue from '../../hooks/debounce';

import TitleBar from '../../components/TitleBar';

import BookList from './components/BookList';
import QueryInfo from './components/QueryInfo';

import { StyledSafeAreaView, ContainerView, HeaderView, SearchInput } from './styles';

export default function() {
  const [ books, setBooks ] = useState([]);
  const [ loading, setLoading ] = useState(false);
  const [ size, setSize ] = useState(0);
  const [ query, setQuery ] = useState("");
  const [ page, setPage ] = useState(1);

  const debouncedQuery = debounceValue(query, 500);

  useEffect(() => {
    setLoading(true);
    if (debouncedQuery) {
      loadBooks(debouncedQuery, 1);
    } else {
      setBooks([]);
      setSize(0);
      setLoading(false);
    }
  }, [debouncedQuery]);
  
  const loadBooks = async (query, page) => {
    const response = await api.get('books', {
      params: {
        query,
        page
      }
    });

    const booksResponse = response.data.items || [];

    setBooks(page == 1 ? booksResponse : [...books, ...booksResponse]);
    setSize(page == 1 ? Math.ceil(Math.random() * 1000) : size);
    setPage(page + 1);
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
          loadMore={() => loadBooks(debouncedQuery, page)}
          />
      </ContainerView>
    </StyledSafeAreaView>
  );
}
