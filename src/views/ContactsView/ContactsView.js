import ContactForm from 'components/ContactForm/ContactForm';
import ContactsList from 'components/ContactList/ContactList';
import Filter from 'components/Filter/Filter';
import { Toaster } from 'react-hot-toast';
import { Title } from './ContactsView.module';

const ContactsViews = () => {
  return (
    <div>
      <Title>Phonebook</Title>

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
      <Title>Contacts</Title>
      <Filter />
      <ContactsList />
    </div>
  );
};

export default ContactsViews;
