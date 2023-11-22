import type { NativeStackScreenProps } from '@react-navigation/native-stack';

export type RootStackParamList = {
  BudgetEntry: undefined;
  BudgetListing: undefined;
};

export type ScreenProp = NativeStackScreenProps<RootStackParamList>;