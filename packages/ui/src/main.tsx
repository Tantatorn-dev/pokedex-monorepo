import { StrictMode } from 'react';
import * as ReactDOM from 'react-dom/client';
import 'nes.css/css/nes.min.css';

import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';

import App from './app/app';

const client = new ApolloClient({
  uri: 'http://localhost:3333/graphql',
  cache: new InMemoryCache(),
});

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <StrictMode>
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  </StrictMode>
);
