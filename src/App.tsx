import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import Layout from './components/Layout';
import ErrorPage from './routes/ErrorPage';
import MyPokedex from './routes/MyPokedex';
import PokemonDetails from './routes/PokemonDetails';
import PokemonList from './routes/PokemonList';

const router = createBrowserRouter([
  {
    path: '/',
    Component: Layout,
    ErrorBoundary: ErrorPage,
    children: [
      {
        path: '/',
        Component: PokemonList,
      },
      {
        path: 'pokemon/:pokemonId',
        Component: PokemonDetails,
        ErrorBoundary: ErrorPage,
      },
      {
        path: 'pokedex',
        Component: MyPokedex,
        ErrorBoundary: ErrorPage,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
