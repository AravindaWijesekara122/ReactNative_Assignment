import React, { useState } from 'react';
import { View, Text, StyleSheet, Alert } from 'react-native';
import { useDispatch } from 'react-redux';
import { addBudgetEntry } from '../store/budgetSlice';;
import { ScreenProp } from '../navigation/navigationTypes';
import { TextInput, Button, Appbar } from 'react-native-paper';


const BudgetEntryScreen = ({ navigation }: ScreenProp) => {
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [plannedAmount, setPlannedAmount] = useState('');
  const [actualAmount, setActualAmount] = useState('');

  const handleSave = () => {
    // Validation
    if (!name.trim() || isNaN(parseFloat(plannedAmount)) || isNaN(parseFloat(actualAmount))) {
      Alert.alert('Validation Error', 'Please enter valid data for all fields.');
      return;
    }

    const entry = {
      id: Date.now().toString(),
      name,
      plannedAmount: parseFloat(plannedAmount),
      actualAmount: parseFloat(actualAmount),
    };

    dispatch(addBudgetEntry(entry));
    setName('');
    setPlannedAmount('');
    setActualAmount('');
  };

  return (
    <View style={styles.container}>
      <Appbar.Header>
        <Appbar.Content style={styles.appBar} title="Budget Entry" />
      </Appbar.Header>
      <TextInput style={styles.input}
        label="Name"
        value={name}
        onChangeText={(text) => setName(text)}
      />
      <TextInput style={styles.input}
        label="Planned Amount"
        keyboardType="numeric"
        value={plannedAmount}
        onChangeText={(text) => setPlannedAmount(text)}
      />
      <TextInput style={styles.input}
        label="Actual Amount"
        keyboardType="numeric"
        value={actualAmount}
        onChangeText={(text) => setActualAmount(text)}
      />
      <Button mode="contained" onPress={handleSave} style={styles.saveButton}>
        Save
      </Button>
      <Button onPress={() => navigation.navigate('BudgetListing')}>
        Show Items
      </Button>
    </View>
  );
};


const styles = StyleSheet.create({
  container: {
    padding: 16,
  },
  saveButton: {
    alignSelf: 'center',
    marginTop: 16,
    width: '50%',
  },
  input: {
    marginTop: 15,
  },
  appBar: {
    alignItems: 'center',
  }
});

export default BudgetEntryScreen;
