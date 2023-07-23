import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { deleteContact } from 'redux/contacts/contacts-operations';
import { getVisibleContacts } from 'redux/contacts/contacts-selectors';
import { Button, Contact, List, Name } from './ContactList.module';

const ContactList = () => {
  const contacts = useSelector(getVisibleContacts);
  const dispatch = useDispatch();

  return (
    <List>
      {contacts.map(({ name, number, id }) => (
        <Contact key={id}>
          <Name>{name + ': ' + number}</Name>
          <Button type="button" onClick={() => dispatch(deleteContact(id))}>
            Delete
          </Button>
        </Contact>
      ))}
    </List>
  );
};

export default ContactList;
