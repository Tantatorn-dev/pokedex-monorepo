// eslint-disable-next-line @typescript-eslint/no-unused-vars
import PokemonCard from '../components/PokemonCard/PokemonCard';
import SearchBox from '../components/SearchBox/SearchBox';
import styles from './app.module.css';

export function App() {
  return (
    <div className={styles.container}>
      <div className="nes-container is-rounded is-dark">
        <p>Pokedex Monorepo</p>
      </div>
      <SearchBox />
      <div className={styles.pokemonList}>
        <PokemonCard />
        <PokemonCard />
      </div>
    </div>
  );
}

export default App;
