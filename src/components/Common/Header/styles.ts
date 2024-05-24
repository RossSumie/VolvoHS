import styled, { css } from 'styled-components/native';

export const Wrapper = styled.View`
  ${({ theme }) => css`
    height: 64px;
    width: 100%;
    background-color: ${theme.colors.white};
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    padding: 24px;
    position: fixed;
    top:0;
  `}
`;

export const Box = styled.View`
  width: 24px;
`;

export const Button = styled.TouchableOpacity`
`;

export const ButtonText = styled.Text`
  ${({ theme }) => css`
    color: ${theme.colors.black};
    font-size: 12px;
    font-family: ${theme.font.MontserratBold};
 `}
`

export const LogoContainer = styled.View`
  width:80px;
`