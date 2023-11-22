import { RouteProp } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';

export type RootStackParamList = {
  Home: undefined;
  ContactList: undefined;
  CreateContact: undefined;
  UpdateContact: { contactId: string };
  FavoriteContactList: undefined;
};

export type HomeScreenRouteProp = RouteProp<RootStackParamList, 'Home'>;
export type ContactListScreenRouteProp = RouteProp<RootStackParamList, 'ContactList'>;
export type CreateContactScreenRouteProp = RouteProp<RootStackParamList, 'CreateContact'>;
export type UpdateContactScreenRouteProp = RouteProp<RootStackParamList, 'UpdateContact'>;
export type FavoriteContactListScreenRouteProp = RouteProp<RootStackParamList, 'FavoriteContactList'>;

export type HomeScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Home'>;
export type ContactListScreenNavigationProp = StackNavigationProp<RootStackParamList, 'ContactList'>;
export type CreateContactScreenNavigationProp = StackNavigationProp<RootStackParamList, 'CreateContact'>;
export type UpdateContactScreenNavigationProp = StackNavigationProp<RootStackParamList, 'UpdateContact'>;
export type FavoriteContactListScreenNavigationProp = StackNavigationProp<RootStackParamList, 'FavoriteContactList'>;

