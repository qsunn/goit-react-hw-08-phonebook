import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/contacts/operations';
import { PropTypes } from 'prop-types';
import { MdClose } from 'react-icons/md';

export const Contact = ({ contact }) => {
  const dispatch = useDispatch();

  const { name, number, id } = contact;
  return (
    <li className="flex justify-between">
      <p>
        {name}: {number}
      </p>
      <button type="button" onClick={() => dispatch(deleteContact(id))}>
        <MdClose className="text-md text-lime-300" />
      </button>
    </li>
  );
};

Contact.propTypes = {
  contact: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
  }).isRequired,
};
