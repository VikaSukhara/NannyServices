import { FavoritesPage } from 'Pages/FavoritesPage/FavoritesPage';
import { HomeDefault } from 'Pages/HomeDefault/HomeDefault';
import { NanniesPage } from 'Pages/NanniesPage/NanniesPage';
import { Route, Routes } from 'react-router-dom';
import { Layout } from './Layout/Layout';

export const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" index element={<HomeDefault />} />
          <Route path="/nannies" element={<NanniesPage />} />
          <Route path="/favorites" element={<FavoritesPage />} />
        </Route>
      </Routes>
    </div>
  );
};
