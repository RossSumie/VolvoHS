import React from 'react';
import { createStackNavigator, StackNavigationProp } from '@react-navigation/stack';
import Home from '../../../pages/Home';
import DailyCheckUpFlowStack from './DailyCheckUpFlowStack';
import InspectionFlowStack from './InspectionFlowStack';
import MachineHealthStatus from '../../../pages/MachineHealthStatus';
import SelfReport from '../../../pages/SelfReport';

export type OperatorStackScreens = {
  Home: undefined;
  DailyCheckUp: undefined;
  Inspection: undefined;
  MachineHealthStatus: undefined;
  SelfReport: undefined;
  
};

export type OperatorStackScreensProps = StackNavigationProp<OperatorStackScreens>;

const { Screen, Navigator } = createStackNavigator<OperatorStackScreens>();

const OperatorFlowStack = () => (
  <Navigator screenOptions={{ headerShown: false }}>
    <Screen name="Home" component={Home} />
    <Screen name="DailyCheckUp" component={DailyCheckUpFlowStack} />
    <Screen name="Inspection" component={InspectionFlowStack} />
    <Screen name="MachineHealthStatus" component={MachineHealthStatus} />
    <Screen name="SelfReport" component={SelfReport} />
  </Navigator>
);

export default OperatorFlowStack;