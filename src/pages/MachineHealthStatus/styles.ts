import { TouchableOpacity } from 'react-native-gesture-handler';
import styled from 'styled-components/native';

export const TabContainer = styled.View`
  flex-direction: row;
  padding: 10px;
  width: 100% ;
`;

interface TabProps {
  isActive: boolean;
}


export const Tab = styled.TouchableOpacity<TabProps>`
  flex: 1;
  align-items: center;
  padding: 10px;
  border-bottom-width: ${({ isActive }) => (isActive ? '2px' : '0')};
  border-bottom-color: ${({ isActive }) => (isActive ? '#202a44' : 'transparent')};
`;
export const Wrapper = styled.ScrollView`
  flex: 1;
  background-color:'#FF6347';
  width: 100%;
`;

export const ReportDetails = styled.View`
  display: flex;
  width: 100%;
  background-color: #FFF ;
  border-radius: 8px;
  align-items: center;
  justify-content: space-between;
`

export const ReportColumn = styled.View`
  display: flex;
  flex-direction: column;
  align-items: left;
  justify-conten: center;
  gap: 16px;
  padding: 32px;
`
export const ReportRow = styled.View`
  display: flex;
  flex-direction: row;
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
  text-align: justify;
`

export const Container = styled.View`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const PageTitleView = styled.View`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: center;
  margin-top: 32px;
`;

export const ContentContainer = styled.View`
  align-items: center;
  justify-content: center;
  padding: 32px;
  width: 100%;
`;

export const InspectionRedirection = styled.TouchableOpacity`
  border-radius: 0 0 8px 8px;
  bottom: 0;
  width: 100%;
  backgroundColor: #202a44;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
`

export const InspectionRedirectionText = styled.Text`
  font-family: 'VolvoNovum3-Light';
  font-size: 14px;
  color: #FFF;
`

export const Gap = styled.View`
  height:16px;
`;

export const PageTitle = styled.Text`
  font-family: 'VolvoNovum3-Bold';
  font-size: 28px;
  color: #000;
  margin-bottom: 16px;
`

export const TabTitle = styled.Text`
  font-family: 'VolvoNovum3-Light';
  font-size: 14px;
  color: #000;
`
export const TagView = styled.View`
  padding:4px;
  width: 80px;
  align-items: center;
  border-radius: 16px;
`
export const TagText = styled.Text`
  font-family: 'VolvoNovum3-Light';
  font-size: 12px;
  color: #53565A;
`