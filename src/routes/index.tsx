import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import AppStack from './AppStack';
import { RadioButtonProvider } from '../hooks/radioButtonContext';

const Routes = () => {
  return (
    <NavigationContainer>
      <RadioButtonProvider>
        <AppStack />
      </RadioButtonProvider>
    </NavigationContainer>
  );
};

export default Routes;