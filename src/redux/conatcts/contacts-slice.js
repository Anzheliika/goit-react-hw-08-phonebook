import { createSlice } from '@reduxjs/toolkit';
import {
  addContact,
  deleteContact,
  fetchContacts,
} from './conatcts-operations';

const initialState = {
  items: [],
  isLoading: false,
  error: null,
};

export const contactsSlice = createSlice({
  name: 'contacts',
  initialState,
  extraReducers: {
    // fetch
    [fetchContacts.pending]: state => {
      state.error = null;
      state.isLoading = true;
    },

    [fetchContacts.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.items = action.payload;
    },

    [fetchContacts.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },

    // add contact
    [addContact.pending]: state => {
      state.error = null;
      state.isLoading = true;
    },

    [addContact.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.items.push(action.payload);
    },

    [addContact.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },

    // delete contact
    [deleteContact.pending]: state => {
      state.error = null;
      state.isLoading = true;
    },

    [deleteContact.fulfilled]: (state, action) => {
      const index = state.items.findIndex(
        task => task.id === action.payload.id
      );
      state.items.splice(index, 1);
    },

    [deleteContact.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export const contactsReducer = contactsSlice.reducer;
