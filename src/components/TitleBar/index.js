import React from 'react';

import { TitleBar, TitleBarText } from './styles';

export default function({ children }) {
  return (
    <TitleBar>
      <TitleBarText>{ children }</TitleBarText>
    </TitleBar>
  )
}