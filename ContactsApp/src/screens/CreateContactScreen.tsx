// src/screens/CreateContactScreen.tsx
import React, { useEffect, useState } from 'react';
import { View, Text, TextInput, Button, Image, StyleSheet, Alert } from 'react-native';
import { CreateContactScreenRouteProp, CreateContactScreenNavigationProp } from '../navigation/types';
import { Contact, getContacts, saveContact } from '../utils/database';
import { commonStyles} from '../styles/screenStyles';

interface CreateContactScreenProps {
  route: CreateContactScreenRouteProp;
  navigation: CreateContactScreenNavigationProp;
}

const CreateContactScreen = ({ navigation }: CreateContactScreenProps) => {
  const [name, setName] = useState<string>('');
  const [mobileNumber, setMobileNumber] = useState<string>('');
  const [landlineNumber, setLandlineNumber] = useState<string>('');
  const [photo, setPhoto] = useState<string>(''); // Assuming photo is a URL
  const [isFavorite, setIsFavorite] = useState<boolean>(false);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

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

  const handleSaveContact = async () => {

    if (!name.trim() || !mobileNumber.trim()) {
      Alert.alert('Error', 'Name and Mobile Number are required.');
      return;
    }
    const newContact: Contact = {
      id: Date.now().toString(),
      name,
      mobileNumber,
      landlineNumber,
      isFavorite,
      photo: selectedImage,
    };

    await saveContact(newContact);
    setContacts(prevContacts => [...prevContacts, newContact]);
    navigation.goBack();


  };

  return (
    <View style={commonStyles.container}>
      <Text style={commonStyles.title}>Add New Contact</Text>
      <TextInput
        style={commonStyles.input}
        placeholder="Name"
        value={name}
        onChangeText={(text) => setName(text)}
      />
      <TextInput
        style={commonStyles.input}
        keyboardType='numeric'
        placeholder="Mobile Number"
        value={mobileNumber}
        onChangeText={(text) => setMobileNumber(text)}
      />
      <TextInput
        style={commonStyles.input}
        keyboardType='numeric'
        placeholder="Landline Number"
        value={landlineNumber}
        onChangeText={(text) => setLandlineNumber(text)}
      />
      <TextInput
        style={commonStyles.input}
        placeholder="Photo URL"
        value={photo}
        onChangeText={(text) => setPhoto(text)}
      />
      <View>
        <Button title={isFavorite ? 'Unmark as Favorite' : 'Mark as Favorite'} onPress={() => setIsFavorite(!isFavorite)} />
      </View>
      <Button title="Save" onPress={handleSaveContact} />
    </View>
  );
};



export default CreateContactScreen;
