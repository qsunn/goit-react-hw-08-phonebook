import { AuthNav } from './AuthNav';
import { Navigation } from './Navigation';
import { UserMenu } from './UserMenu';
import { styles } from 'utils/styles';
import { useSelector } from 'react-redux';
import { selectAuth } from 'redux/selectors';

export const AppBar = () => {
  const { isLoggedIn } = useSelector(selectAuth);
  return (
    <header className={`${styles.flexRow} py-8 justify-between`}>
      <Navigation />
      {isLoggedIn ? <UserMenu /> : <AuthNav />}
    </header>
  );
};
