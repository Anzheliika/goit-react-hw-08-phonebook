import { createSelector } from "@reduxjs/toolkit";
import { selectFilterValue } from "redux/filter/filter-selectors";

export const selectContacts = state => state.contacts.items;

export const selectIsLoading = state => state.contacts.isLoading;

export const selectError = state => state.contacts.error;

export const selectVisibleContacts = createSelector(
  [selectFilterValue, selectContacts],
  (filter, contacts) => {
    const normilizedFilter = filter.toLowerCase();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normilizedFilter)
    );
  }
);
