import { NavLink } from 'react-router-dom';
import { styles } from 'utils/styles';

export const Navigation = () => (
  <nav className={styles.flexRow}>
    <NavLink to="/" className={styles.activeLink}>
      Home
    </NavLink>
    <NavLink to="contacts" className={styles.activeLink}>
      Contacts
    </NavLink>
  </nav>
);
