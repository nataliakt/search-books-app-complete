import React, { useState, useEffect } from 'react';

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
    const booksResponse = [
      {
        "id": "1YJZGDwAAQBAJ",
        "title": "React Native - Building Mobile Apps with JavaScript",
        "authors": "Vladimir Novick",
        "description": "Your go-to guide to creating truly native iOS and Android mobile applications using React and JavaScript About This Book Build cross-platform best seller native mobile applications in JavaScript with React-Native framework Learn about real world examples like Whatsapp, Instagram or Twitter. Learn all steps in React Native application development workflow from prototyping to deployment Get familiar with various mobile APIs covered in React Native framework and learn how to extend it further to non-supported APIs Who This Book Is For This book is for JavaScript developers who want to learn how to create native mobile apps using React Native.",
        "thumbnail": "http://books.google.com/books/content?id=YJZGDwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
        "infoLink": "https://play.google.com/store/books/details?id=YJZGDwAAQBAJ&source=gbs_api"
      },
      {
        "id": "2YJZGDwAAQBAJ",
        "title": "React Native - Building Mobile Apps with JavaScript",
        "authors": "Vladimir Novick",
        "description": "Your go-to guide to creating truly native iOS and Android mobile applications using React and JavaScript About This Book Build cross-platform best seller native mobile applications in JavaScript with React-Native framework Learn about real world examples like Whatsapp, Instagram or Twitter. Learn all steps in React Native application development workflow from prototyping to deployment Get familiar with various mobile APIs covered in React Native framework and learn how to extend it further to non-supported APIs Who This Book Is For This book is for JavaScript developers who want to learn how to create native mobile apps using React Native.",
        "thumbnail": "http://books.google.com/books/content?id=YJZGDwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
        "infoLink": "https://play.google.com/store/books/details?id=YJZGDwAAQBAJ&source=gbs_api"
      },
      {
        "id": "3YJZGDwAAQBAJ",
        "title": "React Native - Building Mobile Apps with JavaScript",
        "authors": "Vladimir Novick",
        "description": "Your go-to guide to creating truly native iOS and Android mobile applications using React and JavaScript About This Book Build cross-platform best seller native mobile applications in JavaScript with React-Native framework Learn about real world examples like Whatsapp, Instagram or Twitter. Learn all steps in React Native application development workflow from prototyping to deployment Get familiar with various mobile APIs covered in React Native framework and learn how to extend it further to non-supported APIs Who This Book Is For This book is for JavaScript developers who want to learn how to create native mobile apps using React Native.",
        "thumbnail": "http://books.google.com/books/content?id=YJZGDwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
        "infoLink": "https://play.google.com/store/books/details?id=YJZGDwAAQBAJ&source=gbs_api"
      },
    ];

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
