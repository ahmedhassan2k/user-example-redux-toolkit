import { createSlice } from '@reduxjs/toolkit';


const initialState = [
]

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    addUser: (state, action) => {
      return [...state, action.payload]
    },
    deleteUser: (state, action) => {
      return [...state.filter(user => user.id !== action.payload)]
    },
    reset: (state) => {

    }
  }

});

export const { addUser, deleteUser, reset } = userSlice.actions;


export const selectUser = (state) => state.user;


export default userSlice.reducer;
