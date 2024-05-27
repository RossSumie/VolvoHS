import React, { useState, useEffect } from 'react';
import { View, Button, Text } from 'react-native';
import Voice from 'react-native-voice';
import * as S from './styles';
import Header from '../../components/Common/Header';
import MainTitle from '../../components/Common/MainTitle';
import { useNavigation } from '@react-navigation/core';
import { OperatorStackScreensProps } from '../../routes/AppStack/OperatorFlowStack';
import QuestionTitle from '../../components/Common/QuestionTitle';
import CameraIcon from '../../assets/icons/Device_Camera_White.svg';

const SelfReport = () => {
  const { navigate } = useNavigation<OperatorStackScreensProps>();
  const [isListening, setIsListening] = useState(false);
  const [result, setResult] = useState('');

  useEffect(() => {
    Voice.onSpeechResults = onSpeechResults;
    Voice.onSpeechError = onSpeechError;

    // Cleanup function to remove event listeners and release resources
    return () => {
      Voice.destroy().then(Voice.removeAllListeners);
    };
  }, []);

  const startListening = () => {
    Voice.start('en-US')
      .then(() => setIsListening(true))
      .catch((error: any) => console.error('Error starting voice recognition:', error));
  };

  const stopListening = () => {
    Voice.stop()
      .then(() => setIsListening(false))
      .catch((error: any) => console.error('Error stopping voice recognition:', error));
  };

  const onSpeechResults = (e: { value: React.SetStateAction<string>[]; }) => {
    setResult(e.value[0]);
  };

  const onSpeechError = (e: { error: any; }) => {
    console.error('Speech recognition error:', e.error);
  };

  return (
    <S.Wrapper>
      <Header />
      <S.Container>
        <MainTitle>Would you like to report any issues with your machine?</MainTitle>
        <QuestionTitle>Click the microphone button below and record a brief audio message. Describe the issue you have noticed in as much detail as possible</QuestionTitle>
        
        <View style={{ alignItems: 'center', marginVertical: 20 }}>
          <Button
            title={isListening ? "Stop Listening" : "Start Listening"}
            onPress={isListening ? stopListening : startListening}
          />
          <Text style={{ marginTop: 20 }}>Result: {result}</Text>
        </View>
        
        <QuestionTitle>You can add pictures to your report by clicking the camera button below</QuestionTitle>
        <S.CameraButton>
          <CameraIcon width={32} />
        </S.CameraButton>
      </S.Container>
    </S.Wrapper>
  );
};

export default SelfReport;
