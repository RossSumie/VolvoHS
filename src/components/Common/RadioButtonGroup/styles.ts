// styles.ts
import styled from 'styled-components/native';
import { Svg, Circle } from 'react-native-svg';

export const RadioButtonGroup = styled.View`
  flex-direction: row;
  gap: 8px;
  margin-bottom:16px;
  width:90%;
  display:flex;
  justify-content: space-between;
`;

export const RadioButtonWrapper = styled.View`
  flex-direction: column;
  align-items: center;
  margin-bottom: 8px;
`;

export const RadioButtonContainer = styled.TouchableOpacity`
  width: 20px;
  height: 20px;
  justify-content: center;
  align-items: center;
`;

export const RadioButton = styled(Svg)`
  width: 20px;
  height: 20px;
`;

export const Label = styled.Text`
  font-family: 'VolvoNovum3-light';
  margin-top: 4px;
  text-align: center;
  width:100%;
`;
