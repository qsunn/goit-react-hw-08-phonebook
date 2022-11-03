import { useSelector } from 'react-redux';
import { styles } from 'utils/styles';
import { selectContacts, selectFilter } from '../redux/selectors';
import { Contact } from './Contact';

const filterContacts = (contacts, filter) => {
  if (!contacts) return;
  if (!filter) return contacts;
  return contacts.filter(contact =>
    (contact.name + contact.number).toLowerCase().includes(filter.toLowerCase())
  );
};

export const ContactList = () => {
  const filter = useSelector(selectFilter);
  const { items: contacts } = useSelector(selectContacts);

  const visibleContacts = filterContacts(contacts, filter);

  if (contacts.length === 0) return <p className='text-center'>No contacts yet</p>;
  if (visibleContacts.length === 0) return <p className='text-center'>There are no coincidences</p>;
  return (
    <ul className={styles.flexCol}>
      {visibleContacts.map(contact => (
        <Contact key={contact.id} contact={contact} />
      ))}
    </ul>
  );
};
