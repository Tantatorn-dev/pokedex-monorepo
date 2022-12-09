import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import PokeAPI from './poke-api/poke-api';
import { PokemonResolver } from './pokemon.resolver';

@Module({
  imports: [
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      typePaths: ['./**/*.graphql']
    }),
  ],
  controllers: [AppController],
  providers: [AppService, PokeAPI, PokemonResolver],
})
export class AppModule {}
