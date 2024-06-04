import styled from 'styled-components/native';

export const Wrapper = styled.ScrollView`
  flex: 1;
  background-color:'#FF6347';
`;
export const PageTitle = styled.Text`
  font-family: 'VolvoNovum3-Bold';
  font-size: 28px;
  color: #000;
  margin-bottom: 16px;
`
export const Container = styled.View`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding: 32px;
  width: 100%;
  flex: 1;
  gap: 32px;
`;


export const Report = styled.View`
  display: flex;
  flex-direction: column;
  gap: 24px;
`

export const LoadingWheelView = styled.View`
  width: 100%;
  height: 100px;

`

export const ReportDetails = styled.View`
  display: flex;
  flex-direction: row;
  gap: 16px;
`

export const ReportColumn = styled.View`
  display: flex;
  flex-direction: column;
  align-items: left;
  justify-conten: left;
  width: 48%;
`

export const RawImageContainer = styled.View`
  width: 100%;
  align-items: center;
`

export const ReportLabel = styled.Text`
  font-size: 16px;
  font-family: 'VolvoNovum3-Bold';
  color: #000;
`

export const ReportValue = styled.Text`
  font-size: 16px;
  font-family: 'VolvoNovum3-Light';
  color: #000;
`

export const QuestionContainer = styled.View`
  display: flex;
  flex-direction: column;
  align-items: left;
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