import css from './SearchBox.module.css';

const SearchBox = ({ value, onChange }) => {
  return (
    <div className={css.searchBox}>
      <label htmlFor="">Find contacts by name</label>
      <input type="text" value={value} onChange={onChange} />
    </div>
  );
};

export default SearchBox;
