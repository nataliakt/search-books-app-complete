import React from 'react';

import { TitleBarView, TitleBarText } from './styles';

export default function({ children }) {
  return (
    <TitleBarView>
      <TitleBarText>{ children }</TitleBarText>
    </TitleBarView>
  )
}