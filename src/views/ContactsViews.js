import ContactForm from 'components/ContactForm/ContactForm';
import ContactsList from 'components/ContactList/ContactList';
import Filter from 'components/Filter/Filter';
import { Toaster } from 'react-hot-toast';

const ContactsViews = () => {
  return (
    <div>
      <h1>Phonebook</h1>

      <ContactForm />

      <Toaster
        toastOptions={{
          style: {
            border: '1px solid #F65B5B',
            padding: '20px',
            color: '#F65B5B',
          },
        }}
      />
      <h2>Contacts</h2>
      <Filter />
      <ContactsList />
    </div>
  );
};

export default ContactsViews;
