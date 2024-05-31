import React, { useState, useEffect } from 'react';
import { View, Button, Text } from 'react-native';
import Voice from 'react-native-voice';
import * as S from './styles';
import Header from '../../components/Common/Header';
import MainTitle from '../../components/Common/MainTitle';
import { useNavigation } from '@react-navigation/core';
import { OperatorStackScreensProps } from '../../routes/AppStack/OperatorFlowStack';
import QuestionTitle from '../../components/Common/QuestionTitle';
import NextIcon from '../../assets/icons/Symbol_Arrow right_White.svg';
import CameraIcon from '../../assets/icons/Device_Camera_White.svg';

const SelfReport = () => {
  const { navigate } = useNavigation<OperatorStackScreensProps>();
  const [result, setResult] = useState('');
  return (
    <S.Wrapper>
      <Header />
      <S.Container>
        <MainTitle>Would you like to report any issues with your machine?</MainTitle>
        <S.TextArea multiline={true} numberOfLines={6} textAlignVertical='top'/>
        <S.IconContainer>
        <QuestionTitle>You can add pictures to your report by clicking the camera button below</QuestionTitle>
        <S.CameraButton>
          <CameraIcon width={32} />
        </S.CameraButton>
        </S.IconContainer>
        <S.NextButton>
            <S.NextButtonText>Next</S.NextButtonText>
            <NextIcon width={24} />
          </S.NextButton>
      </S.Container>
    </S.Wrapper>
  );
};

export default SelfReport;
