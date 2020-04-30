import React, { useState, useEffect } from 'react';
import api from '../../services/api';

import debounceValue from '../../hooks/debounce';
import TitleBar from '../../components/TitleBar';

import QueryInfo from './components/QueryInfo';

import { Content, Header, Search, Container } from './styles';
import BookList from './components/BookList';

export default function() {
  const [ books, setBooks ] = useState([]);
  const [ loading, setLoading ] = useState(false);
  const [ size, setSize ] = useState(0);
  const [ query, setQuery ] = useState("");
  const [ page, setPage ] = useState(1);

  const debouncedQuery = debounceValue(query, 500);

  useEffect(() => {
    setLoading(true);
    setPage(1);
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

    let booksResponse = response.data.items || [];
    const sizeResponse = response.data.totalItems;

    setBooks(page == 1 ? booksResponse : [...books, ...booksResponse]);
    setSize(page == 1 ? sizeResponse : size);
    setPage(page + 1);
    setLoading(false);
  }

  return (
    <Container forceInset={{ top: 'always' }}>
      <Content>
        <Header>
          <TitleBar>Book Search</TitleBar>

          <Search 
            onChangeText={query => setQuery(query)} 
            placeholder="Comece digirando aqui"
            />

          <QueryInfo loading={loading} size={size} />
        </Header>
        
        <BookList loading={loading} books={books} loadMore={() => loadBooks(debouncedQuery, page)} />
      </Content>
    </Container>
  );
}
