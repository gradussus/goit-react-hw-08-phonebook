import { createSlice } from "@reduxjs/toolkit";

import { fetchContacts, addContact, deleteContact } from "./contactsOperations";

const contactsSlice = createSlice({
    name: 'contacts',
    initialState: {
        contacts: [],
        isLoading: false,
        error: null
    }   ,
    extraReducers: {
      [fetchContacts.pending](state) {
        console.log('1')
            state.isLoading = true;
          },
      [fetchContacts.fulfilled](state, action) {
        console.log('2')
            state.isLoading = false;
            state.error = null;
            state.contacts = action.payload;
          },
      [fetchContacts.rejected](state, action) {
        console.log('3')
            state.isLoading = false;
            state.error = action.payload;
          },

          [addContact.pending](state) {
            state.isLoading = true;
          },
          [addContact.fulfilled](state, action) {
            state.isLoading = false;
            state.error = null;
            state.contacts = [action.payload, ...state.contacts];
          },
          [addContact.rejected](state, action) {
            state.isLoading = false;
            state.error = action.payload;
        },
          
        [deleteContact.pending](state) {
            state.isLoading = true;
          },
          [deleteContact.fulfilled](state, action) {
            state.isLoading = false;
            state.error = null;
            state.contacts = state.contacts.filter(el => el.id !== action.payload.id);
          },
          [deleteContact.rejected](state, action) {
            state.isLoading = false;
            state.error = action.payload;
        },
          
        //   додати редагування!!!
    }
},)
export const contactsReducer = contactsSlice.reducer;