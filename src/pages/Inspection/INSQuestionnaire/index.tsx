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
import { postData, uploadFile, uploadFileV2 } from '../../../services/api'

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
      let uploadedImageUrl = '';
      uploadedImageUrl = await uploadFileV2('inspection/create-inspection-report', route.params.file);

      const payload = {
        radiator_cleanliness: 'NA',
        check_coolant_level: options.coolantLevel || "NA",
        check_fan_blades_wear: options.fanWear || "NA",
        check_fan_function: options.fanFunction || "NA",
        coolant_image_before: uploadedImageUrl, // Use URL returned from the server after image upload
        _id: "6655104290012ae1dacace97",
        Date: new Date().toISOString(),
      };

      //await postData('inspection/create-inspection-report', payload);
      console.log('Data submitted successfully');
      navigate('Report');
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
