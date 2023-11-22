import React from 'react';
import { View, Button } from 'react-native';
import { HomeScreenNavigationProp, HomeScreenRouteProp } from '../navigation/types';


interface HomeScreenProps {
    route: HomeScreenRouteProp;
    navigation: HomeScreenNavigationProp;
  }

const HomeScreen = ({ navigation }: HomeScreenProps) => {

  const navigateToContactList = () => {
    navigation.navigate('ContactList');
  };

  const navigateToFavoriteContactList = () => {
    navigation.navigate('FavoriteContactList');
  };

  return (
    <View>
      <Button title="Go to Contact List" onPress={navigateToContactList} />
      <Button title="Go to Favorite Contacts" onPress={navigateToFavoriteContactList} />
    </View>
  );
};

export default HomeScreen;
