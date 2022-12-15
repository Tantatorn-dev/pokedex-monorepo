// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { gql, useQuery } from '@apollo/client';
import PokemonCard from '../components/PokemonCard/PokemonCard';
import SearchBox from '../components/SearchBox/SearchBox';
import styles from './app.module.css';

const POKEMONS_QUERY = gql`
  query pokemons {
    pokemons {
      id
      name
      types
      weight
    }
  }
`;

export function App() {
  const { data } = useQuery(POKEMONS_QUERY);

  return (
    <div className={styles.container}>
      <div className="nes-container is-rounded is-dark">
        <p>Pokedex Monorepo</p>
      </div>
      <SearchBox />
      <div className={styles.pokemonList}>
        {data?.pokemons.map((pokemon: PokemonEntity) => (
          <PokemonCard key={pokemon?.id} pokemon={pokemon} />
        ))}
      </div>
    </div>
  );
}

export default App;
