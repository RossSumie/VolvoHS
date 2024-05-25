import React from 'react';
import { Dimensions, Image } from 'react-native';
import * as S from './styles';
import Header from '../../../components/Common/Header';
import MainTitle from '../../../components/Common/MainTitle';
import { useNavigation } from '@react-navigation/core';
import { InspectionStackScreensProps } from '../../../routes/AppStack/OperatorFlowStack/InspectionFlowStack';
import NextIcon from '../../../assets/icons/Symbol_Arrow right_White.svg';
import ReportInformation from '../../../components/ReportInformation';
import { useRadioButton } from '../../../hooks/radioButtonContext'; // Ensure path is correct

const Report = () => {
  const screenWidth = Dimensions.get('window').width;
  const { options, clearOptions } = useRadioButton();
  const { navigate } = useNavigation<InspectionStackScreensProps>();

  const handleSend = () => {
    clearOptions(); // Clear the context
    navigate('RadiatorAR'); 
  };

  return (
    <S.Wrapper>
      <Header/>
      <S.Container>
        <S.PageTitle>Inspection Report</S.PageTitle>
        <ReportInformation/>
        <MainTitle>Report Details</MainTitle>
        <S.Report>
          {Object.entries(options).map(([key, value]) => (
            !key.includes('screenshotUri') && (
              <S.ReportDetails key={key}>
                <S.ReportColumn>
                  <S.ReportLabel>{key.replace(/([a-z])([A-Z])/g, '$1 $2').replace(/^./, str => str.toUpperCase())}:</S.ReportLabel>
                </S.ReportColumn>
                <S.ReportColumn>
                  <S.ReportValue>{value || 'N/A'}</S.ReportValue>
                </S.ReportColumn>
              </S.ReportDetails>
            )
          ))}
        </S.Report>
        <MainTitle>Raw Images</MainTitle>
        <S.Report>
          {Object.entries(options).map(([key, value]) => (
            key.includes('screenshotUri') && value && (
              <S.ReportDetails key={key}>
                <S.RawImageContainer>
                  <Image source={{ uri: value }} style={{ width: 200, height: 200 }} resizeMode="contain" />
                </S.RawImageContainer>
              </S.ReportDetails>
            )
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

export default Report;
