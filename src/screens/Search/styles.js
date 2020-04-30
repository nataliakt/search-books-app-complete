import styled from 'styled-components';
import SafeAreaView from 'react-native-safe-area-view';
import TextInput from '../../components/TextInput';
import ShadowedView from '../../components/ShadowedView';

export const Container = styled(SafeAreaView)`
  flex: 1;
  background-color: #000;
`;

export const Content = styled.View`
  flex: 1;
  background-color: #eee;
`;

export const Header = styled(ShadowedView)`
  background-color: #008E76;
  padding-bottom: 12px;
`;

export const Search = styled(TextInput)`
  margin: 12px 12px 0;
`;