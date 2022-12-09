import { RESTDataSource } from '@apollo/datasource-rest';
import { PokemonEntity } from '../pokemon.resolver';

type PokemonListItem = {
  name: string;
  url: string;
};

type PokemonDetail = {
  types: {
    type: {
      name: string;
    };
  }[];
  weight: number;
};

class PokeAPI extends RESTDataSource {
  override baseURL = 'https://pokeapi.co/api/v2';

  async getPokemons(): Promise<PokemonEntity[]> {
    const data = await this.get(`/pokemon`);
    const result = data.results as PokemonListItem[];

    return await Promise.all(
      result.map(async (item, index) => {
        const pokemonDetail = await this.get(item.url) as PokemonDetail;

        return {
          id: index,
          name: item.name,
          types: pokemonDetail.types.map((type) => type.type.name),
          weight: pokemonDetail.weight,
        };
      })
    );
  }
}

export default PokeAPI;
