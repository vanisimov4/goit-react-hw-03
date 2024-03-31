import css from './SearchBox.module.css';

const SearchBox = () => {
  return (
    <div className={css.searchBox}>
      <label htmlFor="">Find contacts by name</label>
      <input type="text" />
    </div>
  );
};

export default SearchBox;
