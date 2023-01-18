import React from 'react';
import styles from './PokemonCard.module.css';

type Props = {
  pokemon: PokemonEntity;
  align?: 'left' | 'right';
};

const PokemonCard: React.FC<Props> = ({ pokemon, align = 'left' }) => {
  return (
    <div className="nes-container with-title is-centered">
      <p className="title">{pokemon?.name}</p>
      <div
        className={`lists ${styles.container}`}
      >
        {align === 'left' && <img alt={pokemon.name} src={pokemon.img} />}
        <ul className={`nes-list ${styles.pokeInfo}`}>
          <li>Types: {pokemon.types.join(', ')}</li>
          <li>Weight: {pokemon.weight}</li>
        </ul>
        {align === 'right' && <img alt={pokemon.name} src={pokemon.img} />}
      </div>
    </div>
  );
};

export default PokemonCard;
