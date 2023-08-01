import { useSelector, useDispatch } from 'react-redux';
import { deleteContact } from 'redux/contacts/operations';
import { selectContacts,selectContactsFilter } from '../../redux/contacts/selectors';
import {List, ItemContact, ButtonDelete} from './ContactList.styles';

export function ContactList() {
  const contacts = useSelector(selectContacts);

  const filterValue = useSelector(selectContactsFilter).toLowerCase();

  const dispatch = useDispatch();

  const handleDelete = evt => {
    dispatch(deleteContact(evt.currentTarget.id));
  };

  const getVisibilityContacts = () => {
    if (!filterValue || filterValue === '') {
      return contacts;
    }

    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filterValue)
    );
  };

  const visibilityContacts = getVisibilityContacts();

  return (
    <List>
      {visibilityContacts.map(contact => (
        <ItemContact key={contact.id}>
            {contact.name}: {contact.number}
          <ButtonDelete type="button" id={contact.id} onClick={handleDelete}>
            Delete
          </ButtonDelete>
        </ItemContact>
      ))}
    </List>
  );
}
