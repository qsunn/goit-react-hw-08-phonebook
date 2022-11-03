import { NavLink } from 'react-router-dom';
import { styles } from 'utils/styles';

export const AuthNav = () => (
  <div className={styles.flexRow}>
    <NavLink to="register" className={styles.activeLink}>Register</NavLink>
    <NavLink to="login" className={styles.activeLink}>Login</NavLink>
  </div>
);
