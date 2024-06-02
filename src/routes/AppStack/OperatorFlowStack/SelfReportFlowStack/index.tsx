import React from 'react';
import { StackNavigationProp, createStackNavigator } from '@react-navigation/stack';
import Home from '../../../../pages/Home';
import SelfReportInput from '../../../../pages/SelfReport/SelfReportInput';
import SelfReportResult from '../../../../pages/SelfReport/SelfReportResult';
import InspectionFlowStack from '../InspectionFlowStack';


type SelfReportStackScreens = {
  SelfReportInput: undefined;
  SelfReportResult: undefined;
  Home: undefined;
  Inspection: undefined;
};

export type SelfReportStackScreensProps = StackNavigationProp<SelfReportStackScreens>;


const { Screen, Navigator } = createStackNavigator<SelfReportStackScreens>();

const SelfReportFlowStack = () => (
  <Navigator screenOptions={{ headerShown: false }}>
    <Screen name="SelfReportInput" component={SelfReportInput} />
    <Screen name="SelfReportResult" component={SelfReportResult} />
    <Screen name="Home" component={Home} />
    <Screen name="Inspection" component={InspectionFlowStack} />

    
  </Navigator>
);

export default SelfReportFlowStack;