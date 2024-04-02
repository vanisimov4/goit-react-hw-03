import { nanoid } from 'nanoid';

import css from './SearchBox.module.css';

const SearchBox = ({ value, onChange }) => {
  const id = nanoid();
  return (
    <div className={css.searchBox}>
      <label htmlFor={id}>Find contacts by name</label>
      <input type="text" id={id} value={value} onChange={onChange} />
    </div>
  );
};

export default SearchBox;
