import styled from 'styled-components/native';

export const Wrapper = styled.View`
  flex: 1;
  background-color:'#FF6347';
`;

export const Container = styled.View`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding: 32px;
  width: 100%;
  flex: 1;
`;

export const QuestionContainer = styled.View`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap:16px;
  width: 100%;
`;
export const Gap = styled.View`
  height:16px;
`;


export const NextButton = styled.TouchableOpacity`
  height: 60px;
  width: 100%;
  background-color: #202a44;
  border-radius:8px;
  display: flex;
  flex-direction:row;
  gap:8px;
  justify-content: center;
  align-items: center;
  padding: 0 24px;
  
`
export const NextButtonText = styled.Text`
  font-size: 20px;
  font-family: 'VolvoNovum3-Light';
  color: white;
`