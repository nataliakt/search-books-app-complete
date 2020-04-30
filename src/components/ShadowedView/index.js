import React from 'react';

import { ShadowedView } from './styles';

export default function(props) {
  return <ShadowedView {...props}>{ props.children }</ShadowedView>
};
