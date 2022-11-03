import { useSelector, useDispatch } from 'react-redux';
import { styles } from 'utils/styles';
import { onFilter } from '../redux/filter/slice';
import { selectFilter } from '../redux/selectors';

export const Filter = () => {
  const filter = useSelector(selectFilter);
  const dispatch = useDispatch();

  return (
    <div>
      <input
        onChange={e => dispatch(onFilter(e.target.value))}
        value={filter}
        type="text"
        placeholder="Search"
        name="filter"
        className={styles.formInput}
      />
    </div>
  );
};
