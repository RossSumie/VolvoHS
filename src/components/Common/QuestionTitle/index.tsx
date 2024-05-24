import React, { ReactNode } from 'react';
import * as S from './styles';

interface MainTitleProps {
  children: ReactNode;
}

const QuestionTitle: React.FC<MainTitleProps> = ({ children }) => {
  return (
    <S.Wrapper>
      <S.Text>
        {children}
      </S.Text>
    </S.Wrapper>
  );
};

export default QuestionTitle;
