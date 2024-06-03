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
import { api } from '../../../services/api';

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
      console.log(formattedUri);
    }
  }, [route.params?.screenshotUri]);
  const handleSubmit = async () => {
    try {
      const payload = new FormData();
      payload.append('radiator_cleanliness', "NA");
      payload.append('check_coolant_level', options.coolantLevel || 'NA');
      payload.append('check_fan_blades_wear', options.fanWear || 'NA');
      payload.append('check_fan_function', options.fanFunction || 'NA');
      payload.append('coolant_leaks', "NA");
      payload.append('odd_water_pump_sound', "NA");
      payload.append('fan_spinning_correctly', "NA");
      payload.append('Analysed_coolant_label', "NA");
      payload.append('Analysed_radiator_label', "NA");
      payload.append('radiator_image_before', {
        uri: options.screenshotUri,
        type: 'image/jpeg',
        name: 'radiator_image_before.jpg',
      });
      payload.append('coolant_image_before', "NA");
      payload.append('radiator_image_analyzed', "NA");
      payload.append('coolant_image_analyzed', "NA");
      payload.append('extra_image', "NA");
      payload.append('Date', new Date().toISOString());
      payload.append('__v', 0);
  
      console.log('Payload:', payload);
  
      const response = await api.post('/inspection/create-inspection-report', payload, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
  
      const { _id } = response.data; // Get the generated _id from the response
      console.log('Response:', response.data);
      navigate('Report', { id: _id }); // Pass the _id to the Report component
    } catch (error) {
      console.error('Failed to submit data:', error);
    }
  };
  

  return (
    <S.Wrapper>
      <Header />
      <S.Container>
        <S.QuestionnaireContainer>
          <MainTitle>Radiator</MainTitle>
          <QuestionTitle>Please take a picture of your radiator</QuestionTitle>
          <S.CameraButton onPress={handleCameraPress}>
            <CameraIcon width={32} />
          </S.CameraButton>
          {options.screenshotUri ? <Image source={{ uri: options.screenshotUri }} style={{ width: screenWidth -80, height: 400 }} /> : null}
          <S.Gap />
          <MainTitle>Coolant Level</MainTitle>
          <QuestionTitle>How is the coolant level?</QuestionTitle>
          <CustomRadioButtonGroup
            labels={['ok', 'close to minimum', 'below minimum', 'NA']}
            name="coolantLevel"
            onChange={value => setOption('coolantLevel', value)}
            selectedValue={options.coolantLevel}
          />
          <S.Gap />
          <MainTitle>Fan</MainTitle>
          <QuestionTitle>Check wear on the fan blades</QuestionTitle>
          <CustomRadioButtonGroup
            labels={['ok', 'worn', 'damaged', 'NA']}
            name="fanWear"
            onChange={value => setOption('fanWear', value)}
            selectedValue={options.fanWear}
          />
          <QuestionTitle>Check the function of the fan</QuestionTitle>
          <CustomRadioButtonGroup
            labels={['good', 'poor airflow', 'fan not spinning', 'NA']}
            name="fanFunction"
            onChange={value => setOption('fanFunction', value)}
            selectedValue={options.fanFunction}
          />
          <S.Gap/>
          <S.Gap/>
          <S.Gap/>
          <S.NextButton onPress={handleSubmit}>
            <S.NextButtonText>Next</S.NextButtonText>
            <NextIcon width={24} />
          </S.NextButton>
        </S.QuestionnaireContainer>
      </S.Container>
    </S.Wrapper>
  );
};

export default INSQuestionnaire;
