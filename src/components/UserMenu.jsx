import { styles } from 'utils/styles';
import { MdLogout } from 'react-icons/md';
import { useSelector } from 'react-redux';
import { selectUser } from 'redux/auth/selectors';
export const UserMenu = () => {
  const { name } = useSelector(selectUser);
  return (
    <div className={styles.flexRow}>
      <div>Welcome, {name}</div>
      <button type="button">
        <MdLogout className="text-lg text-lime-300" />
      </button>
    </div>
  );
};
