import {Link} from 'react-router-dom';
import {FilmType} from '../../types/films';

type FilmCardProps = {
  film: FilmType;
}

function FilmCard({film}: FilmCardProps): JSX.Element {
  const {name, previewImage, id} = film;

  return (
    <article className="small-film-card catalog__films-card">
      <div className="small-film-card__image">
        <img src={previewImage} alt={name} width="280" height="175" />
      </div>
      <h3 className="small-film-card__title">
        <Link className="small-film-card__link" to={`/films/${id}`}>{name}</Link>
      </h3>
    </article>
  );
}

export default FilmCard;
