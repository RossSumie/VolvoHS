import styled from 'styled-components/native';

export const Wrapper = styled.View`
  flex: 1;
  background-color:'#FF6347';
`;

export const Container = styled.View`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 32px;
  width: 100%;
  gap: 16px;
`;

export const MenuButton = styled.TouchableOpacity`
  height: 60px;
  width: 100%;
  background-color: ${props => props.disabled ? '#E1DFDD' : 'white'};
  border-radius:8px;
  display: flex;
  flex-direction:row;
  align-items:center;
  padding: 0 24px;
  opacity: ${props => props.disabled ? 0.5 : 1};
  position: relative;
`;

export const IconContainer = styled.View`
  margin-right:16px;
`;

export const ButtonText = styled.Text`
  font-size: 20px;
  font-family: 'VolvoNovum3-Regular';
`;

export const NotificationCircle = styled.View`
  position: absolute;
  top: 0px;
  right: 0px;
  height: 24px;
  width: 24px;
  border-radius: 50px;
  background-color: red;
  display: flex;
  justify-content: center;
  align-items: center;
`;

