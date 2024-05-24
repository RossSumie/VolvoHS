import React, { useState, useEffect } from 'react';
import { Dimensions, Text, TouchableOpacity } from 'react-native';
import * as S from './styles';
import * as Progress from 'react-native-progress';
import Header from '../../../components/Common/Header';
import MainTitle from '../../../components/Common/MainTitle';
import { useNavigation } from '@react-navigation/core';
import {DailyCheckUpStackScreensProps} from '../../../routes/AppStack/OperatorFlowStack/DailyCheckUpFlowStack'
import QuestionTitle from '../../../components/Common/QuestionTitle';
import NextIcon from '../../../assets/icons/Symbol_Arrow right_White.svg';
import CameraIcon from '../../../assets/icons/Device_Camera_White.svg';
import CustomRadioButtonGroup from '../../../components/Common/RadioButtonGroup';
import { Image } from 'react-native';
import { RouteProp } from '@react-navigation/native';


type DCPageTwoStackParamList = {
  DCPageTwo: {
    screenshotUri: string;
  };
};

type DCPageTwoProps = {
  route: RouteProp<DCPageTwoStackParamList, 'DCPageTwo'>;
};

const DCPageTwo: React.FC<DCPageTwoProps> = ({ route}) => {
  const screenWidth = Dimensions.get('window').width;

  const { navigate } = useNavigation<DailyCheckUpStackScreensProps>();
  const handleCameraPress = () => {
    navigate('RadiatorAR'); // Make sure 'RadiatorAR' is the name used in your navigation stack
  };

  const [radiatorOption, setRadiatorOption] = useState('');
  const [coolantLevelOption, setCoolantLevelOption] = useState('');
  const [coolantLeaksOption, setCoolantLeaksOption] = useState('');
  const [selectedDuo, setSelectedDuo] = useState<string | null>(null);
  
  const handlePressDuo = (value: string) => {
      setSelectedDuo(value);
  };

  const handleRadiatorChange = (value: string) => {
    setRadiatorOption(value);
  };

  const handleCoolantLevelChange = (value: string) => {
    setCoolantLevelOption(value);
  };

  const handleCoolantLeaksChange = (value: string) => {
    setCoolantLeaksOption(value);
  };

  const [imageUri, setImageUri] = useState('');

  useEffect(() => {
    if (route.params?.screenshotUri) {
      const formattedUri = `file://${route.params.screenshotUri}`;
      console.log("Formatted URI:", formattedUri); // Para debugging
      setImageUri(formattedUri);
    }
  }, [route.params?.screenshotUri]);

  return (
    <S.Wrapper>
      <Header/>
      <S.Container>
        <S.QuestionContainer>
          <Progress.Bar 
            progress={0.6}
            height={8}
            width={screenWidth-56}
            animated={true}
            unfilledColor={'#A7ABA9'}
            borderWidth={0} 
            color={'#2D606F'}/>
          <MainTitle>Engine</MainTitle>
          <QuestionTitle>Please take a picture of your radiator</QuestionTitle>
          <TouchableOpacity onPress={() => navigate('CoolantAR')}><Text>Coolant Tank bonus!</Text></TouchableOpacity>
          <S.CameraButton onPress={handleCameraPress}>
              <CameraIcon width={32}/>
          </S.CameraButton>
          {imageUri ? <Image source={{ uri: imageUri }} style={{ width: 250, height: 300 }} /> : null}
          <S.Gap/>
          <QuestionTitle>How is the radiator?</QuestionTitle>
          <CustomRadioButtonGroup
            labels={['Clean/Undamaged', 'Dirty/Damaged']}
            name="weatherGroup"
            onChange={handleRadiatorChange}
            selectedValue={radiatorOption}
          />
           <S.Gap/>
          <QuestionTitle>How is the coolant level?</QuestionTitle>
          <CustomRadioButtonGroup
            labels={['Ok', 'Close to minimum', 'Below minimum', 'NA']}
            name="operationGroup"
            onChange={handleCoolantLevelChange}
            selectedValue={coolantLevelOption}
          />
           <S.Gap/>
          <QuestionTitle>Was the coolant refilled today?</QuestionTitle>
          <S.DuoContainer>
            <S.DuoButton isSelected={selectedDuo === 'yes'} onPress={() => handlePressDuo('yes')}>
              <S.DuoButtonText isSelected={selectedDuo === 'yes'}>Yes</S.DuoButtonText>
            </S.DuoButton>
            <S.DuoButton isSelected={selectedDuo === 'no'} onPress={() => handlePressDuo('no')}>
              <S.DuoButtonText isSelected={selectedDuo === 'no'}>No</S.DuoButtonText>
            </S.DuoButton>
         </S.DuoContainer>
           <S.Gap/>
          <QuestionTitle>Are there any coolant leaks?</QuestionTitle>
          <CustomRadioButtonGroup
            labels={['Ok', 'Coolant Droplets', 'Clear Leak', 'NA']}
            name="operationGroup"
            onChange={handleCoolantLeaksChange}
            selectedValue={coolantLeaksOption}
          />
        </S.QuestionContainer>
        <S.Gap/>
        <S.Gap/>
        <S.NextButton onPress={() => navigate('DCPageThree')}>
          <S.NextButtonText>Next</S.NextButtonText>
          <NextIcon width={24}/>
        </S.NextButton>
      </S.Container>
    </S.Wrapper>
  );
};

export default DCPageTwo;
