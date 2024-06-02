import React, { useState, useEffect } from 'react';
import { Text, View } from 'react-native';
import * as Progress from 'react-native-progress';
import * as S from './styles';
import Header from '../../components/Common/Header';
import ReportInformation from '../../components/ReportInformation';
import Circle from '../../components/Common/Circle';
import Exclamation from '../../assets/icons/exclamation.svg'
import MainTitle from '../../components/Common/MainTitle';
import { useNavigation } from '@react-navigation/native';
import { OperatorStackScreensProps } from '../../routes/AppStack/OperatorFlowStack';

const MachineHealthStatus = () => {
  const [activeTab, setActiveTab] = useState('tab1');
  const [progress, setProgress] = useState(0);
  const { navigate } = useNavigation<OperatorStackScreensProps>();


  useEffect(() => {
    let intervalId: string | number | NodeJS.Timeout | undefined;
    if (activeTab === 'tab1') {
      setProgress(0);  // Reset progress when the tab is selected
      intervalId = setInterval(() => {
        setProgress(prevProgress => {
          const nextProgress = prevProgress + 0.1;
          if (nextProgress >= 0.82) {
            clearInterval(intervalId);
            return 0.82;  // Maximum progress
          }
          return nextProgress;  // Increment progress
        });
      }, 100);  // Interval for incrementing progress
    } else {
      setProgress(0);  // Reset progress if not on tab1
    }

    return () => clearInterval(intervalId);  // Clean up the interval on component unmount or tab change
  }, [activeTab]);

  // Determine the color of the progress circle based on completion
  const progressColor = progress >= 0.82 ? '#8fc54e' : '#202a44';

  return (
    <S.Wrapper>
      <Header />
      <S.Container>
        <S.PageTitleView>
          <S.PageTitle>Machine Health Status</S.PageTitle>
        </S.PageTitleView>
        <S.TabContainer>
          <S.Tab
            isActive={activeTab === 'tab1'}
            onPress={() => setActiveTab('tab1')}
          >
            <S.TabTitle>HEALTH OVERVIEW</S.TabTitle>
          </S.Tab>
          <S.Tab
            isActive={activeTab === 'tab2'}
            onPress={() => setActiveTab('tab2')}
          >
            <S.TabTitle>IRREGULARITIES</S.TabTitle>
          </S.Tab>
        </S.TabContainer>
          {activeTab === 'tab1' ? (
            <S.ContentContainer>
              <ReportInformation/>
              <View style={{ alignItems: 'center', justifyContent: 'center', margin: 32}}>
                <Progress.Circle
                  size={150}
                  progress={progress}
                  showsText={true}
                  formatText={(progressValue) => `${Math.round(progressValue * 100)}%`}
                  thickness={30}
                  color={progressColor}  // Dynamic color based on progress
                  unfilledColor="#E1DFDD"
                  borderWidth={0}
                  strokeCap="round"
                />
              </View>
              <S.ReportDetailsOverview>
                  <S.ReportColumn>
                    <S.ReportLabel>Engine</S.ReportLabel>
                    <S.ReportLabel>Tracks</S.ReportLabel>
                    <S.ReportLabel>Hydraulics System</S.ReportLabel>
                    <S.ReportLabel>Cooling System</S.ReportLabel>
                    <S.ReportLabel>Electrical System</S.ReportLabel>
                  </S.ReportColumn>
                  <S.ReportColumn>
                    <S.ReportValue>92%</S.ReportValue>
                    <S.ReportValue>92%</S.ReportValue>
                    <S.ReportValue>99%</S.ReportValue>
                    <S.ReportValue>61%</S.ReportValue>
                    <S.ReportValue>88%</S.ReportValue>
                  </S.ReportColumn>
                  <S.ReportColumn>
                    <Circle size={16} status='good'/>
                    <Circle size={16} status='good'/>
                    <Circle size={16} status='good'/>
                    <Circle size={16} status='average'/>
                    <Circle size={16} status='good'/>
                  </S.ReportColumn>
              </S.ReportDetailsOverview>
            </S.ContentContainer>
          ) : (
            <S.ContentContainer style={{gap: 16}}>
            <S.ReportDetails>
              <S.ReportColumn style ={{padding: 32}}>
                <S.TagView style={{backgroundColor: '#ffe600'}}>
                  <S.TagText>CONCERN</S.TagText>
                </S.TagView>
                <S.ReportRow style={{ justifyContent: 'space-between', width: '100%'}}>
                  <S.ReportLabel>Cooling System</S.ReportLabel>
                  <Circle size={16} status='average'/>
              </S.ReportRow>
              <S.ReportRow style ={{gap:16}}>
                <Exclamation width={16} height={16}/>
                <S.ReportValue>Abnormal temperature rises without enviromental or workload causes</S.ReportValue>
              </S.ReportRow>  
              <S.ReportRow style ={{gap:16}}>
               <Exclamation width={16} height={16}/>
                <S.ReportValue>Initial inspection shows possible belt tightness problems</S.ReportValue>
              </S.ReportRow>
              </S.ReportColumn>
            </S.ReportDetails>
            <S.ReportDetails>
              <S.ReportColumn style ={{padding: 32}} >
                <S.TagView style={{backgroundColor:'#ff0000'}}>
                    <S.TagText style ={{color: 'white'}}>FAULT</S.TagText>
                </S.TagView>   
                <S.ReportRow style={{ justifyContent: 'space-between', width: '100%'}}>
                  <S.ReportLabel>Air Conditioning</S.ReportLabel>
                  <Circle size={16} status='bad'/>
              </S.ReportRow>
              <S.ReportRow style ={{gap:16, width: '90%'}}>
                <Exclamation width={16} height={16}/>
                <S.ReportValue>Operator reports and cabin sensors indicate the air conditioning system is not working</S.ReportValue>
              </S.ReportRow>  
              </S.ReportColumn>
              <S.InspectionRedirection onPress={()=> navigate('Inspection')}>
                  <S.InspectionRedirectionText>Do inspection</S.InspectionRedirectionText>
                </S.InspectionRedirection>
            </S.ReportDetails>
            <S.ReportDetails>
              <S.ReportColumn style ={{padding: 32}}>
                <S.TagView style={{backgroundColor: '#ffe600'}}>
                  <S.TagText>CONCERN</S.TagText>
                </S.TagView>
                <S.ReportRow style={{ justifyContent: 'space-between', width: '100%'}}>
                  <S.ReportLabel>Abnormal Vibrations</S.ReportLabel>
                  <Circle size={16} status='average'/>
              </S.ReportRow>
              <S.ReportRow style ={{gap:16}}>
                <Exclamation width={16} height={16}/>
                <S.ReportValue>Sensors and operator reports indicate possible excessive vibrations during engine startup</S.ReportValue>
              </S.ReportRow>  
              </S.ReportColumn>
              <S.InspectionRedirection onPress={()=> navigate('Inspection')}>
                  <S.InspectionRedirectionText>Do inspection</S.InspectionRedirectionText>
                </S.InspectionRedirection>
            </S.ReportDetails>
            <MainTitle>Analyzes Images</MainTitle>
            </S.ContentContainer>
          )}
      </S.Container>
    </S.Wrapper>
  );
};

export default MachineHealthStatus
