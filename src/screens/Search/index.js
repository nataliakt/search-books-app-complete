import React, { useState, useEffect } from 'react';
import api from '../../services/api';

import { View, Text, TextInput, SafeAreaView, FlatList, TouchableOpacity, Image } from 'react-native';

import styles from './styles';

const renderBooks = (books) => {
  if (books.length == 0) 
    return <Text style={styles.empty}>Não encontramos nada para mostrar :(</Text>

  return <FlatList 
    style={styles.list}
    data={books}
    renderItem={renderBook}
    keyExtractor={book => book.id} />
}

const renderBook = ({ item: book }) => {
  return (
    <TouchableOpacity style={[styles.card, styles.shadow]}>
      <Image style={styles.cardImage} source={{ uri: book.volumeInfo.imageLinks.thumbnail }} />
      <View style={styles.cardInfo}>
        <Text style={styles.cardTitle}>{book.volumeInfo.title}</Text>
        <Text style={styles.cardSubtitle}>{book.volumeInfo.authors.join(', ')}</Text>
        <Text style={styles.cardDescription}>{book.volumeInfo.description.split(" ").splice(0,30).join(" ")}...</Text>
      </View>
      
    </TouchableOpacity>
  );
}

const Search = () => {
  const [ books, setBooks ] = useState([]);

  const loadBooks = async (query) => {
    const books = await api.get('volumes', {
      q: query,
    });
    // console.log(books);
    setBooks(books.data.items);
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={[styles.header, styles.shadow]}>
        <View style={[styles.headerBar, styles.shadow]}>
          <Text style={styles.headerBarText}>Book Search</Text>
        </View>
        <TextInput style={styles.search} onChangeText={query => loadBooks(query)} placeholder="Comece digirando aqui"/>
      </View>
      { renderBooks(books) }
    </SafeAreaView>
  );
}

export default Search;
