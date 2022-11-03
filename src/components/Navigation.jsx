import { NavLink } from 'react-router-dom';
import { styles } from 'utils/styles';

export const Navigation = () => (
  <nav className={styles.flexRow}>
    <NavLink to="/">Home</NavLink>
    <NavLink to="contacts" className='active:bg-violet-700'>Contacts</NavLink>
  </nav>
);
