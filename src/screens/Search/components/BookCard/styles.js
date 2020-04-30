import styled from 'styled-components/native';

import ShadowedView from '../../../../components/ShadowedView';

export const TouchableCard = styled.TouchableOpacity`
  background-color: #fff;
  margin-horizontal: 12px;
  margin-vertical: 6px;
  border-radius: 4px;
  padding: 12px;
`;

export const ContentView = styled(ShadowedView)`
  flex-direction: row;
  align-items: flex-start;
`;

export const CoverImage = styled.Image`
  width: 80px;
  height: 114px;
  marginRight: 12px;
`;

export const InfoView = styled.View`
  flex: 1;
`;

export const TitleText = styled.Text`
  color: #292929;
  font-size: 14px;
  font-weight: bold;
`;

export const AuthorsText = styled.Text`
  color: #292929;
  font-size: 10px;
  margin-top: 6px;
`;

export const DescriptionText = styled.Text`
  color: #292929;
  font-size: 14px;
  margin-top: 8px;
`;