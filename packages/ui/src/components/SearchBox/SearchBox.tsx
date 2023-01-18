import styles from './SearchBox.module.css';

const SearchBox = () => {
  return (
    <div className={styles.container}>
      <div className={`nes-field ${styles.input}`}>
        <input type="text" id="searchPokemon" className="nes-input" />
      </div>
      <button type="button" className="nes-btn is-primary">Search</button>
    </div>
  );
};

export default SearchBox;
