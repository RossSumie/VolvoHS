import React from 'react';
import { StackNavigationProp, createStackNavigator } from '@react-navigation/stack';
import RadiatorAR from '../../../../pages/Inspection/RadiatorAR';
import INSQuestionnaire from '../../../../pages/Inspection/INSQuestionnaire';
import Report from '../../../../pages/Inspection/Report';
import Home from '../../../../pages/Home';
import Selection from '../../../../pages/Inspection/Selection';
import LoadingScreen from '../../../../pages/Inspection/LoadingScreen';

type InspectionStackScreens = {
  Selection: undefined;
  INSQuestionnaire: { screenshotUri: string };
  RadiatorAR: undefined;
  Loading: undefined;
  Report: { id: string };
  Home: undefined;
};

export type InspectionStackScreensProps = StackNavigationProp<InspectionStackScreens>;

const { Screen, Navigator } = createStackNavigator<InspectionStackScreens>();

const InspectionFlowStack = () => (
  <Navigator 
    screenOptions={{ headerShown: false }}
    initialRouteName="Selection"
  >
    <Screen name="Selection" component={Selection} />
    <Screen name="INSQuestionnaire" component={INSQuestionnaire} initialParams={{ screenshotUri:'' }} />
    <Screen name="Report" component={Report} />
    <Screen name="RadiatorAR" component={RadiatorAR} />
    <Screen name="Home" component={Home} />
    <Screen name="Loading" component={LoadingScreen} />
  </Navigator>
);

export default InspectionFlowStack;
