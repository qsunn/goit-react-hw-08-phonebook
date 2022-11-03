import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { logIn } from 'redux/auth/operations';
import { styles } from 'utils/styles';

export const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const dispatch = useDispatch();

  const reset = () => {
    setEmail('');
    setPassword('');
  };

  const changeHandler = e => {
    const { name, value } = e.target;
    switch (name) {
      case 'email':
        setEmail(value);
        break;
      case 'password':
        setPassword(value);
        break;
      default:
        throw new Error(`Invalid field: ${name}`);
    }
  };

  const submitHandler = e => {
    e.preventDefault();
    const credentials = { email, password };
    dispatch(logIn(credentials));
    reset();
  };

  return (
    <form className={styles.flexCol} onSubmit={submitHandler}>
      <label>
        <span>Email:</span>
        <input
          onChange={changeHandler}
          value={email}
          placeholder="Enter your email"
          type="email"
          name="email"
          required
          className={styles.formInput}
        />
      </label>

      <label>
        <span>Password:</span>
        <input
          onChange={changeHandler}
          value={password}
          placeholder="Enter your password"
          type="password"
          name="password"
          required
          className={styles.formInput}
        />
      </label>

      <button type="submit" className={`${styles.button} mt-6 mb-4`}>
        Login
      </button>
    </form>
  );
};
