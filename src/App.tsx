import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import Layout from './components/ui/Layout';
import DetailsPage from './routes/DetailsPage';
import ErrorPage from './routes/ErrorPage';
import ListingPage from './routes/ListingPage';
import PokedexPage from './routes/PokedexPage';

const router = createBrowserRouter([
  {
    path: '/',
    Component: Layout,
    ErrorBoundary: ErrorPage,
    children: [
      {
        path: '/',
        Component: ListingPage,
      },
      {
        path: 'pokemon/:pokemonId',
        Component: DetailsPage,
        ErrorBoundary: ErrorPage,
      },
      {
        path: 'pokedex',
        Component: PokedexPage,
        ErrorBoundary: ErrorPage,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
