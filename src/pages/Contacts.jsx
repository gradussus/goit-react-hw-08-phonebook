import { ContactForm } from '../components/ContactForm/ContactForm';
import { ContactList } from '../components/ContactList/ContactList ';
import { Filter } from '../components/Filter/Filter';

import { useGetContactsQuery } from 'redux/API';


const Contacts = () => {
    const { data, error, isLoading } = useGetContactsQuery();
return (
    <>
            <h1>Phonebook</h1>
            <ContactForm />
            <h2>Contacts</h2>

            {!isLoading && data.length !== 0 ? (
              <>
                <Filter />
                <ContactList />
              </>
            ) : (
              <div>
                Your contacts are not here yet, but you can add contacts in the
                form above and save them in this app
              </div>
            )}
            {error && <div>Oh no... Something wrong</div>}
            </>
    )
}

export default Contacts