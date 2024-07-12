import React, { useEffect, useState } from 'react';
import { Dimensions, Image, ActivityIndicator } from 'react-native';
import * as S from './styles';
import Header from '../../../components/Common/Header';
import MainTitle from '../../../components/Common/MainTitle';
import { useNavigation } from '@react-navigation/core';
import { InspectionStackScreensProps } from '../../../routes/AppStack/OperatorFlowStack/InspectionFlowStack';
import NextIcon from '../../../assets/icons/Symbol_Arrow right_White.svg';
import ReportInformation from '../../../components/ReportInformation';
import { useRadioButton } from '../../../hooks/radioButtonContext';
import { api } from '../../../services/api'; // Use the api instance you set up

const Report: React.FC<{ route: any }> = ({ route }) => {
  const { options, clearOptions } = useRadioButton();
  const screenWidth = Dimensions.get('window').width;
  const { navigate } = useNavigation<InspectionStackScreensProps>();
  const [analyzedImageUrl, setAnalyzedImageUrl] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(true); // State to track loading

  const handleSend = () => {
    clearOptions();
    navigate('Home');
  };
  

  useEffect(() => {
    const fetchAnalyzedImage = async () => {
      try {
        const id = route.params?.id;
        if (id) {
          const response = await api.get(`/inspection/inspection-report/${id}`);
          setAnalyzedImageUrl(response.data.radiator_image_analyzed);
        }
      } catch (error) {
        console.error('Failed to fetch analyzed image:', error);
      } finally {
        setIsLoading(false); // Set loading to false after fetching
      }
    };

    fetchAnalyzedImage();
  }, [route.params?.id]);

  return (
    <S.Wrapper>
      <Header />
      <S.Container>
        <S.PageTitle>Inspection Report</S.PageTitle>
        <ReportInformation />
        <S.QuestionContainer>
          <MainTitle>Inspected Concern</MainTitle>
          <S.ReportValue>Possible problems in cooling system</S.ReportValue>
        </S.QuestionContainer>
        <S.QuestionContainer>
          <MainTitle>Reason for Concern</MainTitle>
          <S.ReportValue>We have noticed repeated abnormal temperature increases without environmental or workload causes</S.ReportValue>
        </S.QuestionContainer>
        <MainTitle>Raw Images</MainTitle>
        <S.Report>
          {Object.entries(options).map(([key, value]) => (
            key.includes('screenshotUri') && value && (
              <S.ReportDetails key={key}>
                <S.RawImageContainer>
                  <Image source={{ uri: value }} style={{ width: screenWidth - 80, height: 400 }} resizeMode="contain" />
                </S.RawImageContainer>
              </S.ReportDetails>
            )
          ))}
        </S.Report>
        <MainTitle>Report Log</MainTitle>
        <S.Report>
          {Object.entries(options).map(([key, value]) => (
            !key.includes('screenshotUri') && (
              <S.ReportDetails key={key}>
                <S.ReportColumn>
                  <S.ReportLabel>{key.replace(/([a-z])([A-Z])/g, '$1 $2').replace(/^./, str => str.toUpperCase())}:</S.ReportLabel>
                </S.ReportColumn>
                <S.ReportColumn>
                  <S.ReportValue>{value.replace(/([a-z])([A-Z])/g, '$1 $2').replace(/^./, str => str.toUpperCase()) || 'N/A'}</S.ReportValue>
                </S.ReportColumn>
              </S.ReportDetails>
            )
          ))}
        </S.Report>
        <MainTitle>Preventive Actions</MainTitle>
        <S.ReportValue>Run the excavator at decreased power and order a new radiator.</S.ReportValue>
            {analyzedImageUrl && (
            <>
              <MainTitle>Analyzed images</MainTitle>
              <S.ReportDetails>
                <S.RawImageContainer>
                  <Image source={{ uri: analyzedImageUrl }} style={{ width: screenWidth - 80, height: 400 }} resizeMode="contain" />
                </S.RawImageContainer>
              </S.ReportDetails>
              </>
            )
          }
        <S.NextButton onPress={handleSend}>
          <S.NextButtonText>Send</S.NextButtonText>
          <NextIcon width={24} />
        </S.NextButton>
      </S.Container>
    </S.Wrapper>
  );
};

export default Report;