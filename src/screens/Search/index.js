import React, { useState, useEffect } from 'react';
import api from '../../services/api';

import { View, Text, TextInput, SafeAreaView, FlatList, TouchableOpacity, Image, Linking } from 'react-native';

import styles from './styles';
import debounceValue from '../../hooks/debounce';

const renderBooks = (books, pagination) => {
  if (!books || books.length == 0) 
    return <Text style={styles.empty}>Não encontramos nada para mostrar :(</Text>

  return <FlatList 
    style={styles.list}
    data={books}
    renderItem={renderBook}
    keyExtractor={book => book.id}
    onEndReached={pagination}
    onEndReachedThreshold={5} />
}

const renderBook = ({ item: book }) => {
  return (
    <TouchableOpacity style={[styles.card, styles.shadow]} onPress={() => Linking.openURL(book.volumeInfo.infoLink)}>
      <Image style={styles.cardImage} source={{ uri: book.volumeInfo.imageLinks?.thumbnail }} />
      <View style={styles.cardInfo}>
        <Text style={styles.cardTitle}>{book.volumeInfo.title}</Text>
        <Text style={styles.cardSubtitle}>{book.volumeInfo.authors?.join(', ')}</Text>
        <Text style={styles.cardDescription}>{book.volumeInfo.description?.split(" ").splice(0,30).join(" ")}...</Text>
      </View>
      
    </TouchableOpacity>
  );
}

const renderInfo = (loading, size) => {
  const text = loading ? "Carregando..." : size > 0 ? `Foram encontrados ${size} livro(s)`: false;

  if (text)
    return <Text style={styles.searchInfo}>{ text }</Text>
}

const Search = () => {
  const [ books, setBooks ] = useState([]);
  const [ loading, setLoading ] = useState(false);
  const [ size, setSize ] = useState(0);
  const [ query, setQuery ] = useState("");
  const [ start, setStart ] = useState(0);

  const debouncedQuery = debounceValue(query, 500);

  useEffect(() => {
    setLoading(true);
    setStart(0);
    if (debouncedQuery) {
      requestApi(debouncedQuery, 0);
    } else {
      setBooks([]);
      setSize(0);
      setLoading(false);
    }
  }, [debouncedQuery]);
  
  const requestApi = (query, start) => {
    api.get('volumes', {
      params: {
        q: query,
        startIndex: start
      }
    }).then((response) => {
      const booksResponse = response.data.items || [];
      const sizeResponse = response.data.totalItems;

      setBooks(start == 0 ? booksResponse : [...books, ...booksResponse]);
      setSize(start == 0 ? sizeResponse : size);
      setLoading(false);
      setStart(start + 40);
    });
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={[styles.header, styles.shadow]}>
        <View style={[styles.headerBar, styles.shadow]}>
          <Text style={styles.headerBarText}>Book Search</Text>
        </View>
        <TextInput style={styles.search} onChangeText={query => setQuery(query)} placeholder="Comece digirando aqui"/>
        { renderInfo(loading, size) }
      </View>
      { renderBooks(books, () => requestApi(debouncedQuery, start)) }
    </SafeAreaView>
  );
}

export default Search;
