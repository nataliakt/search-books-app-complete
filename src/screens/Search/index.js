import React, { useState, useEffect } from 'react';
import api from '../../services/api';

import { View, Text, TextInput, SafeAreaView, FlatList, TouchableOpacity, Image, Linking } from 'react-native';

import styles from './styles';

const renderBooks = (books) => {
  if (!books || books.length == 0) 
    return <Text style={styles.empty}>Não encontramos nada para mostrar :(</Text>

  return <FlatList 
    style={styles.list}
    data={books}
    renderItem={renderBook}
    keyExtractor={book => book.id} />
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

  const loadBooks = async (query) => {
    let books = [];
    let size = 0;
    if (query) {
      const response = await api.get('volumes', {params: {q: query}});
      books = response.data.items;
      size = response.data.totalItems;
    }
    
    setBooks(books);
    setSize(size);
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={[styles.header, styles.shadow]}>
        <View style={[styles.headerBar, styles.shadow]}>
          <Text style={styles.headerBarText}>Book Search</Text>
        </View>
        <TextInput style={styles.search} onChangeText={query => loadBooks(query)} placeholder="Comece digirando aqui"/>
        { renderInfo(loading, size) }
      </View>
      { renderBooks(books) }
    </SafeAreaView>
  );
}

export default Search;
