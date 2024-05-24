import styled, { css } from 'styled-components/native';

export const Wrapper = styled.View`
  ${({ theme }) => css`
    width: 100%;
    display: flex;
    margin-bottom:16px;
  `}
`;

export const Text = styled.Text`
  ${({ theme }) => css`
    color: ${theme.colors.black};
    font-size: 24px;
    font-family:'VolvoNovum3-Bold';
    text-align: left;
 `}
`