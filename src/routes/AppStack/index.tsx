import React from 'react';
import {
  createStackNavigator,
  StackNavigationProp,
} from '@react-navigation/stack';
import OperatorFlowStack from './OperatorFlowStack';

const { Screen, Navigator } = createStackNavigator();

const AppStack = () => {

  return (
    <Navigator screenOptions={{ headerShown: false }}>
          <Screen name="OperatorFlow" component={OperatorFlowStack} />
    </Navigator>
  );
};

export default AppStack;