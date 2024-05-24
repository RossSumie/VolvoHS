import styled from 'styled-components/native';

export const Wrapper = styled.View`
  flex:1;
`;

export const CameraButton = styled.TouchableOpacity`
  width: 64px;
  height: 64px;
  background-color: 'white';
  border-radius: 20px;
  position: absolute; // Set position to absolute
  bottom: 20px; // Position it at the bottom of the screen
  right: 20px; // Position it to the right
  z-index: 1000; // Ensure it's above other components
`;
