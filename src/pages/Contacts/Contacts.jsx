import { ContactForm } from '../../components/ContactForm/ContactForm';
import { ContactList } from '../../components/ContactList/ContactList ';
import { Filter } from '../../components/Filter/Filter';

const Contacts = () => {
  return (
    <>
      <h1 style={{ fontFamily: 'Sriracha' }}>Phonebook</h1>
      <ContactForm />
      <h2 style={{ fontFamily: 'Sriracha' }}>Contacts</h2>
      <Filter />
      <ContactList />
    </>
  );
};

export default Contacts;
