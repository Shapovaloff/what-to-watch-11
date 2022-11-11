import {HelmetProvider} from 'react-helmet-async';
import {Route, BrowserRouter, Routes} from 'react-router-dom';
import {AppRoute, AuthorizationStatus} from '../../const';
import Review from '../../pages/review/review';
import Film from '../../pages/film/film';
import Main from '../../pages/main/main';
import MyList from '../../pages/my-list/my-list';
import NotFound from '../../pages/not-found/not-found';
import Player from '../../pages/player/player';
import SingIn from '../../pages/sign-in/sign-in';
import {Comments} from '../../types/comments';
import {FilmsType} from '../../types/films';
import PrivateRoute from '../private-route/private-route';

type AppProps = {
  films: FilmsType;
  comments: Comments;
}

function App({films, comments}: AppProps): JSX.Element {
  const favoriteFilms = films.filter((film) => film.isFavorite);
  const favFilmsLength = favoriteFilms.length;

  return (
    <HelmetProvider>
      <BrowserRouter>
        <Routes>
          <Route
            path={AppRoute.Main}
            element={
              <Main
                films={films}
                favFilmsLength={favFilmsLength}
              />
            }
          />
          <Route
            path={AppRoute.Film}
            element={
              <Film
                films={films}
                favFilmsLength={favFilmsLength}
              />
            }
          />
          <Route
            path={AppRoute.Login}
            element={<SingIn />}
          />
          <Route
            path={AppRoute.MyList}
            element={
              <PrivateRoute
                authorizationStatus={AuthorizationStatus.Auth}
              >
                <MyList films={favoriteFilms} />
              </PrivateRoute>
            }
          />
          <Route
            path={AppRoute.Review}
            element={
              <PrivateRoute
                authorizationStatus={AuthorizationStatus.Auth}
              >
                <Review films={films} />
              </PrivateRoute>
            }
          />
          <Route
            path={AppRoute.Player}
            element={<Player />}
          />
          <Route
            path="*"
            element={<NotFound />}
          />
        </Routes>
      </BrowserRouter>
    </HelmetProvider>
  );
}

export default App;
