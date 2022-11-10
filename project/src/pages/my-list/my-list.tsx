import {Helmet} from 'react-helmet-async';
import FilmsList from '../../components/films-list/films-list';
import Footer from '../../components/footer/footer';
import Logo from '../../components/logo/logo';
import {FilmsType} from '../../types/films';

type MyListProps = {
  films: FilmsType;
}

function MyList({films}: MyListProps): JSX.Element {
  const favoriteFilms = films.filter((film) => film.isFavorite);

  return (
    <div className="user-page">
      <Helmet>
        <title>WTW. My list</title>
      </Helmet>

      <header className="page-header user-page__head">
        <Logo />

        <h1 className="page-title user-page__title">My list <span className="user-page__film-count">{favoriteFilms.length}</span></h1>
        <ul className="user-block">
          <li className="user-block__item">
            <div className="user-block__avatar">
              <img src="img/avatar.jpg" alt="User avatar" width="63" height="63" />
            </div>
          </li>
          <li className="user-block__item">
            <a href="#!" className="user-block__link">Sign out</a>
          </li>
        </ul>
      </header>

      <section className="catalog">
        <h2 className="catalog__title visually-hidden">Catalog</h2>
        <FilmsList films={favoriteFilms} />
      </section>
      <Footer />
    </div>
  );
}

export default MyList;
