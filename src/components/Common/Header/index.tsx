import React from 'react';
import * as S from './styles';
import { useNavigation } from '@react-navigation/core';
import LogoImg from '../../../assets/icons/Volvo-Spread-Word-Mark-Black.svg';
import BackIcon from '../../../assets/icons/Symbol_Arrow left_Black.svg';
import InfoIcon from '../../../assets/icons/Symbol_Info_Black.svg'


const Header = () => {
  const navigate = useNavigation();
  return (
    <S.Wrapper>
            <S.Button onPress={() => navigate.goBack()}>
                <BackIcon width={32}/>
            </S.Button>
            <S.LogoContainer>
              <LogoImg/>
            </S.LogoContainer>
            <S.Button>
              <S.Box/>
            </S.Button>
    </S.Wrapper>
  );
};

export default Header;