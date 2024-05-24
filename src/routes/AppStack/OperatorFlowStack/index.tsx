import React from 'react';
import { createStackNavigator, StackNavigationProp } from '@react-navigation/stack';
import Home from '../../../pages/Home';
import CoolantAR from '../../../pages/CoolantAR';
import DailyCheckUpFlowStack from './DailyCheckUpFlowStack';

export type OperatorStackScreens = {
  Home: undefined;
  DailyCheckUp: undefined;
};

export type OperatorStackScreensProps = StackNavigationProp<OperatorStackScreens>;

const { Screen, Navigator } = createStackNavigator<OperatorStackScreens>();

const OperatorFlowStack = () => (
  <Navigator screenOptions={{ headerShown: false }}>
    <Screen name="Home" component={Home} />
    <Screen name="DailyCheckUp" component={DailyCheckUpFlowStack} />
  </Navigator>
);

export default OperatorFlowStack;