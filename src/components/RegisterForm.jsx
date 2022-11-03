import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { register } from 'redux/auth/operations';
import { styles } from 'utils/styles';
import { Toast } from './Toast';

export const RegisterForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const dispatch = useDispatch();

  const reset = () => {
    setName('');
    setEmail('');
    setPassword('');
  };

  const credentialsValidate = credentials => {
    const { name, email, password } = credentials;

    return (
      password.length >= 7 &&
      name.split(' ').length === 2 &&
      email.includes('.')
    );
  };

  const changeHandler = e => {
    const { name, value } = e.target;
    switch (name) {
      case 'name':
        setName(value);
        break;
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

    const credentials = { name, email, password };

    if (!credentialsValidate(credentials))
      return <Toast message="Password can't be less than 7 characters" />;

    dispatch(register(credentials));

    reset();
  };

  return (
    <form className={styles.flexCol} onSubmit={submitHandler}>
      <label>
        <span>Name:</span>
        <input
          onChange={changeHandler}
          value={name}
          placeholder="Enter your name"
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          className={styles.formInput}
        />
      </label>

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
        Register
      </button>
    </form>
  );
};
