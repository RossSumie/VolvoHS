import React, { useState, useCallback } from 'react';
//import { Dimensions } from 'react-native';
import * as S from './styles';
import Header from '../../components/Common/Header';

const MachineSelection = () => {
  //const { width } = Dimensions.get('screen');

  //const [currentIndex, setCurrentIndex] = useState(0);

  return (
    <S.Wrapper>
      <S.LogoWrapper>
            <Header/>
            <S.Container>
              <S.MachineButton>AY</S.MachineButton>
            </S.Container>
      </S.LogoWrapper>
      </S.Wrapper>
  );
};

export default MachineSelection;