import React from 'react';
import { Dimensions } from 'react-native';
import * as S from './styles';
import * as Progress from 'react-native-progress';
import Header from '../../../components/Common/Header';
import MainTitle from '../../../components/Common/MainTitle';
import { useNavigation } from '@react-navigation/core';
import { DailyCheckUpStackScreensProps } from '../../../routes/AppStack/OperatorFlowStack/DailyCheckUpFlowStack';
import QuestionTitle from '../../../components/Common/QuestionTitle';
import NextIcon from '../../../assets/icons/Symbol_Arrow right_White.svg';
import CustomRadioButtonGroup from '../../../components/Common/RadioButtonGroup';
import { useRadioButton } from '../../../hooks/radioButtonContext';

const DCPageTwo = () => {
  const screenWidth = Dimensions.get('window').width;
  const { navigate } = useNavigation<DailyCheckUpStackScreensProps>();
  const { options, setOption } = useRadioButton();

  const handleCoolantLevelChange = (value: string) => {
    setOption('coolantLevel', value);
  };

  const handleCoolantLeaksChange = (value: string) => {
    setOption('coolantLeaks', value);
  };

  const handlePressDuo = (value: string) => {
    setOption('coolantRefill', value);
  };

  const coolantLevelOptions = [
    { label: 'Ok', value: 'ok' },
    { label: 'Close to minimum', value: 'close to minimum' },
    { label: 'Below minimum', value: 'below minimum' },
    { label: 'NA', value: 'na' },
  ];

  const coolantLeakOptions = [
    { label: 'No', value: 'ok' },
    { label: 'Coolant Droplets', value: 'coolant droplets' },
    { label: 'Clear Leak', value: 'clear leak' },
    { label: 'NA', value: 'na' },
  ];

  return (
    <S.Wrapper>
      <Header />
      <S.Container>
        <S.QuestionnaireContainer>
          <Progress.Bar
            progress={0.6}
            height={8}
            width={screenWidth - 56}
            animated={true}
            unfilledColor={'#A7ABA9'}
            borderWidth={0}
            color={'#2D606F'}
          />
          <S.QuestionsContainer>
            <MainTitle>Engine</MainTitle>
            <QuestionTitle>How is the coolant level?</QuestionTitle>
            <CustomRadioButtonGroup
              options={coolantLevelOptions}
              name="coolantLevelGroup"
              onChange={handleCoolantLevelChange}
              selectedValue={options['coolantLevel'] || ''}
            />
            <S.Gap />
            <QuestionTitle>Was the coolant refilled today?</QuestionTitle>
            <S.DuoContainer>
              <S.DuoButton isSelected={options['coolantRefill'] === 'Yes'} onPress={() => handlePressDuo('Yes')}>
                <S.DuoButtonText isSelected={options['coolantRefill'] === 'Yes'}>Yes</S.DuoButtonText>
              </S.DuoButton>
              <S.DuoButton isSelected={options['coolantRefill'] === 'No'} onPress={() => handlePressDuo('No')}>
                <S.DuoButtonText isSelected={options['coolantRefill'] === 'No'}>No</S.DuoButtonText>
              </S.DuoButton>
            </S.DuoContainer>
            <S.Gap />
            <QuestionTitle>Are there any coolant leaks?</QuestionTitle>
            <CustomRadioButtonGroup
              options={coolantLeakOptions}
              name="coolantLeaksGroup"
              onChange={handleCoolantLeaksChange}
              selectedValue={options['coolantLeaks'] || ''}
            />
          </S.QuestionsContainer>
        </S.QuestionnaireContainer>
        <S.Gap />
        <S.Gap />
        <S.NextButton onPress={() => navigate('DCPageThree')}>
          <S.NextButtonText>Next</S.NextButtonText>
          <NextIcon width={24} />
        </S.NextButton>
      </S.Container>
    </S.Wrapper>
  );
};

export default DCPageTwo;
