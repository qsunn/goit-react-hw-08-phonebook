import { NavLink } from 'react-router-dom';
import { styles } from 'utils/styles';

export const AuthNav = () => (
  <div className={styles.flexRow}>
    <NavLink to="register">Register</NavLink>
    <NavLink to="login">Login</NavLink>
  </div>
);
