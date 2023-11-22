import React from 'react';
import { View, Text} from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../store/store';
import { List, Divider, Button } from 'react-native-paper';
import { removeBudgetEntry } from '../store/budgetSlice';

const BudgetListingScreen = () => {

  const dispatch = useDispatch();
  const entries = useSelector((state: RootState) => state.entries);

  const handleRemoveEntry = (id: string) => {
    dispatch(removeBudgetEntry(id));
  };

  return (
    <View>
      <List.Section>
        <Text style={{textAlign:'center', color:'green', marginBottom:20, marginTop:20}}>Budget Entry Listing</Text>
        {entries.map((item) => (
          <View key={item.id}>
            <List.Item
              title={item.name}
              description={`Planned: ${item.plannedAmount} | Actual: ${item.actualAmount}`}
              right={() => (
                <Button
                  onPress={() => handleRemoveEntry(item.id)}
                >
                  Delete
                </Button>
              )}
            />
            <Divider />
          </View>
        ))}
      </List.Section>
    </View>
  );
};

export default BudgetListingScreen;