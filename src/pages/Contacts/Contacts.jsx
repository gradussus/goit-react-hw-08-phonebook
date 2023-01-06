import { ContactForm } from '../../components/ContactForm/ContactForm';
import { ContactList } from '../../components/ContactList/ContactList ';
import { Filter } from '../../components/Filter/Filter';
import { useSelector } from 'react-redux';
import { getContacts } from 'redux/contacts/contactsSelectors';

// import { useGetContactsQuery } from 'redux/API';


const Contacts = () => {
  // const { contacts, isLoading, error } = useSelector(getContacts);
return (
    <>
            <h1>Phonebook</h1>
            <ContactForm />
            <h2>Contacts</h2>

            {/* {!isLoading && contacts.length !== 0 ? ( */}
              <>
                <Filter />
                <ContactList />
              </>
            {/* ) : (
              <div>
                Your contacts are not here yet, but you can add contacts in the
                form above and save them in this app
              </div> */}
            {/* )} */}
            {/* {error && <div>Oh no... Something wrong</div>} */}
            </>
    )
}

export default Contacts