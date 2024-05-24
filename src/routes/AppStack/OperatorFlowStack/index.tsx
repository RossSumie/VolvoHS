import React from 'react';
import { createStackNavigator, StackNavigationProp } from '@react-navigation/stack';
import Home from '../../../pages/Home';
import DailyCheckUpFlowStack from './DailyCheckUpFlowStack';
import InspectionFlowStack from './InspectionFlowStack';

export type OperatorStackScreens = {
  Home: undefined;
  DailyCheckUp: undefined;
  Inspection: undefined;
  
};

export type OperatorStackScreensProps = StackNavigationProp<OperatorStackScreens>;

const { Screen, Navigator } = createStackNavigator<OperatorStackScreens>();

const OperatorFlowStack = () => (
  <Navigator screenOptions={{ headerShown: false }}>
    <Screen name="Home" component={Home} />
    <Screen name="DailyCheckUp" component={DailyCheckUpFlowStack} />
    <Screen name="Inspection" component={InspectionFlowStack} />

  </Navigator>
);

export default OperatorFlowStack;