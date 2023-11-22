import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface BudgetEntry {
  id: string;
  name: string;
  plannedAmount: number;
  actualAmount: number;
}

interface BudgetState {
  entries: BudgetEntry[];
}

const initialState: BudgetState = {
  entries: [],
};

const budgetSlice = createSlice({
  name: 'budget',
  initialState,
  reducers: {
    addBudgetEntry: (state, action: PayloadAction<BudgetEntry>) => {
      state.entries.push(action.payload);
    },

    removeBudgetEntry: (state, action: PayloadAction<string>) => {
      state.entries = state.entries.filter((entry) => entry.id !== action.payload);
    },
  },
});

export const { addBudgetEntry, removeBudgetEntry } = budgetSlice.actions;
export default budgetSlice.reducer;
