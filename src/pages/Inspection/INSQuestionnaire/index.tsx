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
import { postData } from '../../../services/api'

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
      console.log(formattedUri)
    }
  }, [route.params?.screenshotUri]);

  const handleSubmit = async () => {
    const payload = {
      radiator_cleanliness: 'NA', // Assuming no data available
      check_coolant_level: options.coolantLevel || "NA",
      check_fan_blades_wear: options.fanWear || "NA",
      check_fan_function: options.fanFunction || "NA",
      coolant_leaks: 'NA', // Assuming no data available
      odd_water_pump_sound: 'NA', // Assuming no data available
      fan_spinning_correctly: 'NA', // Assuming no data available
      Analysed_coolant_label: 'NA', // Assuming no data available
      Analysed_radiator_label: 'NA', // Assuming no data available
      radiator_image_before: '', // Assuming no data available
      coolant_image_before: options.screenshotUri || "", // Use empty string if no URI
      radiator_image_analyzed: '', // Assuming no data available
      coolant_image_analyzed: '', // Assuming no data available
      extra_image: '', // Assuming no data available
      _id: "6655104290012ae1dacace97", // This might be dynamically fetched or set based on context
      Date: new Date().toISOString(), // This generates current ISO date
      __v: 0 // If necessary
    };
  
    // Log the payload right before sending it
    console.log("Submitting the following data to the server:", payload);
  
    try {
      await postData('inspection/create-inspection-report', payload);
      navigate('Report');
      console.log('Data submitted successfully');
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
          {options.screenshotUri ? <Image source={{ uri: options.screenshotUri }} style={{ width: screenWidth - 40, height: 300 }} /> : null}
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
