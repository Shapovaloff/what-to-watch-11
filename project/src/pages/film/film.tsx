import {Helmet} from 'react-helmet-async';
import {Params, useParams} from 'react-router-dom';
import FilmCardButtons from '../../components/film-card-buttons/film-card-buttons';
import FilmsList from '../../components/films-list/films-list';
import Footer from '../../components/footer/footer';
import Logo from '../../components/logo/logo';
import UserBlock from '../../components/user-block/user-block';
import {FilmsType} from '../../types/films';
import {getFilm, getSimilarFilms} from '../../utils';

type FilmProps = {
  films: FilmsType;
  favFilmsLength: number;
}

function Film({films, favFilmsLength}: FilmProps): JSX.Element {
  const params = useParams() as Params;
  const id = Number(params.id);
  const film = getFilm(films, id);
  const similarFilms = getSimilarFilms(films, film, id);
  const {name, backgroundImage, genre, released, posterImage, rating, backgroundColor, director, starring, description} = film;

  return (
    <>
      <section style={{backgroundColor: backgroundColor}} className="film-card film-card--full">
        <Helmet>
          <title>WTW. Film</title>
        </Helmet>

        <div className="film-card__hero">
          <div className="film-card__bg">
            <img src={backgroundImage} alt={`${name} poster`} />
          </div>

          <h1 className="visually-hidden">WTW</h1>

          <header className="page-header film-card__head">
            <Logo/>
            <UserBlock />
          </header>

          <div className="film-card__wrap">
            <div className="film-card__desc">
              <h2 className="film-card__title">{name}</h2>
              <p className="film-card__meta">
                <span className="film-card__genre">{genre}</span>
                <span className="film-card__year">{released}</span>
              </p>

              <FilmCardButtons favFilmsLength={favFilmsLength} isAddReview id={id} />
            </div>
          </div>
        </div>

        <div className="film-card__wrap film-card__translate-top">
          <div className="film-card__info">
            <div className="film-card__poster film-card__poster--big">
              <img src={posterImage} alt={name} width="218" height="327" />
            </div>

            <div className="film-card__desc">
              <nav className="film-nav film-card__nav">
                <ul className="film-nav__list">
                  <li className="film-nav__item film-nav__item--active">
                    <a href="#!" className="film-nav__link">Overview</a>
                  </li>
                  <li className="film-nav__item">
                    <a href="#!" className="film-nav__link">Details</a>
                  </li>
                  <li className="film-nav__item">
                    <a href="#!" className="film-nav__link">Reviews</a>
                  </li>
                </ul>
              </nav>

              <div className="film-rating">
                <div className="film-rating__score">{rating.toString().replace('.', ',')}</div>
                <p className="film-rating__meta">
                  <span className="film-rating__level">Very good</span>
                  <span className="film-rating__count">240 ratings</span>
                </p>
              </div>

              <div className="film-card__text">
                <p>{description}</p>
                <p className="film-card__director"><strong>Director: {director}</strong></p>
                <p className="film-card__starring"><strong>Starring: Bill Murray, {starring.join(', ')} and other</strong></p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="page-content">
        <section className="catalog catalog--like-this">
          <h2 className="catalog__title">More like this</h2>

          <FilmsList films={similarFilms} />
        </section>

        <Footer />
      </div>
    </>
  );
}

export default Film;
