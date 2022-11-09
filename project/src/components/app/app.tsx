import { HelmetProvider } from 'react-helmet-async';
import {Route, BrowserRouter, Routes} from 'react-router-dom';
import {AppRoute, AuthorizationStatus} from '../../const';
import AddReview from '../../pages/add-review/add-review';
import Film from '../../pages/film/film';
import Main from '../../pages/main/main';
import MyList from '../../pages/my-list/my-list';
import NotFoundPage from '../../pages/not-found-page/not-found-page';
import Player from '../../pages/player/player';
import SingIn from '../../pages/sign-in/sign-in';
import PrivateRoute from '../private-route/private-route';

type AppProps = {
  title: string;
  genre: string;
  year: number;
}

function App({title, genre, year}: AppProps): JSX.Element {
  return (
    <HelmetProvider>
      <BrowserRouter>
        <Routes>
          <Route
            path={AppRoute.Main}
            element={<Main title={title} genre={genre} year={year} />}
          />
          <Route
            path={AppRoute.Film}
            element={<Film />}
          />
          <Route
            path={AppRoute.Login}
            element={<SingIn />}
          />
          <Route
            path={AppRoute.MyList}
            element={
              <PrivateRoute
                authorizationStatus={AuthorizationStatus.NoAuth}
              >
                <MyList />
              </PrivateRoute>
            }
          />
          <Route
            path={AppRoute.Review}
            element={
              <PrivateRoute
                authorizationStatus={AuthorizationStatus.NoAuth}
              >
                <AddReview />
              </PrivateRoute>
            }
          />
          <Route
            path={AppRoute.Player}
            element={<Player />}
          />
          <Route
            path="*"
            element={<NotFoundPage />}
          />
        </Routes>
      </BrowserRouter>
    </HelmetProvider>
  );
}

export default App;
