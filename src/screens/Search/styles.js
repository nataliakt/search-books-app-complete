import styled from 'styled-components';
import SafeAreaView from 'react-native-safe-area-view';
import TextInput from '../../components/TextInput';
import ShadowedView from '../../components/ShadowedView';

export const StyledSafeAreaView = styled(SafeAreaView)`
  flex: 1;
  background-color: #000;
`;

export const ContainerView = styled.View`
  flex: 1;
  background-color: #eee;
`;

export const HeaderView = styled(ShadowedView)`
  background-color: #008E76;
  padding-bottom: 12px;
`;

export const SearchInput = styled(TextInput)`
  margin: 12px 12px 0;
`;