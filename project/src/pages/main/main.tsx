import {Helmet} from 'react-helmet-async';
import FilmCardButtons from '../../components/film-card-buttons/film-card-buttons';
import FilmsList from '../../components/films-list/films-list';
import Footer from '../../components/footer/footer';
import GenresList from '../../components/genres-list/genres-list';
import Logo from '../../components/logo/logo';
import UserBlock from '../../components/user-block/user-block';
import {FilmsType} from '../../types/films';

type MainProps = {
  films: FilmsType;
  favFilmsLength: number;
}

function Main({films, favFilmsLength}: MainProps): JSX.Element {
  const film = films[1];
  const {name, genre, released, id, backgroundImage, posterImage} = film;

  return (
    <>
      <section className="film-card">
        <Helmet>
          <title>WTW</title>
        </Helmet>

        <div className="film-card__bg">
          <img src={backgroundImage} alt={name} />
        </div>

        <h1 className="visually-hidden">WTW</h1>

        <header className="page-header film-card__head">
          <Logo />
          <UserBlock />
        </header>

        <div className="film-card__wrap">
          <div className="film-card__info">
            <div className="film-card__poster">
              <img src={posterImage} alt={`${name} poster`} width="218" height="327" />
            </div>

            <div className="film-card__desc">
              <h2 className="film-card__title">{name}</h2>
              <p className="film-card__meta">
                <span className="film-card__genre">{genre}</span>
                <span className="film-card__year">{released}</span>
              </p>

              <FilmCardButtons favFilmsLength={favFilmsLength} id={id} />
            </div>
          </div>
        </div>
      </section>

      <div className="page-content">
        <section className="catalog">
          <h2 className="catalog__title visually-hidden">Catalog</h2>

          <GenresList />

          <FilmsList films={films} />

          <div className="catalog__more">
            <button className="catalog__button" type="button">Show more</button>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
}

export default Main;
