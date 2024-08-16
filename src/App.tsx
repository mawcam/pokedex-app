import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import ErrorPage from './routes/ErrorPage';
import PokemonDetails from './routes/PokemonDetails';
import PokemonList from './routes/PokemonList';

const router = createBrowserRouter([
  {
    path: '/',
    element: <PokemonList />,
    errorElement: <ErrorPage />,
  },
  {
    path: '/:pokemonId',
    element: <PokemonDetails />,
    errorElement: <ErrorPage />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
