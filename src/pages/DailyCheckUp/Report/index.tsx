import React, { useState } from 'react';
import { Dimensions } from 'react-native';
import * as S from './styles';
import * as Progress from 'react-native-progress';
import Header from '../../../components/Common/Header';
import MainTitle from '../../../components/Common/MainTitle';
import { useNavigation } from '@react-navigation/core';
import {DailyCheckUpStackScreensProps} from '../../../routes/AppStack/OperatorFlowStack/DailyCheckUpFlowStack'
import NextIcon from '../../../assets/icons/Symbol_Arrow right_White.svg';

const DCReport = () => {
  const screenWidth = Dimensions.get('window').width;

  const { navigate } = useNavigation<DailyCheckUpStackScreensProps>();

  const [soundOption, setsoundOption] = useState('');
  const [smellOption, setsmellOption] = useState('');

  const handlesoundChange = (value: string) => {
    setsoundOption(value);
  };

  const handlesmellChange = (value: string) => {
    setsmellOption(value);
  };

  return (
    <S.Wrapper>
      <Header/>
      <S.Container>
          <MainTitle>Report</MainTitle>
        <S.NextButton>
          <S.NextButtonText>Send</S.NextButtonText>
          <NextIcon width={24}/>
        </S.NextButton>
      </S.Container>
    </S.Wrapper>
  );
};

export default DCReport;
