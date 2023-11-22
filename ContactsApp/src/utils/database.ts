// // src/utils/database.ts
import AsyncStorage from '@react-native-async-storage/async-storage';
//import Contact from '../types/Contact';

export interface Contact {
  id: string;
  name: string;
  mobileNumber: string;
  landlineNumber: string;
  isFavorite: boolean;
  photo?: string | null;
}

const CONTACTS_STORAGE_KEY = '@contacts';

export const saveContact = async (contact: Contact): Promise<void> => {
  try {
    const existingContacts = await getContacts();
    const updatedContacts = [...existingContacts, contact];
    await AsyncStorage.setItem(CONTACTS_STORAGE_KEY, JSON.stringify(updatedContacts));
  } catch (error) {
    console.error('Error saving contact:', error);
  }
};

export const getContacts = async (): Promise<Contact[]> => {
  try {
    const contactsJson = await AsyncStorage.getItem(CONTACTS_STORAGE_KEY);
    const contacts: Contact[] = contactsJson ? JSON.parse(contactsJson) : [];
    return contacts.sort((a, b) => a.name.localeCompare(b.name));
  } catch (error) {
    console.error('Error getting contacts:', error);
    return [];
  }
};

export const updateContact = async (contact: Contact): Promise<void> => {
  try {
    const existingContacts = await getContacts();
    const updatedContacts = existingContacts.map(c => (c.id === contact.id ? contact : c));
    await AsyncStorage.setItem(CONTACTS_STORAGE_KEY, JSON.stringify(updatedContacts));
  } catch (error) {
    console.error('Error updating contact:', error);
  }
};

export const deleteContact = async (contactId: string): Promise<void> => {
  try {
    const existingContacts = await getContacts();
    const updatedContacts = existingContacts.filter(c => c.id !== contactId);
    await AsyncStorage.setItem(CONTACTS_STORAGE_KEY, JSON.stringify(updatedContacts));
  } catch (error) {
    console.error('Error deleting contact:', error);
  }
};

export default Contact;



// src/utils/database.ts
// import AsyncStorage from '@react-native-async-storage/async-storage';

// export interface Contact {
//   id: string;
//   name: string;
//   mobileNumber: string;
//   landlineNumber: string;
//   photo?: string;
//   favorite: boolean;
// }

// const CONTACTS_STORAGE_KEY = '@contacts';

// export const saveContact = async (contact: Contact): Promise<void> => {
//   try {
//     const existingContacts = await getContacts();
//     const updatedContacts = [...existingContacts, contact];
//     await AsyncStorage.setItem(CONTACTS_STORAGE_KEY, JSON.stringify(updatedContacts));
//   } catch (error) {
//     console.error('Error saving contact:', error);
//     throw new Error('Error saving contact');
//   }
// };

// export const getContacts = async (): Promise<Contact[]> => {
//   try {
//     const contactsJson = await AsyncStorage.getItem(CONTACTS_STORAGE_KEY);
//     return contactsJson ? JSON.parse(contactsJson) : [];
//   } catch (error) {
//     console.error('Error getting contacts:', error);
//     throw new Error('Error getting contacts');
//   }
// };

// export const updateContact = async (contact: Contact): Promise<void> => {
//   try {
//     const existingContacts = await getContacts();
//     const updatedContacts = existingContacts.map((c) => (c.id === contact.id ? contact : c));
//     await AsyncStorage.setItem(CONTACTS_STORAGE_KEY, JSON.stringify(updatedContacts));
//   } catch (error) {
//     console.error('Error updating contact:', error);
//     throw new Error('Error updating contact');
//   }
// };

// export const deleteContact = async (contactId: string): Promise<void> => {
//   try {
//     const existingContacts = await getContacts();
//     const updatedContacts = existingContacts.filter((c) => c.id !== contactId);
//     await AsyncStorage.setItem(CONTACTS_STORAGE_KEY, JSON.stringify(updatedContacts));
//   } catch (error) {
//     console.error('Error deleting contact:', error);
//     throw new Error('Error deleting contact');
//   }
// };

