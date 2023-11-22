import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { RootStackParamList } from './types';
import HomeScreen from '../screens/HomeScreen';
import ContactListScreen from '../screens/ContactListScreen';
import CreateContactScreen from '../screens/CreateContactScreen';
import UpdateContactScreen from '../screens/UpdateContactScreen';
import FavoriteContactListScreen from '../screens/FavoriteContactListScreen';

const Stack = createStackNavigator<RootStackParamList>();

const StackNavigator = () => {
    return (
        <Stack.Navigator initialRouteName="Home">
            <Stack.Screen name="Home" component={HomeScreen} />
            <Stack.Screen name="ContactList" component={ContactListScreen} />
            <Stack.Screen name="CreateContact" component={CreateContactScreen} />
            <Stack.Screen name="UpdateContact" component={UpdateContactScreen} />
            <Stack.Screen name="FavoriteContactList" component={FavoriteContactListScreen} />
        </Stack.Navigator>
    );
};

export default StackNavigator;
