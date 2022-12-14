import {Link, useNavigate} from 'react-router-dom';

type FilmCardButtonsProps = {
  favFilmsLength: number;
  id: number;
  isAddReview?: boolean;
}

function FilmCardButtons({favFilmsLength, id, isAddReview}: FilmCardButtonsProps): JSX.Element {
  const navigate = useNavigate();
  const handleButtonClick = () => navigate(`/player/${id}`);

  return (
    <div className="film-card__buttons">
      <button className="btn btn--play film-card__button" onClick={handleButtonClick} type="button">
        <svg viewBox="0 0 19 19" width="19" height="19">
          <use xlinkHref="#play-s"></use>
        </svg>
        <span>Play</span>
      </button>
      <button className="btn btn--list film-card__button" type="button">
        <svg viewBox="0 0 19 20" width="19" height="20">
          <use xlinkHref="#add"></use>
        </svg>
        <span>My list</span>
        <span className="film-card__count">{favFilmsLength}</span>
      </button>
      {isAddReview && <Link to={`/films/${id}/review`} className="btn film-card__button">Add review</Link>}
    </div>
  );
}

export default FilmCardButtons;
