import styled from 'styled-components/native';

export const Wrapper = styled.View`
  flex: 1;
  background-color:'#FF6347';
`;


export const Container = styled.View`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 32px;
  width: 100%;
  gap: 16px;
`;

export const MenuButton = styled.TouchableOpacity`
  width: 100%;
  background-color: ${props => props.disabled ? '#E1DFDD' : 'white'};
  border-radius:8px;
  display: flex;
  flex-direction:column;
  align-items:left;
  padding: 24px;
  opacity: ${props => props.disabled ? 0.5 : 1};
  
`

export const InfoContainer = styled.View`
  margin-top: 16px;
  display: flex;
  flex-direction: row;
  gap: 24px;
`

export const InfoColumn = styled.View`
  display: flex;
  flex-direction: column;
  gap: 4px;
  align-items: left;
`

export const InfoRow = styled.View`
  flex-direction:row;
  display: flex;
  align-items:center;
  gap:4px;
`
export const InfoText = styled.Text`
  font-size: 14px;
  font-family: 'VolvoNovum3-Regular';
`
export const ButtonText = styled.Text`
  font-size: 18px;
  font-family: 'VolvoNovum3-Regular';
  color: #000;
`