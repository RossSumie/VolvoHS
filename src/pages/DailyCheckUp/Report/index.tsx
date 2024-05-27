import React from 'react';
import { Dimensions } from 'react-native';
import * as S from './styles';
import * as Progress from 'react-native-progress';
import Header from '../../../components/Common/Header';
import MainTitle from '../../../components/Common/MainTitle';
import { useNavigation } from '@react-navigation/core';
import { DailyCheckUpStackScreensProps } from '../../../routes/AppStack/OperatorFlowStack/DailyCheckUpFlowStack';
import NextIcon from '../../../assets/icons/Symbol_Arrow right_White.svg';
import ReportInformation from '../../../components/ReportInformation'; // Ensure this import is correct
import { useRadioButton } from '../../../hooks/radioButtonContext';

const DCReport = () => {
  const screenWidth = Dimensions.get('window').width;
  const { options, clearOptions } = useRadioButton();
  const { navigate } = useNavigation<DailyCheckUpStackScreensProps>();

  const handleSend = () => {
    clearOptions(); // Clear the context
    navigate('Home'); // Navigate after clearing
  };


  return (
    <S.Wrapper>
      <Header/>
      <S.Container>
        <S.PageTitle>Daily Check Up Report</S.PageTitle>
        <ReportInformation/>
        <S.Report>
        <MainTitle>Report Log</MainTitle>
          {Object.entries(options).map(([key, value]) => (
            <S.ReportDetails>
            <S.ReportColumn key={value}>
              <S.ReportLabel>{key.charAt(0).toUpperCase() + key.slice(1).replace(/([A-Z])/g, ' $1')}:</S.ReportLabel>
            </S.ReportColumn>
            <S.ReportColumn>
              <S.ReportValue>{value || 'N/A'}</S.ReportValue>
            </S.ReportColumn>
            </S.ReportDetails>
          ))}
          </S.Report>
        <S.NextButton onPress={handleSend}>
          <S.NextButtonText>Send</S.NextButtonText>
          <NextIcon width={24}/>
        </S.NextButton>
      </S.Container>
    </S.Wrapper>
  );
};

export default DCReport;
