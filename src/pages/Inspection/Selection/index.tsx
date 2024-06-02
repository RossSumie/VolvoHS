import React, { useState, useCallback } from 'react';
//import { Dimensions } from 'react-native';
import * as S from './styles';
import { useNavigation } from '@react-navigation/core';
import { InspectionStackScreensProps } from '../../../routes/AppStack/OperatorFlowStack/InspectionFlowStack';
import Header from '../../../components/Common/HomeHeader';
import MainTitle from '../../../components/Common/MainTitle';
import Circle from '../../../components/Common/Circle';


const Selection = () => {

  const { navigate } = useNavigation<InspectionStackScreensProps>();

  return (
    <S.Wrapper>
      <Header/>
            <S.Container>
              <MainTitle>Self Inspection</MainTitle>
              <S.MenuButton onPress={()=> navigate('INSQuestionnaire', { screenshotUri: '' })}>
                <S.ButtonText>Cooling System Inspection</S.ButtonText>
                <S.InfoContainer>
                  <S.InfoColumn>
                    <S.InfoText>Concern Level</S.InfoText>
                    <S.InfoText>Dificulty</S.InfoText>
                  </S.InfoColumn>
                  <S.InfoColumn>
                    <S.InfoRow>
                    <Circle size={14} status={'average'}/>
                    <S.InfoText>50%</S.InfoText>
                    </S.InfoRow>
                    <S.InfoRow>
                    <Circle size={14} status={'good'}/>
                    <S.InfoText>Easy</S.InfoText>
                    </S.InfoRow>
                  </S.InfoColumn>
                </S.InfoContainer>
              </S.MenuButton>
              <S.MenuButton disabled = {true}>
                <S.ButtonText>
                Hydraulic System Inspection
                </S.ButtonText>
                <S.InfoContainer>
                  <S.InfoColumn>
                    <S.InfoText>Concern Level</S.InfoText>
                    <S.InfoText>Dificulty</S.InfoText>
                  </S.InfoColumn>
                  <S.InfoColumn>
                    <S.InfoRow>
                    <Circle size={14} status={'good'}/>
                    <S.InfoText>21%</S.InfoText>
                    </S.InfoRow>
                    <S.InfoRow>
                    <Circle size={14} status={'average'}/>
                    <S.InfoText>Intermediate</S.InfoText>
                    </S.InfoRow>
                  </S.InfoColumn>
                </S.InfoContainer>
              </S.MenuButton>
              <S.MenuButton disabled = {true}>
                <S.ButtonText>
                Moving Parts Inspection
                </S.ButtonText>
                <S.InfoContainer>
                  <S.InfoColumn>
                    <S.InfoText>Concern Level</S.InfoText>
                    <S.InfoText>Dificulty</S.InfoText>
                  </S.InfoColumn>
                  <S.InfoColumn>
                    <S.InfoRow>
                    <Circle size={14} status={'good'}/>
                    <S.InfoText>19%</S.InfoText>
                    </S.InfoRow>
                    <S.InfoRow>
                    <Circle size={14} status={'average'}/>
                    <S.InfoText>Intermediate</S.InfoText>
                    </S.InfoRow>
                  </S.InfoColumn>
                </S.InfoContainer>
              </S.MenuButton>
              <S.MenuButton disabled = {true}>
                <S.ButtonText>
                  Engine Lubrification Inpsection
                </S.ButtonText>
                <S.InfoContainer>
                  <S.InfoColumn>
                    <S.InfoText>Concern Level</S.InfoText>
                    <S.InfoText>Dificulty</S.InfoText>
                  </S.InfoColumn>
                  <S.InfoColumn>
                    <S.InfoRow>
                    <Circle size={14} status={'good'}/>
                    <S.InfoText>9%</S.InfoText>
                    </S.InfoRow>
                    <S.InfoRow>
                    <Circle size={14} status={'good'}/>
                    <S.InfoText>Easy</S.InfoText>
                    </S.InfoRow>
                  </S.InfoColumn>
                </S.InfoContainer>
              </S.MenuButton>
            </S.Container>
      </S.Wrapper>
  );
};

export default Selection;