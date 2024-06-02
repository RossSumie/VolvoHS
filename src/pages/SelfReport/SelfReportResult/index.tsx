import React, { useState, useEffect } from 'react';
import * as S from './styles';
import Header from '../../../components/Common/HomeHeader';
import MainTitle from '../../../components/Common/MainTitle';
import { useNavigation } from '@react-navigation/core';
import QuestionTitle from '../../../components/Common/QuestionTitle';
import NextIcon from '../../../assets/icons/Symbol_Arrow right_White.svg';
import { SelfReportStackScreensProps } from '../../../routes/AppStack/OperatorFlowStack/SelfReportFlowStack';

const SelfReportResult = () => {
  const { navigate } = useNavigation<SelfReportStackScreensProps>();
  return (
    <S.Wrapper>
      <Header/>
      <S.Container>
        <S.TextContainer>
        <MainTitle>Thank you for letting us know!</MainTitle>
        <QuestionTitle> The issue with your power decrease is most likely to stem from hydraulic issues like valves and leaks. Would you like to do a hydraulic inspection to increase understanding of the problem? </QuestionTitle>
        </S.TextContainer>
        <S.ButtonsContainer>
        <S.NextButton onPress={()=> navigate('Inspection')}>
            <S.NextButtonText>Go to Inspection</S.NextButtonText>
            <NextIcon width={24} />
          </S.NextButton>
          <S.NextButton onPress={()=> navigate('Home')}>
            <S.NextButtonText>Back to menu</S.NextButtonText>
          </S.NextButton>
          </S.ButtonsContainer>
      </S.Container>
    </S.Wrapper>
  );
};

export default SelfReportResult;
