import React from 'react';
import * as S from './styles';
import Header from '../../../components/Common/Header';
import MainTitle from '../../../components/Common/MainTitle';
import { useNavigation } from '@react-navigation/core';
import { OperatorStackScreensProps } from '../../../routes/AppStack/OperatorFlowStack';
import DCIcon from '../../../assets/icons/Time_Set time_Black.svg';
import INSIcon from '../../../assets/icons/Safety_Risk assessment_Black.svg';
import MHIcon from '../../../assets/icons/Finance_Line chart down_Black.svg';
import TGIcon from '../../../assets/icons/Action_Future tech_Black.svg';
import SRIcon from '../../../assets/icons/World_Ongoing chat_Black.svg';
import HomeHeader from '../../../components/Common/Header';
import NotificationIcon from '../../../assets/icons/white_exclamation.svg'

const NotificationHome = () => {
  const { navigate } = useNavigation<OperatorStackScreensProps>();

  return (
    <S.Wrapper>
      <HomeHeader/>
      <S.Container>
        <MainTitle>How can we assist you today?</MainTitle>
        <S.MenuButton onPress={() => navigate('DailyCheckUp')}>
          <S.IconContainer>
            <DCIcon width={32}/>
          </S.IconContainer>
          <S.ButtonText>
            Daily Checkup
          </S.ButtonText>
        </S.MenuButton>
        <S.MenuButton onPress={() => navigate('Inspection')}>
          <S.IconContainer>
            <INSIcon width={32}/>
          </S.IconContainer>
          <S.ButtonText>
            Inspection
          </S.ButtonText>
          <S.NotificationCircle>
            <NotificationIcon width={32} height={32} />
          </S.NotificationCircle>
        </S.MenuButton>
        <S.MenuButton onPress={() => navigate('SelfReport')}>
          <S.IconContainer>
            <SRIcon width={32}/>
          </S.IconContainer>
          <S.ButtonText>
            Self Report
          </S.ButtonText>
        </S.MenuButton>
        <S.MenuButton onPress={() => navigate('MachineHealthStatus')}>
          <S.IconContainer>
            <MHIcon width={32}/>
          </S.IconContainer>
          <S.ButtonText>
            Machine Health Status
          </S.ButtonText>
        </S.MenuButton>
        <S.MenuButton disabled={true}>
          <S.IconContainer>
            <TGIcon width={32}/>
          </S.IconContainer>
          <S.ButtonText>
            Troubleshoot Guide
          </S.ButtonText>
        </S.MenuButton>
      </S.Container>
    </S.Wrapper>
  );
};

export default NotificationHome;
