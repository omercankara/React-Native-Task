import { createSlice } from "@reduxjs/toolkit";

const UserListSlice = createSlice({
  name: 'user',
  initialState: {
    users: []  
  },
  reducers: {
    addUserList: (state, action) => {
      state.users.push(action.payload); // addUserList reducer'ında state güncellenecek
    },
    
  }
});

export const { addUserList } = UserListSlice.actions;

export default UserListSlice.reducer;
