import styled from 'styled-components/native';

export const Wrapper = styled.View`
  flex: 1;
  background-color:'#FF6347';
`;


export const Container = styled.View`
  display: flex;
  flex: 1;
  flex-direction: column;
  align-items: center;
  padding: 32px;
  width: 100%;
  justify-content: space-between;
  gap: 16px;
`;

export const TextContainer = styled.View`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  gap: 16px;
`;

export const MenuButton = styled.TouchableOpacity`
  height: 60px;
  width: 100%;
  background-color: white;
  border-radius:8px;
  display: flex;
  flex-direction:row;
  align-items:center;
  padding: 0 24px;
  
`

export const CameraButton = styled.TouchableOpacity`
  height: 60px;
  width: 60px;
  background-color: #202a44;
  border-radius:32px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 8px;
  
`

export const TextArea= styled.TextInput`
  width: 100%;
  border: 1px;
`
export const ButtonsContainer = styled.View`
  gap: 16px;
  align-items: center;
  width:100%;
`
export const ButtonText = styled.Text`
  font-size: 20px;
  font-family: 'VolvoNovum3-Regular';
`

export const NextButtonText = styled.Text`
  font-size: 20px;
  font-family: 'VolvoNovum3-Light';
  color: white;
  text-align:center;
`
export const NextButton = styled.TouchableOpacity`
  height: 60px;
  width: 100%;
  background-color: #202a44;
  border-radius:8px;
  display: flex;
  flex-direction:row;
  gap:8px;
  align-items: center;
  justify-content: center;
  padding: 0 24px;
  
`