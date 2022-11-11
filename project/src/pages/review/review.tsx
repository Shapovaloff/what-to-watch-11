import {Helmet} from 'react-helmet-async';
import {useParams} from 'react-router-dom';
import Logo from '../../components/logo/logo';
import {FilmsType} from '../../types/films';
import {getFilm} from '../../utils';
import AddReview from '../../components/add-review/add-review';
import Breadcrumbs from '../../components/breadcrumbs/breadcrumbs';
import UserBlock from '../../components/user-block/user-block';

type ReviewProps = {
  films: FilmsType;
}

function Review({films}: ReviewProps): JSX.Element {
  const params = useParams();
  const id = Number(params.id);
  const film = getFilm(films, id);
  const {name, backgroundColor, backgroundImage, posterImage} = film;

  return (
    <section style={{backgroundColor: backgroundColor}} className="film-card film-card--full">
      <Helmet>
        <title>WTW. Reviews</title>
      </Helmet>

      <div className="film-card__header">
        <div className="film-card__bg">
          <img src={backgroundImage} alt={name} />
        </div>

        <h1 className="visually-hidden">WTW</h1>

        <header className="page-header">
          <Logo />
          <Breadcrumbs name={name} id={id} />
          <UserBlock />
        </header>

        <div className="film-card__poster film-card__poster--small">
          <img src={posterImage} alt={`${name} poster`} width="218" height="327" />
        </div>
      </div>

      <AddReview />
    </section>
  );
}

export default Review;
