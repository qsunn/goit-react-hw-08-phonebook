import { styles } from 'utils/styles';
import { MdLogout } from 'react-icons/md';
import { useDispatch, useSelector } from 'react-redux';
import { selectAuth } from 'redux/selectors';
import { logOut } from 'redux/auth/operations';
export const UserMenu = () => {
  const dispatch = useDispatch();
  const {
    user: { name },
  } = useSelector(selectAuth);
  return (
    <div className={styles.flexRow}>
      <div>Welcome, {name}</div>
      <button type="button" onClick={() => dispatch(logOut())}>
        <MdLogout className="text-lg text-lime-300" />
      </button>
    </div>
  );
};
