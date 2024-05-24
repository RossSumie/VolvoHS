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


type INSQuestionnaireStackParamList = {
  INSQuestionnaire: {
    screenshotUri: string;
  };
};

type INSQuestionnaireProps = {
  route: RouteProp<INSQuestionnaireStackParamList, 'INSQuestionnaire'>;
};

const INSQuestionnaire: React.FC<INSQuestionnaireProps> = ({ route}) => {
  const screenWidth = Dimensions.get('window').width;

  const { navigate } = useNavigation<DailyCheckUpStackScreensProps>();
  const handleCameraPress = () => {
    navigate('RadiatorAR'); // Make sure 'RadiatorAR' is the name used in your navigation stack
  };

  const [radiatorOption, setRadiatorOption] = useState('');
  const [coolantLevelOption, setCoolantLevelOption] = useState('');
  const [fanWearOption, setFanWearOption] = useState('');
  const [fanFunctionOption, setFanFunctionOption] = useState('');

  const handleCoolantLevelChange = (value: string) => {
    setCoolantLevelOption(value);
  };

  const handleFanWearChange = (value: string) => {
    setFanWearOption(value);
  };

  const handleFanFunctionChange = (value: string) => {
    setFanFunctionOption(value);
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
          <S.QuestionnaireContainer>
            <MainTitle>Radiator</MainTitle>
            <QuestionTitle>Please take a picture of your radiator</QuestionTitle>
            <S.CameraButton onPress={handleCameraPress}>
                <CameraIcon width={32}/>
            </S.CameraButton>
            {imageUri ? <Image source={{ uri: imageUri }} style={{ width: 250, height: 300 }} /> : null}
            <S.Gap/>
            <MainTitle>Coolant Level</MainTitle>
            <QuestionTitle>How is the coolant level?</QuestionTitle>
            <CustomRadioButtonGroup
              labels={['Ok', 'Close to minimum', 'Below minimum', 'NA']}
              name="operationGroup"
              onChange={handleCoolantLevelChange}
              selectedValue={coolantLevelOption}
            />
            <S.Gap/>
            <MainTitle>Fan</MainTitle>
            <QuestionTitle>Check wear on the fan blades</QuestionTitle>
            <CustomRadioButtonGroup
              labels={['Ok', 'Worn', 'Damaged', 'NA']}
              name="operationGroup"
              onChange={handleFanWearChange}
              selectedValue={fanWearOption}
            />
            <QuestionTitle>Check the function of the fan</QuestionTitle>
            <CustomRadioButtonGroup
              labels={['Good', 'Poor Airflow', 'Not Spinning', 'NA']}
              name="operationGroup"
              onChange={handleFanFunctionChange}
              selectedValue={fanFunctionOption}
            />
            </S.QuestionnaireContainer>
            <S.NextButton onPress={() => navigate('DCPageThree')}>
              <S.NextButtonText>Next</S.NextButtonText>
              <NextIcon width={24}/>
            </S.NextButton>
      </S.Container>
    </S.Wrapper>
  );
};

export default INSQuestionnaire;
