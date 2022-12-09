import { Query, Resolver } from '@nestjs/graphql';
import PokeAPI from './poke-api/poke-api';

export interface PokemonEntity {
  id: number;
  name: string;
  types: string[];
  weight: number;
}

@Resolver('Pokemon')
export class PokemonResolver {
  constructor(private readonly pokeAPI: PokeAPI) {
    this.pokeAPI = pokeAPI;
  }

  @Query('pokemons')
  async getAllPokemons(): Promise<PokemonEntity[]> {
    return this.pokeAPI.getPokemons();
  }
}
