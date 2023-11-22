import React from 'react';
import { View, Text, TextInput, Button, Alert } from 'react-native';
import { useState, useEffect } from 'react';
import { Contact, deleteContact, getContacts, updateContact } from '../utils/database';
import { RouteProp } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../navigation/types';
import { commonStyles } from '../styles/screenStyles';


type UpdateContactScreenRouteProp = RouteProp<RootStackParamList, 'UpdateContact'>;

type UpdateContactScreenNavigationProp = StackNavigationProp<RootStackParamList, 'UpdateContact'>;

type UpdateContactScreenProps = {
  route: UpdateContactScreenRouteProp;
  navigation: UpdateContactScreenNavigationProp;
};

const UpdateContactScreen = ({ route, navigation }: UpdateContactScreenProps) => {
  const { contactId } = route.params;
  const [name, setName] = useState<string>('');
  const [mobileNumber, setMobileNumber] = useState<string>('');
  const [landlineNumber, setLandlineNumber] = useState<string>('');
  const [isFavorite, setIsFavorite] = useState<boolean>(false);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);


  useEffect(() => {
    const loadContactDetails = async () => {
      const contacts = await getContacts();
      const selectedContact = contacts.find(contact => contact.id === contactId);

      if (selectedContact) {
        setName(selectedContact.name);
        setMobileNumber(selectedContact.mobileNumber);
        setLandlineNumber(selectedContact.landlineNumber);
        setIsFavorite(selectedContact.isFavorite);
      }
    };

    loadContactDetails();
  }, [contactId]);

  const handleUpdateContact = async () => {

    if (!name.trim() || !mobileNumber.trim()) {
      Alert.alert('Error', 'Name and Mobile Number are required.');
      return;
    }
    const updatedContact: Contact = {
      id: contactId,
      name,
      mobileNumber,
      landlineNumber,
      isFavorite,
      photo: selectedImage,
    };

    await updateContact(updatedContact);

    navigation.navigate('ContactList');
  };

  const handleDeleteContact = () => {
    Alert.alert(
      'Delete Contact',
      'Are you sure you want to delete this contact?',
      [
        { text: 'Cancel', style: 'cancel' },
        {
          text: 'Delete',
          style: 'destructive',
          onPress: async () => {
            try {
              await deleteContact(contactId);
              navigation.navigate('ContactList');

            } catch (error) {
              console.error('Error deleting contact:', error);
            }
          },
        },
      ],
      { cancelable: true }
    );
  };


  return (
    <View style={commonStyles.container}>
      <Text style={commonStyles.title}>Update Contact</Text>

      <TextInput
        style={commonStyles.input}
        placeholder="Name"
        value={name}
        onChangeText={setName} />

      <TextInput
        style={commonStyles.input}
        keyboardType='numeric'
        placeholder="Mobile Number"
        value={mobileNumber}
        onChangeText={setMobileNumber} />

      <TextInput
        style={commonStyles.input}
        keyboardType='numeric'
        placeholder="Landline Number"
        value={landlineNumber}
        onChangeText={setLandlineNumber} />

      <TextInput
        style={commonStyles.input}
        placeholder="Photo URL"
        onChangeText={setSelectedImage}
      />
      <View>
        <Button title={isFavorite ? 'Unmark as Favorite' : 'Mark as Favorite'} onPress={() => setIsFavorite(!isFavorite)} />
      </View>
      <Button title="Update" onPress={handleUpdateContact} />
      <Button title="Delete" onPress={handleDeleteContact} color="red" />
    </View>
  );
};

export default UpdateContactScreen;
