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
  align-items: center;
  width: 100%;
  gap:16px;
  margin: 16px 0 80px 0;
`

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

export const PickerButton = styled.TouchableOpacity`
  background-color: #202a44;
  padding: 10px 20px;
  margin: 10px 0;
  border-radius: 5px;
  align-items: center;
`;

export const PickerButtonText = styled.Text`
  color: white;
  font-size: 16px;
`;

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

