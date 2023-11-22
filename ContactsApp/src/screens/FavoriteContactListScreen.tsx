import React from 'react';
import { View, Text } from 'react-native';
import { useState, useEffect } from 'react';
import { Contact, getContacts } from '../utils/database';
import { commonStyles} from '../styles/screenStyles';

const FavoriteContactListScreen = () => {
  const [favoriteContacts, setFavoriteContacts] = useState<Contact[]>([]);

  useEffect(() => {
    const loadFavoriteContacts = async () => {
      const contacts = await getContacts();
      const favorites = contacts.filter(contact => contact.isFavorite);
      setFavoriteContacts(favorites);
    };

    loadFavoriteContacts();
  }, []);

  return (
    <View style={commonStyles.container}>
      <Text style={commonStyles.title}>Favorite Contact List</Text>
      {favoriteContacts.map(contact => (
        <View key={contact.id}>
          <Text style={commonStyles.listItemText}>{contact.name}</Text>
        </View>
      ))}
    </View>
  );
};

export default FavoriteContactListScreen;


