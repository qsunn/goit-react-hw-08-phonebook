import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { toast } from 'react-toastify';
import { register } from 'redux/auth/operations';
import { styles } from 'utils/styles';

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

  const passValidate = pass => {
    return pass.length >= 7 ? pass : null;
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
    if (!passValidate(password)) return toast.error('Password is shorter than the minimum allowed length (7).')
    const newUser = { name, email, password };
    dispatch(register(newUser));
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
