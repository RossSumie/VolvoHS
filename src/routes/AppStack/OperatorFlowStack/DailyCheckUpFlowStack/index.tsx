import React from 'react';
import { StackNavigationProp, createStackNavigator } from '@react-navigation/stack';
import DCPageOne from '../../../../pages/DailyCheckUp/DCPageOne';
import DCPageTwo from '../../../../pages/DailyCheckUp/DCPageTwo';
import DCPageThree from '../../../../pages/DailyCheckUp/DCPageThree';
import DCReport from '../../../../pages/DailyCheckUp/Report';
import NotificationHome from '../../../../pages/Home/NotificationHome';

type DailyCheckUpStackScreens = {
  DCPageOne: undefined;
  DCPageTwo:{ screenshotUri: string };
  DCPageThree: undefined;
  DCReport : undefined;
  NotificationHome: undefined;
};

export type DailyCheckUpStackScreensProps = StackNavigationProp<DailyCheckUpStackScreens>;


const { Screen, Navigator } = createStackNavigator<DailyCheckUpStackScreens>();

const DailyCheckUpFlowStack = () => (
  <Navigator screenOptions={{ headerShown: false }}>
    <Screen name="DCPageOne" component={DCPageOne} />
    <Screen name="DCPageTwo" component={DCPageTwo} initialParams={{ screenshotUri: '' }}/>
    <Screen name="DCPageThree" component={DCPageThree} />
    <Screen name="DCReport" component={DCReport} />
    <Screen name="NotificationHome" component={NotificationHome} />

  </Navigator>
);

export default DailyCheckUpFlowStack;