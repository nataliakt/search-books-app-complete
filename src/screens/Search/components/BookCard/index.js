import React from 'react';
import { Linking } from 'react-native';

import { TouchableCard, ContentView, CoverImage, InfoView, TitleText, AuthorsText, DescriptionText } from './styles';

export default function({ title, authors, description, thumbnail, infoLink }) {
  return (
    <TouchableCard onPress={() => Linking.openURL(infoLink)}>
      <ContentView>
        <CoverImage source={{ uri: thumbnail }} />
        <InfoView>
          <TitleText>{title}</TitleText>
          <AuthorsText>{authors}</AuthorsText>
          <DescriptionText>{description?.split(" ").splice(0,30).join(" ")}...</DescriptionText>
        </InfoView>
      </ContentView>
    </TouchableCard>
  )
}