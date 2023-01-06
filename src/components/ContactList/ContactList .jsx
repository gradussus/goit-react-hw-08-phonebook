import { Item, List, DeleteBtn } from './ContactList.styled';
import { useSelector } from 'react-redux';
import { getFilter } from 'redux/filterSlice';
import { getContacts } from 'redux/contacts/contactsSelectors';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { fetchContacts, deleteContact } from 'redux/contacts/contactsOperations';
// import { useGetContactsQuery, useDeleteContactMutation } from 'redux/API';

export const ContactList = () => {

  const dispatch = useDispatch();
  const { contacts, isLoading, error } = useSelector(getContacts);
  useEffect(() => {
    console.log('4')
    dispatch(fetchContacts());
  }, []);


  // const [deleteContact] = useDeleteContactMutation();
  // const { data } = useGetContactsQuery();
  const filter = useSelector(getFilter);

  const onFilterChange = () => {
    return contacts.filter(c =>
      c.name.toLowerCase().includes(filter.toLowerCase())
    );
  };

  const removeContact = e => {
    deleteContact(e.currentTarget.id);
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
