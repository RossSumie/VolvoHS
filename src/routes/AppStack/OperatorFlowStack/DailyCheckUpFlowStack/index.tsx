import React from 'react';
import { StackNavigationProp, createStackNavigator } from '@react-navigation/stack';
import DCPageOne from '../../../../pages/DailyCheckUp/DCPageOne';
import DCPageTwo from '../../../../pages/DailyCheckUp/DCPageTwo';
import RadiatorAR from '../../../../pages/DailyCheckUp/RadiatorAR';
import DCPageThree from '../../../../pages/DailyCheckUp/DCPageThree';
import DCReport from '../../../../pages/DailyCheckUp/Report';
import Home from '../../../../pages/Home';
import CoolantAR from '../../../../pages/CoolantAR';

type DailyCheckUpStackScreens = {
  DCPageOne: undefined;
  DCPageTwo:{ screenshotUri: string };
  DCPageThree: undefined;
  DCReport : undefined;
  RadiatorAR: undefined;
  CoolantAR: undefined;
};

export type DailyCheckUpStackScreensProps = StackNavigationProp<DailyCheckUpStackScreens>;


const { Screen, Navigator } = createStackNavigator<DailyCheckUpStackScreens>();

const DailyCheckUpFlowStack = () => (
  <Navigator screenOptions={{ headerShown: false }}>
    <Screen name="DCPageOne" component={DCPageOne} />
    <Screen name="DCPageTwo" component={DCPageTwo} initialParams={{ screenshotUri: '' }}/>
    <Screen name="CoolantAR" component={CoolantAR} />
    <Screen name="DCPageThree" component={DCPageThree} />
    <Screen name="DCReport" component={DCReport} />
    <Screen name="RadiatorAR" component={RadiatorAR} />
  </Navigator>
);

export default DailyCheckUpFlowStack;