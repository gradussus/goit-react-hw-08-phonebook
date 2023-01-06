import { Item, List, DeleteBtn } from './ContactList.styled';
import { useSelector, useDispatch } from 'react-redux';
import { getFilter } from 'redux/filterSlice';
import { getContacts } from 'redux/contacts/contactsSelectors';
import { useEffect } from 'react';
import { fetchContacts, deleteContact } from 'redux/contacts/contactsOperations';

export const ContactList = () => {

  const dispatch = useDispatch();
  const { contacts, isLoading, error } = useSelector(getContacts);
  useEffect(() => {
    console.log('4')
    dispatch(fetchContacts());
  }, [dispatch]);

  const filter = useSelector(getFilter);

  const onFilterChange = () => {
    return contacts.filter(c =>
      c.name.toLowerCase().includes(filter.toLowerCase())
    );
  };

  const removeContact = e => {
    dispatch(deleteContact(e.currentTarget.id));
  };

  return (
    <List>
      {onFilterChange().map(c => (
        <Item key={c.id}>
          <span>{c.name}</span>
          <span>{c.number}</span>
          <DeleteBtn id={c.id} onClick={removeContact}>
            Delete
          </DeleteBtn>
        </Item>
      ))}
    </List>
  );
};
