import { RegisterForm } from 'components/RegisterForm';
import { styles } from 'utils/styles';

const RegisterPage = () => {
  return (
    <div className={`${styles.flexCol} mx-auto md:w-80`}>
      <RegisterForm />
    </div>
  );
};

export default RegisterPage;
