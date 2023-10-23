import { createSlice } from '@reduxjs/toolkit';

export const userSlice = createSlice({
  name: 'user',
  initialState: {
    username: '',
    balance: 1000,
    activeBets: []
  },
  reducers: {
    placeBet: (state, action) => {
      state.balance -= action.payload.amount;
      state.activeBets.push(action.payload.bet);
    },
    // Add more reducers as needed
    initializeUser: (state, action) => {
      state.username = action.payload;
    }
  }
});

export const { placeBet, initializeUser } = userSlice.actions;

export default userSlice.reducer;
