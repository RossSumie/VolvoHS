import React, { useEffect } from 'react';
import { Dimensions, Image } from 'react-native';
import * as S from './styles';
import Header from '../../../components/Common/Header';
import MainTitle from '../../../components/Common/MainTitle';
import { useNavigation } from '@react-navigation/core';
import { InspectionStackScreensProps } from '../../../routes/AppStack/OperatorFlowStack/InspectionFlowStack';
import NextIcon from '../../../assets/icons/Symbol_Arrow right_White.svg';
import CameraIcon from '../../../assets/icons/Device_Camera_White.svg';
import CustomRadioButtonGroup from '../../../components/Common/RadioButtonGroup';
import { useRadioButton } from '../../../hooks/radioButtonContext';
import QuestionTitle from '../../../components/Common/QuestionTitle';

const INSQuestionnaire: React.FC<{ route: any }> = ({ route }) => {
  const screenWidth = Dimensions.get('window').width;
  const { navigate } = useNavigation<InspectionStackScreensProps>();
  const { options, setOption } = useRadioButton();

  const handleCameraPress = () => {
    navigate('RadiatorAR');
  };

  useEffect(() => {
    if (route.params?.screenshotUri) {
      const formattedUri = `file://${route.params.screenshotUri}`;
      setOption('screenshotUri', formattedUri);
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
          {options.screenshotUri ? <Image source={{ uri: options.screenshotUri }} style={{ width: 250, height: 300 }} /> : null}
          <S.Gap/>
          <MainTitle>Coolant Level</MainTitle>
          <QuestionTitle>How is the coolant level?</QuestionTitle>
          <CustomRadioButtonGroup
            labels={['Ok', 'Close to minimum', 'Below minimum', 'NA']}
            name="coolantLevel"
            onChange={value => setOption('coolantLevel', value)}
            selectedValue={options.coolantLevel}
          />
          <S.Gap/>
          <MainTitle>Fan</MainTitle>
          <QuestionTitle>Check wear on the fan blades</QuestionTitle>
          <CustomRadioButtonGroup
            labels={['Ok', 'Worn', 'Damaged', 'NA']}
            name="fanWear"
            onChange={value => setOption('fanWear', value)}
            selectedValue={options.fanWear}
          />
          <QuestionTitle>Check the function of the fan</QuestionTitle>
          <CustomRadioButtonGroup
            labels={['Good', 'Poor Airflow', 'Not Spinning', 'NA']}
            name="fanFunction"
            onChange={value => setOption('fanFunction', value)}
            selectedValue={options.fanFunction}
          />
        </S.QuestionnaireContainer>
        <S.NextButton onPress={() => navigate('Report')}>
          <S.NextButtonText>Next</S.NextButtonText>
          <NextIcon width={24}/>
        </S.NextButton>
      </S.Container>
    </S.Wrapper>
  );
};

export default INSQuestionnaire;
