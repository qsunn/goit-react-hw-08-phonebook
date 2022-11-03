import { toast } from 'react-toastify';

export const Toast = ({ message }) =>
  toast.error(message, {
    autoClose: 2000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: 'dark',
  });
