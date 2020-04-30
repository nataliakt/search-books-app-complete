import React from 'react';
import { Linking } from 'react-native';

import { BookCard, Content, Cover, InfoView, Title, Authors, Description } from './styles';

export default function({ title, authors, description, thumbnail, infoLink }) {
  return (
    <BookCard onPress={() => Linking.openURL(infoLink)}>
      <Content>
        <Cover source={{ uri: thumbnail }} />
        <InfoView>
          <Title>{title}</Title>
          <Authors>{authors}</Authors>
          <Description>{description?.split(" ").splice(0,30).join(" ")}...</Description>
        </InfoView>
      </Content>
    </BookCard>
  )
}