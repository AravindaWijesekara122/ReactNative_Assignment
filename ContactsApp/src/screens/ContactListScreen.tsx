import React, { useState, useEffect } from 'react';
import { View, Text, Button, FlatList, TouchableOpacity, Image, StyleSheet, TextInput } from 'react-native';
import { ContactListScreenRouteProp, ContactListScreenNavigationProp } from '../navigation/types';
import { Contact, getContacts } from '../utils/database';
import { commonStyles } from '../styles/screenStyles';


interface ContactListScreenProps {
  route: ContactListScreenRouteProp;
  navigation: ContactListScreenNavigationProp;
}

const ContactListScreen = ({ navigation }: ContactListScreenProps) => {
  const [contacts, setContacts] = useState<Contact[]>([]);

  useEffect(() => {
    const fetchContacts = async () => {
      try {
        const fetchedContacts = await getContacts();
        setContacts(fetchedContacts);
      } catch (error) {
        console.error('Error fetching contacts:', error);
      }
    };

    fetchContacts();
  }, []);

  const handleAddContact = () => {
    navigation.navigate('CreateContact');
  };

  const handleContactPress = (contactId: string) => {
    navigation.navigate('UpdateContact', { contactId });
  };

  const renderItem = ({ item }: { item: Contact }) => (
    <TouchableOpacity onPress={() => handleContactPress(item.id)}>
      <View style={commonStyles.listItem}>
        <Text style={commonStyles.listItemText}>{item.name}</Text>
        <Text style={{ fontSize: 16, color: '#555' }}>{item.mobileNumber}</Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={commonStyles.container}>
      <Text style={commonStyles.title}>Contact List</Text>
      <FlatList
        data={contacts}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
      />
      <Button title="Add" onPress={handleAddContact} />
    </View>
  );
};

export default ContactListScreen;
