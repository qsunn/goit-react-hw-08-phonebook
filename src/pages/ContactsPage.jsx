import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectContacts } from 'redux/selectors';
import { fetchContacts } from 'redux/contacts/operations';

import { ContactList } from '../components/ContactList';
import { ContactForm } from '../components/ContactForm';
import { Filter } from '../components/Filter';
import { styles } from 'utils/styles';
import { Loader } from 'components/Loader';

const ContactsPage = () => {
  const dispatch = useDispatch();

  const { isLoading, error } = useSelector(selectContacts);

  const status = {
    pending: isLoading,
    rejected: error && !isLoading,
    fulfilled: !isLoading && !error,
  };

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div className={`${styles.flexCol} mx-auto md:w-80`}>
      <h1 className={styles.title}>Phonebook</h1>
      <ContactForm />
      <h2 className={styles.title}>Contacts</h2>
      <Filter />
      {status.pending && <Loader />}
      {status.rejected && <p>{error}</p>}
      {status.fulfilled && <ContactList />}
    </div>
  );
};

export default ContactsPage;
