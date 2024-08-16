import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import ErrorPage from './routes/ErrorPage';
import MyPokedex from './routes/MyPokedex';
import PokemonDetails from './routes/PokemonDetails';
import PokemonList from './routes/PokemonList';

const router = createBrowserRouter([
  {
    path: '/',
    element: <PokemonList />,
    errorElement: <ErrorPage />,
  },
  {
    path: 'pokemon/:pokemonId',
    element: <PokemonDetails />,
    errorElement: <ErrorPage />,
  },
  {
    path: 'pokedex',
    element: <MyPokedex />,
    errorElement: <ErrorPage />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
