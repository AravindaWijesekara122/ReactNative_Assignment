import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import BudgetEntryScreen from '../screens/BudgetEntryScreen';
import BudgetListingScreen from '../screens/BudgetListingScreen';
import { RootStackParamList } from './navigationTypes';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator<RootStackParamList>();

const MainNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="BudgetEntry" component={BudgetEntryScreen} />
        <Stack.Screen name="BudgetListing" component={BudgetListingScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default MainNavigator;
