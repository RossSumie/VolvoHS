import React from 'react';
import { StackNavigationProp, createStackNavigator } from '@react-navigation/stack';
import RadiatorAR from '../../../../pages/Inspection/RadiatorAR';
import INSQuestionnaire from '../../../../pages/Inspection/INSQuestionnaire';
import Report from '../../../../pages/Inspection/Report';

type InspectionStackScreens = {
  INSQuestionnaire:{ screenshotUri: string };
  RadiatorAR: undefined;
  Report: undefined;
};

export type InspectionStackScreensProps = StackNavigationProp<InspectionStackScreens>;


const { Screen, Navigator } = createStackNavigator<InspectionStackScreens>();

const InspectionFlowStack = () => (
  <Navigator screenOptions={{ headerShown: false }}>
    <Screen name="INSQuestionnaire" component={INSQuestionnaire} initialParams={{ screenshotUri: '' }}/>
    <Screen name="Report" component={Report} />
    <Screen name="RadiatorAR" component={RadiatorAR} />
  </Navigator>
);

export default InspectionFlowStack;