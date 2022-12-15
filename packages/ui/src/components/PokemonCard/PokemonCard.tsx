import React from 'react';
import styles from './PokemonCard.module.css';

const PokemonCard: React.FC<{ pokemon: PokemonEntity }> = ({ pokemon }) => {
  return (
    <div className="nes-container with-title is-centered">
      <p className="title">{pokemon?.name}</p>
      <div className={`lists ${styles.propertyList}`}>
        <ul className="nes-list is-disc">
          <li>Types: {pokemon.types.join(', ')}</li>
          <li>Weight: {pokemon.weight}</li>
        </ul>
      </div>
    </div>
  );
};

export default PokemonCard;
