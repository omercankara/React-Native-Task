import { createSlice } from "@reduxjs/toolkit";

const UserListSlice = createSlice({
  name: 'Users',
  initialState: {
    Users: []  
  },
  reducers: {
    addUserList: (state, action) => {
      state.Users.push(action.payload); 
    },
    
  }
});

export const { addUserList } = UserListSlice.actions;

export default UserListSlice.reducer;
