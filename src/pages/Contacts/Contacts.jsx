import { ContactForm } from '../../components/ContactForm/ContactForm';
import { ContactList } from '../../components/ContactList/ContactList ';
import { Filter } from '../../components/Filter/Filter';
import { useSelector } from 'react-redux';
import { getContacts } from 'redux/contacts/contactsSelectors';

const Contacts = () => {
  const { contacts } = useSelector(getContacts);
  console.log('sadf' + contacts.length);
  return (
    <>
      <h1 style={{fontFamily:'Sriracha'}}>Phonebook</h1>
      <ContactForm />
      <h2 style={{fontFamily:'Sriracha'}}>Contacts</h2>
      <Filter />
      <ContactList />
    </>
  );
};

export default Contacts;
