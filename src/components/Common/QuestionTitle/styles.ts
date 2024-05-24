import styled, { css } from 'styled-components/native';

export const Wrapper = styled.View`
  ${({ theme }) => css`
    width: 100%;
    display: flex;
  `}
`;

export const Text = styled.Text`
  ${({ theme }) => css`
    color: ${theme.colors.black};
    font-size: 16px;
    font-family:'VolvoNovum3-Regular';
    text-align: left;
 `}
`