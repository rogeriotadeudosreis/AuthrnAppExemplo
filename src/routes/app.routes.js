import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import Tags from '../pages/Tags';

const AppStack = createStackNavigator();

export default function AppRoutes() {
  return (
    <AppStack.Navigator>
      <AppStack.Screen
        options={{headerShown: false}}
        name="Tags"
        component={Tags}
      />
    </AppStack.Navigator>
  );
}
