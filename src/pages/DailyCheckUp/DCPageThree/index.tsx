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

const DCPageThree = () => {
  const screenWidth = Dimensions.get('window').width;
  const { navigate } = useNavigation<DailyCheckUpStackScreensProps>();
  const { options, setOption } = useRadioButton();

  // Handlers that update specific options using the setOption function
  const handlesoundChange = (value: string) => {
    setOption('sound', value);
  };

  // Extracting specific option values from the options state
  const soundOption = options['sound'] || '';

  return (
    <S.Wrapper>
      <Header/>
      <S.Container>
        <S.QuestionContainer>
          <Progress.Bar 
            progress={0.9}
            height={8}
            width={screenWidth - 56}
            animated={true}
            unfilledColor={'#A7ABA9'}
            borderWidth={0} 
            color={'#2D606F'}/>
          <S.Gap/>
          <MainTitle>Start up your engine</MainTitle>
          <QuestionTitle>Are there any abnormal sounds?</QuestionTitle>
          <CustomRadioButtonGroup
            labels={['Yes', 'Possibly', 'No', 'NA']}
            name="soundGroup"
            onChange={handlesoundChange}
            selectedValue={soundOption}
          />
        </S.QuestionContainer>
        <S.NextButton onPress={() => navigate('DCReport')}>
          <S.NextButtonText>Next</S.NextButtonText>
          <NextIcon width={24}/>
        </S.NextButton>
      </S.Container>
    </S.Wrapper>
  );
};

export default DCPageThree;
