import React from 'react';
import { createStackNavigator, StackNavigationProp } from '@react-navigation/stack';
import Home from '../../../pages/Home';
import DailyCheckUpFlowStack from './DailyCheckUpFlowStack';
import InspectionFlowStack from './InspectionFlowStack';
import MachineHealthStatus from '../../../pages/MachineHealthStatus';
import SelfReportFlowStack from './SelfReportFlowStack';
import NotificationHome from '../../../pages/Home/NotificationHome';

export type OperatorStackScreens = {
  Home: undefined;
  NotificationHome: undefined;
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
    <Screen name="NotificationHome" component={NotificationHome} />
    <Screen name="DailyCheckUp" component={DailyCheckUpFlowStack} />
    <Screen name="Inspection" component={InspectionFlowStack} />
    <Screen name="MachineHealthStatus" component={MachineHealthStatus} />
    <Screen name="SelfReport" component={SelfReportFlowStack} />
  </Navigator>
);

export default OperatorFlowStack;