import styled from 'styled-components/native';

export const Wrapper = styled.ScrollView`
  background-color:'#FF6347';
`;

export const Container = styled.View`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 32px;
  width: 100%;
`;

export const QuestionnaireContainer = styled.View`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const QuestionsContainer = styled.View`
  display: flex;
  flex-direction: column;
  margin: 32px 0 32px 0;
  align-items: center;
  gap: 16px;
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
export const NextButtonText = styled.Text`
  font-size: 20px;
  font-family: 'VolvoNovum3-Light';
  color: white;
`

export const DuoContainer = styled.View`
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 5%;
  gap: 24px;
`;

export const DuoButton = styled.TouchableOpacity<{ isSelected: boolean }>`
  display: flex;
  flex-direction: row;
  align-items:center;
  justify-content:center;
  border-radius: 5px;
  border-width: 1px;
  width: 50%;
  height:60px;
  background-color: ${({ isSelected }) => (isSelected ? '#2D606F' : 'transparent')};
  border-color: ${({ isSelected }) => (isSelected ? '#2D606F' : '#202A44')};
`;

export const DuoButtonText = styled.Text<{ isSelected: boolean }>`
  color: ${({ isSelected }) => (isSelected ? 'white' : '#202A44')};
  font-size: 16px;
`;

