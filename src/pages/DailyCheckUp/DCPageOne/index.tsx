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

const DCPageOne = () => {
  const screenWidth = Dimensions.get('window').width;
  const { navigate } = useNavigation<DailyCheckUpStackScreensProps>();
  const { options, setOption } = useRadioButton();

  // Handlers that update specific options using the setOption function
  const handleWeatherChange = (value: string) => {
    setOption('weather', value);
  };

  const handleOperationChange = (value: string) => {
    setOption('operation', value);
  };

  // Extracting specific option values from the options state
  const weatherOption = options['weather'] || '';
  const operationOption = options['operation'] || '';

  return (
    <S.Wrapper>
      <Header/>
      <S.Container>
        <S.QuestionContainer>
          <Progress.Bar 
            progress={0.3}
            height={8}
            width={screenWidth - 56}
            animated={true}
            unfilledColor={'#A7ABA9'}
            borderWidth={0} 
            color={'#2D606F'}/>
          <S.Gap/>
          <MainTitle>Environment</MainTitle>
          <QuestionTitle>How is the weather today?</QuestionTitle>
          <CustomRadioButtonGroup
            labels={['Hot', 'Cold', 'Windy', 'Downpour', 'NA']}
            name="weatherGroup"
            onChange={handleWeatherChange}
            selectedValue={weatherOption}
          />
          <S.Gap/>
          <QuestionTitle>What kind of operations will be done today?</QuestionTitle>
          <CustomRadioButtonGroup
            labels={['Heavy', 'Light', 'Very Deep', 'High Load', 'NA']}
            name="operationGroup"
            onChange={handleOperationChange}
            selectedValue={operationOption}
          />
        </S.QuestionContainer>
        <S.NextButton onPress={() => navigate('DCPageTwo', { screenshotUri: '' })}>
          <S.NextButtonText>Next</S.NextButtonText>
          <NextIcon width={24}/>
        </S.NextButton>
      </S.Container>
    </S.Wrapper>
  );
};

export default DCPageOne;
